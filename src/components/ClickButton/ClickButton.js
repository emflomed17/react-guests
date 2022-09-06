import React, { useState } from "react";

const ClickButton = () => {
  const [count, setCount] = useState(0);
  return (
    <td>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </td>
  );
};

export default ClickButton;
