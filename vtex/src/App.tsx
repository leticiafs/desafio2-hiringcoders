import React from "react";
import Home from "./view/Home";
import logo from '../src/imgs/logo.png';

const App: React.FC = () => {
  return (
      <div>
        <div className="top">
          <img src={logo} width="180px"/>
          <hr/>
        </div>
        <Home/>
        <section className="foot">
          <p>Feito com ❤ por Leticia Felix para o Hiring Coders 2021. </p>
        </section>
      </div>

  );
}

export default App;