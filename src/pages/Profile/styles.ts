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

export const LeftSide = styled.div`
  margin-left: 22px;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  margin-left: -4px;
  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--verticalPadding);
  margin: 0 103px auto;

  > h2 {
    font-size: 20px;
    font-weight: 200;
  }

  > div {
    margin-top: 8px;

    display: grid;
    grid-gap: 16px;

    grid-template-columns: 1fr;
  }
`;
