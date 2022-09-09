import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";

function PrivateRoute({ children }) {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = localStorage.getItem('user');
  const isAuthenticated = !!user;
  if (!isAuthenticated) {
    return <Navigate to="/"/>
  }
  return children;
}

export default PrivateRoute;