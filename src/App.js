import "./App.css";
import GuestsMain from "./components/GuestsMain/GuestsMain";
import Test from "./components/Test/Test";
import React from "react";
import {useSelector} from "react-redux";

function App() {
  const usernameRedux = useSelector((state) => state.test.userName);

  return (
    <div className="App">
      <h2>Lista de Invitados</h2>
      <h2>Componente App - Username: { usernameRedux }</h2>
      {/*<GuestsMain />*/}
      <Test/>
    </div>
  );
}

export default App;
