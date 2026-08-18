import { useState } from "react";
import Card from "./Card.jsx";

function Grid({
  data,
  bestGuessNo,
  setBestGuessNo,
  currGuesses,
  setCurrGuesses,
  currGuessNo,
  setShowDialog,
}) {
  if (data) {
    function handleClick(e) {
      if (
        e.target.className == "card" ||
        e.target.parentElement.className == "card"
      ) {
        let clickedElem;
        if (e.target.className == "card") {
          clickedElem = e.target;
        } else {
          clickedElem = e.target.parentElement;
        }

        let newBestNo;
        if (!currGuesses.includes(clickedElem.id)) {
          setCurrGuesses([...currGuesses, clickedElem.id]);
          if (currGuessNo >= data.length - 1) {
            setCurrGuesses([]);
            setShowDialog(true);
            newBestNo = 10;
          }
        } else {
          setCurrGuesses([]);
        }
        if (bestGuessNo < currGuessNo) {
          newBestNo ? setBestGuessNo(10) : setBestGuessNo(currGuessNo);
        }
        setRandomIndexes(getRandomIndexes(data.length));
      }
    }
    const [randomIndexes, setRandomIndexes] = useState(
      getRandomIndexes(data.length),
    );
    const shuffledArr = randomIndexes.map((i) => data[i]);
    let cards = shuffledArr.map((elem) => {
      return (
        <Card key={elem.id} id={elem.id} name={elem.name} img={elem.img} />
      );
    });

    return (
      <div className="grid" onClick={handleClick}>
        {cards}
      </div>
    );
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
