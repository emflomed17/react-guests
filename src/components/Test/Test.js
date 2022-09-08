import React, { useState } from "react";
// esto es un hook, use...
import { useSelector, useDispatch } from 'react-redux';
import { setUserNameAction } from '../../redux/feature/test/actions'

export default function Test(){
  const [username, setUsername] = useState( "");
  const usernameRedux = useSelector((state) => state.test.userName);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setUsername(event.target.value);
  };

  const handleOnClick = () => {
    // despachar action que despacha una funcion reducer
    dispatch(setUserNameAction(username));
  }

  return(
    <div>
      <div className="Form">
        <h2>Componente Test - Username: {usernameRedux}</h2>
        <div>
          <label id="usuario">Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={username}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <button onClick={handleOnClick}>Actualizar userName en redux</button>
        </div>
      </div>
    </div>
  )
}