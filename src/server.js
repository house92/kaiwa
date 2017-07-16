import path from "path";
import { Server } from "http";
import Express from "express";
import passport from "passport";
import session from "express-session";
import flash from "connect-flash";
import bodyParser from "body-parser";
import React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import { Provider } from "react-redux";
import routes from "./routes";
import { store } from "./store";
import serverRoutes from "./server/routes";
import NotFoundPage from "./components/notFoundPage";
require("../config/passport.js");

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, "static")));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(flash());

// For Passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Server-side logic for routes
app.use("/", serverRoutes);

app.use((req, res, next) => {
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  next();
});

// universal routing and rendering
app.get("*", (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        );
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render("index", { markup });
    }
  );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
