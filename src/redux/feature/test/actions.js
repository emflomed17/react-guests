import { setUserName } from './testSlice';

export const setUserNameAction = (userName) => (dispatch) =>{
  // llamada a apis o servicios
  // la respuesta se asigna al estado globl

  // vamos a despachar una funcion reducer
  dispatch(setUserName(userName));
}

// function setUserNameAction (usernmae){
//   return function (dispatch){
//
//   }
// }