import React from "react";

import { Container, Main, RightSide } from "./styles";
import Home from "../../pages/Home";

const UserNotFound: React.FC = () => {
  return (
    <Container>
      <Home />
      <Main>
        <RightSide>
          <div>
            <h1>User not found :(</h1>
          </div>
        </RightSide>
      </Main>
    </Container>
  );
};

export default UserNotFound;
