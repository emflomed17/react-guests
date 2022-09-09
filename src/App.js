import "./App.css";
import GuestsMain from "./components/GuestsMain/GuestsMain";
import Test from "./components/Test/Test";
import React from "react";
import {useSelector} from "react-redux";
import LoginForm from "./components/Login/LoginForm";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  // const usernameRedux = useSelector((state) => state.test.userName);

  return (
    <div className="App">
      {/*<h2>Lista de Invitados</h2>*/}
      {/*<h2>Componente App - Username: { usernameRedux }</h2>*/}
      {/*<GuestsMain />*/}
      {/*<Test/>*/}
      {/*<LoginForm/>*/}
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="guests" element={
          <PrivateRoute>
            <GuestsMain/>
          </PrivateRoute>
        }/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

function NotFound(){
  return <div>404 Not found</div>
}

export default App;
