import React, { useEffect, useState } from "react";
import GuestForm from "../GuestForm/GuestForm";
import GuestList from "../GuestList/GuestList";

function GuestsMain() {
  const [guests, setGuests] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [showError, setShowError] = useState(false);

  const handleOnChange = (event) => {
    setFormValues((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnRemove = (id) => {
    const filteredItems = guests.filter((item) => item.id !== id);
    setGuests(filteredItems);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.phone === ""
    ) {
      setShowError(true);
      return;
    }
    const newItem = {
      ...formValues,
      id: Date.now(),
    };
    setGuests((guests) => guests.concat(newItem));
  };

  const handleOnClear = () => {
    setGuests([]);
    setFormValues({ name: "", email: "", phone: "" });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setGuests(json));
  }, []);

  return (
    <div className="main-grid">
      {guests.length === 0 ? (
        <h5>No elements</h5>
      ) : (
        <GuestList guests={guests} handleOnRemove={handleOnRemove} />
      )}
      <GuestForm
        formValues={formValues}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        handleOnClear={handleOnClear}
      />
      {/* {showError && <p>Debes llenar todos los campos</p>} */}
    </div>
  );
}

export default GuestsMain;
