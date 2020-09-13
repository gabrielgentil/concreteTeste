import styled from "styled-components";

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--horizontalPadding) var(--verticalPadding);

  > div {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -110px;
    margin-top: -200px;

    > img {
      height: 292px;
      margin-left: -105px;
    }

    > h1 {
      font-size: 40px;
      font-weight: 200;
      height: 41px;
      font-family: Raleway;
      color: var(--button);
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
