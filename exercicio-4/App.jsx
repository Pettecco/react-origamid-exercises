import React, { useState } from "react";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  const handleClick = async (event) => {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();

    setTimeout(() => {
      setCarregando(false);
      setDados(json);
    }, 500);
  };

  return (
    <>
      <div>
        <button style={{ margin: "0.5rem" }} onClick={handleClick}>
          notebook
        </button>
        <button style={{ margin: "0.5rem" }} onClick={handleClick}>
          smartphone
        </button>
        <button style={{ margin: "0.5rem" }} onClick={handleClick}>
          tablet
        </button>
      </div>
      {carregando && <h1>Carregando...</h1>}
      {dados && !carregando && <Produto dados={dados} />}
    </>
  );
};

export default App;
