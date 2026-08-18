import { useState } from "react";
import Card from "./Card.jsx";

function Grid({ data }) {
  if (data) {
    const [randomIndexes, setRandomIndexes] = useState(
      getRandomIndexes(data.length),
    );
    const shuffledArr = randomIndexes.map((i) => data[i]);
    let cards = shuffledArr.map((elem) => {
      return (
        <Card key={elem.id} id={elem.id} name={elem.name} img={elem.img} />
      );
    });

    return <div className="grid">{cards}</div>;
  }
}

function getRandomIndexes(max) {
  console.time("random");
  const indexes = [];
  while (indexes.length < max) {
    let index = getRandomInt(max);
    if (!indexes.includes(index)) {
      indexes.push(index);
    }
  }
  console.timeEnd("random");
  return indexes;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default Grid;
