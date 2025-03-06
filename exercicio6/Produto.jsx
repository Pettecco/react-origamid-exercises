import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = useContext(GlobalContext);

  if (global.dados === null) return null;

  return (
    <div>
      Produto:
      <ul>
        {global.dados.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
