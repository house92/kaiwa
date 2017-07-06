import Sequelize from "sequelize";
const sequelize = new Sequelize("kaiwa_development", "root", "", {dialect: "postgresql"});
import Show from "../src/models/show";

const shows = [
  {
    name: "Fullmetal Alchemist",
    description: "The rules of alchemy state that to gain something, one must lose something of equal value. Alchemy is the process of taking apart and reconstructing an object into a different entity, with the rules of alchemy to govern this procedure. However, there exists an object that can bring any alchemist above these rules, the object known as the Philosopher's Stone. The young Edward Elric is a particularly talented alchemist who through an accident years back lost his younger brother Alphonse and one of his legs. Sacrificing one of his arms as well, he used alchemy to bind his brother's soul to a suit of armor. This lead to the beginning of their journey to restore their bodies, in search for the legendary Philosopher's Stone."
  },
  {
    name: "Death Note",
    description: "During just another normal day, Yagami Light stumbles upon a black notebook known as the Death Note. This notebook belongs to a shinigami, Ryuk, having the ability to kill anyone who has their name written in it. As the new owner of the Death Note, Light's true desires surface, yearning to cleanse the world of evil by murdering a large number of criminals. When the world begins to notice the existence of this unknown killer, legendary detective L is brought onto the case; starting a war between \"Kira\" and L. Whoever is able to find out the others identity first will be the one to survive. Based on the manga by Tsugumi Ohba and Takeshi Obata."
  },
  {
    name: "Naruto",
    description: "Before Naruto was born, a great demon fox had attacked the Hidden Leaf Village. A man known as the 4th Hokage sealed the demon inside the newly born Naruto, causing him to unknowingly grow up detested by his fellow villagers. Despite his lack of talent in many areas of ninjutsu, Naruto strives for only one goal: to gain the title of Hokage, the strongest ninja in his village. Desiring the respect he never received, Naruto works towards his dream with fellow friends Sasuke and Sakura and mentor Kakashi as they go through many trials and battles that come with being a ninja. Based on the manga by Kishimoto Masashi."
  },
  {
    name: "Dragon Ball Z",
    description: "Goku is back with his new son, Gohan, but just when things are getting settled down, the adventures continue. Whether he is facing enemies such as Frieza, Cell, or Buu, Goku is proven to be an elite of his own and discovers his race, Saiyan and is able to reach Super Saiyan 3 form. He meets many new people, gaining allies and well as enemies, as he still finds time to raise a family and be the happy-go-lucky Saiyan he is."
  },
  {
    name: "Fairy Tail",
    description: "Lucy is a 17-year-old girl, who wants to be a full-fledged mage. One day when visiting Harujion Town, she meets Natsu, a young man who gets sick easily by any type of transportation. But Natsu isnt just any ordinary kid, he's a member of one of the world's most (in)famous mage guilds: Fairy Tail."
  },
  {
    name: "Higurashi no Naku Koro ni",
    description: "After moving into the quiet town of Hinamizawa, Maebara Keiichi spends his days blissfully in school often playing games with his local friends. However, appearances can be deceiving. One fateful day, Keiichi stumbles upon news of a murder that had occurred in Hinamizawa. From this point on, horrific events unfold in front of Keiichi, as he soon learns his close friends may not be all that they seem. Based on the amateur mystery game by 7th Expansion, the story is told in a series of different scenarios."
  },
  {
    name: "Inuyasha",
    description: "Higurashi Kagome, after being pulled down a well by a demon, finds herself in Feudal Japan, where she learns that a powerful jewel has been reborn inside her body. After the jewel shatters in an attempt to retrieve it from one of the many demons who was after its power, Kagome must join forces with the half-demon Inu Yasha, who is also after the jewel."
  }
];

shows.forEach(show => {
  show.image = `${show.name.toLowerCase().replace(/ /g, "-")}.jpg`;
});

console.log(shows);

sequelize.sync()
  .then(() => {
    Show.destroy({truncate: true});
    shows.forEach(show => {
      Show.create(show);
    });
  });
