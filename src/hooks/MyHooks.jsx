import { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);
  const addCount = () => {
    setCount(count + 1);
  };
  const subCount = () => {
    setCount(count - 1);
  };

  const toggleChange = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <button onClick={subCount}>Subtract</button>

      <h1>{count}</h1>
      <button onClick={addCount}>Add</button>

      <br />
      <br />
      <br />
      <div 
      style={{ 
        // display: "flex", 
        flexDirection: "column", }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="What is your name"
        />
        <button onClick={toggleChange}>Proceed</button>
        {toggle ? <h1> {name}</h1> : null}
      </div>
    </div>
  );
};
export default Hooks;
