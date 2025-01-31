import React from "react";
import Header from "../exercicios/exercicio3/Header";
import Home from "../exercicios/exercicio3/home";
import Produtos from "../exercicios/exercicio3/Produtos";
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {
  let Pagina = Home;
  const { pathname } = window.location;

  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
