import React from "react";

function Doremi(props) {
  return <h5>My name is {props.um}</h5>;
}

function App() {
  return (
    <div>
      <h2>Hi React!!</h2>
      <Doremi um="do" />
      <Doremi um="re" />
      <Doremi um="mi" />
    </div>
  );
}

export default App;
