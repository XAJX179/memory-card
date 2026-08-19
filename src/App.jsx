import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Grid.jsx";
import Dialog from "./Dialog.jsx";
import { getPokemons } from "./pokemon.js";

function App() {
  const [bestGuessNo, setBestGuessNo] = useState(0);
  const [currGuesses, setCurrGuesses] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  let currGuessNo = currGuesses.length;

  const pokemons = useAPI(getPokemons);

  if (pokemons) {
    return (
      <main>
        <header>
          <h1>Memory Game</h1>
          <span> Best: {bestGuessNo} </span>
          <span> Now: {currGuessNo} </span>
        </header>
        <Dialog showDialog={showDialog} setShowDialog={setShowDialog} />
        <dialog open closedby="any">
          <p>Don't click on a pokemon twice to win.</p>
          <form method="dialog">
            <button>Start</button>
          </form>
        </dialog>
        <Grid
          data={pokemons}
          bestGuessNo={bestGuessNo}
          setBestGuessNo={setBestGuessNo}
          currGuesses={currGuesses}
          setCurrGuesses={setCurrGuesses}
          currGuessNo={currGuessNo}
          setShowDialog={setShowDialog}
        />
      </main>
    );
  }
}

function useAPI(apiCall) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      apiCall().then((result) => {
        setData(result);
      });
    }
    return () => {
      ignore = true;
    };
  }, [apiCall]);
  return data;
}

export default App;
