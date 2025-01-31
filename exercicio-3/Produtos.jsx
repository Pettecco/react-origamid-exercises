import React from "react";
import Titulo from "../exercicios/exercicio3/Titulo";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map(({ nome, propriedades }) => (
        <div style={{ border: "1px solid", margin: "1rem", padding: "1rem" }}>
          <div key={nome}>
            <p>{nome}</p>
            <ul>
              {propriedades.map((propriedade) => (
                <li key={propriedade}>{propriedade}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Produtos;
