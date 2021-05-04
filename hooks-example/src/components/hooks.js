import React, { useState } from "react"

function Example() {
  const [count, setCount] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click here
      </button>
      
      <button onClick={() => setIsModalActive(!isModalActive)}>
        Modal button
      </button>
    </div>
  );
}