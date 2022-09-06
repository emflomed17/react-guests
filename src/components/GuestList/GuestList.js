import React from "react";
import ClickButton from "../ClickButton/ClickButton";
import "./styles.css";

const GuestList = (props) => {
  return (
    <div className="tableContainer">
      <table id="guests">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Delete</th>
          <th>ClickButton</th>
        </tr>
        {props.guests.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              <button onClick={() => props.handleOnRemove(item.id)}>
                X Delete
              </button>
            </td>
            <ClickButton />
          </tr>
        ))}
      </table>
    </div>
  );
};

export default GuestList;
