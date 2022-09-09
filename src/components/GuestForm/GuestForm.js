import React from "react";
import { styles } from "./styles";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/feature/auth/actions";
import {useNavigate} from "react-router-dom";

const GuestForm = (props) => {
  const {
    handleOnChange,
    handleOnSubmit,
    formValues: { name, phone, email },
  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Otra forma
  // const { name, phone, email } = formValues

  const handleOnLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)} style={styles.formContainer}>
      <div>
        <label>Name</label>
        <input
          name="name"
          value={name}
          onChange={(event) => handleOnChange(event)}
          style={styles.inputText}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          name="email"
          value={email}
          onChange={(event) => handleOnChange(event)}
          style={styles.inputText}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          name="phone"
          value={phone}
          onChange={(event) => handleOnChange(event)}
          style={styles.inputText}
        />
      </div>
      <div style={styles.buttonsContainer}>
        <button id="submitGuest" type="submit">
          Add Guest
        </button>
        <button onClick={() => props.handleOnClear()}>Clear</button>
        <button onClick={handleOnLogout}>Logout</button>
      </div>
    </form>
  );
};

export default GuestForm;
