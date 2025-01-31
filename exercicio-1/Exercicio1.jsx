import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const calcTotal = (dados) => {
  let total = 0;
  dados.compras.forEach((compra) => {
    total += parseFloat(compra.preco.replace("R$", "").trim());
  });
  return total;
};

const App = () => {
  const dados = luana;
  const estiloAtivo = { color: "green" };
  const estiloInativo = { color: "red" };
  const total = calcTotal(dados);
  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={dados.ativa ? estiloAtivo : estiloInativo}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total gasto: {total}</p>
      {total > 10000 && <p>O gasto é maior que 10 mil!</p>}
    </div>
  );
};

export default App;
