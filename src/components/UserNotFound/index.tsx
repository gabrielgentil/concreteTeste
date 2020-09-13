import React from "react";

import { Container, Main, RightSide } from "./styles";
import Header from "../../pages/Header";

const UserNotFound: React.FC = () => {
  return (
    <Container>
      <Header />
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
