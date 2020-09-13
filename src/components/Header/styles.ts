import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -440px;
  margin-top: -130px;

  > div {
    margin-left: 250px;
  }
`;

export const SearchForm = styled.form`
  padding-left: 80px;
  width: 100%;

  input {
    width: 650px;
    border: 1px solid #ddd;
    border-radius: 1px;
    font-size: 16px;
    height: 50px;
    color: #666;
    padding: 7px 12px;
  }

  button {
    border: 0;
    font-size: 10px;
    width: 100px;
    height: 50px;
    border-radius: 1px;
    color: var(--primary);
    background: var(--button);
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

export const SearchIcon = styled(FaSearch)`
  width: 32px;
  height: 14px;
  color: var(--primary);
`;
