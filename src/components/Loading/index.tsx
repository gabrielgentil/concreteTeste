import React from "react";

import { Container } from "./styles";
import Await from "../../assets/await.svg";

const Loading: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={Await} alt="Loading" />
        <h1>Loading...</h1>
      </div>
    </Container>
  );
};

export default Loading;
