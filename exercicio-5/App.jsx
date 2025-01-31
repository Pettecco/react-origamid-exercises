import React, { useEffect, useState } from "react";

const App = () => {
  const [dados, setDados] = useState(null);
  const [error, setError] = useState(null);

  const produto = localStorage.getItem("produto");

  const getProduct = async (productName) => {
    try {
      let response;
      console.log(`Buscando produto: ${productName}`);

      if (!productName) {
        console.error("Nome do produto não fornecido");
        return;
      }

      response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${productName}`
      );

      const json = await response.json();
      console.log("Produto carregado:", json);
      setDados(json);

      localStorage.setItem("produto", json.nome);
    } catch (err) {
      console.error("Erro ao carregar produto:", err);
      setError("Falha ao carregar os dados do produto.");
    }
  };

  useEffect(() => {
    if (produto) {
      getProduct(produto);
    }
  }, [produto]);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {dados && <h1>Preferência: {dados.nome}</h1>}

      <button
        style={{ margin: "0.5rem" }}
        onClick={() => getProduct("notebook")}
      >
        notebook
      </button>
      <button
        style={{ margin: "0.5rem" }}
        onClick={() => getProduct("smartphone")}
      >
        smartphone
      </button>

      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>RS {dados.preco} </p>
        </div>
      )}
    </div>
  );
};

export default App;
