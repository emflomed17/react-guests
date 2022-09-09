import { styles } from "../GuestForm/styles";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../redux/feature/auth/actions";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const authenticationError = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setFormValues((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: formValues.email,
      password: formValues.password
    }
    dispatch(authenticateUser(credentials));
  }

  useEffect(() => {
    if(isAuthenticated) {
      navigate("guests");
    }
  }, [isAuthenticated]);

  return (
    <div className="main-grid">
      <form onSubmit={(e) => handleOnSubmit(e)} style={styles.formContainer}>
        <div>
          <label>Email</label>
          <input
            name="email"
            value={formValues.email}
            onChange={(event) => handleOnChange(event)}
            style={styles.inputText}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            value={formValues.password}
            onChange={(event) => handleOnChange(event)}
            style={styles.inputText}
          />
        </div>
        <div style={styles.buttonsContainer}>
          <button id="submit" type="submit">
            { isLoading ? "Loading" : "Login"}
          </button>
          { authenticationError !== '' && <strong>{authenticationError}</strong> }
          {/*{ isAuthenticated && <strong>Valid credentials</strong> }*/}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;