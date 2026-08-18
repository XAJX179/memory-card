import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Grid.jsx";
import { getPokemons } from "./pokemon.js";

function App() {
  const pokemons = useAPI(getPokemons);

  return (
    <main>
      <Grid data={pokemons} />
    </main>
  );
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
