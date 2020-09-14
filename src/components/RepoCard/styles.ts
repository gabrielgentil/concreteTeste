import styled, { css } from "styled-components";

import { RiStarLine } from "react-icons/ri";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

export const Topside = styled.div`
  > header {
    display: flex;
    align-items: center;
    font-size: 35px;
    font-family: "Raleway", sans-serif;
    color: var(--button);

    > p {
      margin: 8px 0 16px;
      font-size: 20px;
    }
  }
`;

export const Botside = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px;
        font-size: 20px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;
