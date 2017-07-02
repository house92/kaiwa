import React, { Component } from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";
/**/
// import {toggleCheck, incNumber, decNumber} from "../actions";
import Layout from "./layout";

export default class Home extends Component {
  render() {
    return (
      <Grid className="anonymous-homepage">
        <h1 style={{display: "none"}}>Homepage</h1>
        <Row>
          <Col sm={12} md={6}>
            <div className="welcome">
              <h2>Welcome to Kaiwa</h2>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <Col md={12}>
                <div className="sign-up">
                  <h2>Sign up</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="about">
                  <h2>Who we are</h2>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Home.propTypes = {};

// const mapStateToProps = (state) => {
//   return {
//     // checked: state.checkBox.checked, value: state.number.value
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChangeCheck: () => {
//       dispatch(toggleCheck());
//     },
//     onIncrease: () => {
//       dispatch(incNumber());
//     },
//     onDecrease: () => {
//       dispatch(decNumber());
//     }
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
