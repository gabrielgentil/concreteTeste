import styled from "styled-components";

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--horizontalPadding) var(--verticalPadding);
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

export const RightSide = styled.div`
  @media (min-width: 768px) {
    width: 75%;
  }
  > div {
    position: absolute;
    left: 50%;
    top: 50%;

    > h1 {
      font-size: 40px;
      font-weight: 200;
      height: 41px;
      font-family: Raleway;
      color: var(--button);
    }
  }
`;
