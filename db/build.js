import Sequelize from "sequelize";
const sequelize = new Sequelize("kaiwa_development", "root", "", {dialect: "postgresql"});
import Genre from "../src/models/genre";
import Show from "../src/models/show";
import ShowGenre from "../src/models/showGenre";

const shows = [
  {
    name: "Fullmetal Alchemist",
    description: "The rules of alchemy state that to gain something, one must lose something of equal value. Alchemy is the process of taking apart and reconstructing an object into a different entity, with the rules of alchemy to govern this procedure. However, there exists an object that can bring any alchemist above these rules, the object known as the Philosopher's Stone. The young Edward Elric is a particularly talented alchemist who through an accident years back lost his younger brother Alphonse and one of his legs. Sacrificing one of his arms as well, he used alchemy to bind his brother's soul to a suit of armor. This lead to the beginning of their journey to restore their bodies, in search for the legendary Philosopher's Stone.",
    genres: [
      "Action",
      "Adventure",
      "Fantasy",
      "Military"
    ],
    include: [Genre]
  },
  {
    name: "Death Note",
    description: "During just another normal day, Yagami Light stumbles upon a black notebook known as the Death Note. This notebook belongs to a shinigami, Ryuk, having the ability to kill anyone who has their name written in it. As the new owner of the Death Note, Light's true desires surface, yearning to cleanse the world of evil by murdering a large number of criminals. When the world begins to notice the existence of this unknown killer, legendary detective L is brought onto the case; starting a war between \"Kira\" and L. Whoever is able to find out the others identity first will be the one to survive. Based on the manga by Tsugumi Ohba and Takeshi Obata.",
    genres: [
      "Crime",
      "Psychological",
      "Supernatural",
      "Thriller"
    ],
    include: [Genre]
  },
  {
    name: "Naruto",
    description: "Before Naruto was born, a great demon fox had attacked the Hidden Leaf Village. A man known as the 4th Hokage sealed the demon inside the newly born Naruto, causing him to unknowingly grow up detested by his fellow villagers. Despite his lack of talent in many areas of ninjutsu, Naruto strives for only one goal: to gain the title of Hokage, the strongest ninja in his village. Desiring the respect he never received, Naruto works towards his dream with fellow friends Sasuke and Sakura and mentor Kakashi as they go through many trials and battles that come with being a ninja. Based on the manga by Kishimoto Masashi.",
    genres: [
      "Action",
      "Adventure",
      "Fantasy",
      "Shounen"
    ],
    include: [Genre]
  },
  {
    name: "Dragon Ball Z",
    description: "Goku is back with his new son, Gohan, but just when things are getting settled down, the adventures continue. Whether he is facing enemies such as Frieza, Cell, or Buu, Goku is proven to be an elite of his own and discovers his race, Saiyan and is able to reach Super Saiyan 3 form. He meets many new people, gaining allies and well as enemies, as he still finds time to raise a family and be the happy-go-lucky Saiyan he is.",
    genres: [
      "Action",
      "Comedy",
      "Fantasy",
      "Superhuman"
    ],
    include: [Genre]
  },
  {
    name: "Fairy Tail",
    description: "Lucy is a 17-year-old girl, who wants to be a full-fledged mage. One day when visiting Harujion Town, she meets Natsu, a young man who gets sick easily by any type of transportation. But Natsu isnt just any ordinary kid, he's a member of one of the world's most (in)famous mage guilds: Fairy Tail.",
    genres: [
      "Action",
      "Adventure",
      "Fantasy",
      "Comedy",
      "Magic"
    ],
    include: [Genre]
  },
  {
    name: "Higurashi no Naku Koro ni",
    description: "After moving into the quiet town of Hinamizawa, Maebara Keiichi spends his days blissfully in school often playing games with his local friends. However, appearances can be deceiving. One fateful day, Keiichi stumbles upon news of a murder that had occurred in Hinamizawa. From this point on, horrific events unfold in front of Keiichi, as he soon learns his close friends may not be all that they seem. Based on the amateur mystery game by 7th Expansion, the story is told in a series of different scenarios.",
    genres: [
      "Mystery",
      "Thriller",
      "Psychological",
      "Drama"
    ],
    include: [Genre]
  },
  {
    name: "Inuyasha",
    description: "Higurashi Kagome, after being pulled down a well by a demon, finds herself in Feudal Japan, where she learns that a powerful jewel has been reborn inside her body. After the jewel shatters in an attempt to retrieve it from one of the many demons who was after its power, Kagome must join forces with the half-demon Inu Yasha, who is also after the jewel.",
    genres: [
      "Adventure",
      "Fantasy",
      "Drama",
      "Supernatural",
      "Romance"
    ],
    include: [Genre]
  }
];

shows.forEach(show => {
  show.image = `${show.name.toLowerCase().replace(/ /g, "-")}.jpg`;
});

const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Crime",
    "Drama",
    "Dystopian",
    "Ecchi",
    "Fantasy",
    "Harem",
    "Historical",
    "Horror",
    "Josei",
    "Magic",
    "Mecha",
    "Military",
    "Mystery",
    "Parody",
    "Psychological",
    "Romance",
    "School",
    "Sci-Fi",
    "Seinen",
    "Shoujo",
    "Shounen",
    "Slice of life",
    "Space",
    "Sports",
    "Superhuman",
    "Supernatural",
    "Tragedy",
    "Vampire"
]

sequelize.sync()
  .then(() => {
    Genre.destroy({truncate: true});
    Show.destroy({truncate: true});
    ShowGenre.destroy({truncate: true});

    genres.forEach(genre => {
      Genre.create({name: genre});
    });
  })
  .then(() => {
    shows.forEach(show => {
      Show.create(show)
        .then(createdShow => {
          show.genres.forEach(async (genre) => {
            const genreObject = await Genre.findOne({ where: {name: genre} });
            console.log(genre, genreObject);
            ShowGenre.create({showId: createdShow.id, genreId: genreObject.id });
          });
        });
    });
  });
