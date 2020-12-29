import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;

function App() {
  return (
    <div className="App">
      <Title>Hello World</Title>
    </div>
  );
}

export default App;
