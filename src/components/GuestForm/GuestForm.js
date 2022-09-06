import React from "react";
import { styles } from "./styles";

const GuestForm = (props) => {
  const {
    handleOnChange,
    handleOnSubmit,
    formValues: { name, phone, email },
  } = props;

  // Otra forma
  // const { name, phone, email } = formValues

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
      </div>
    </form>
  );
};

export default GuestForm;
