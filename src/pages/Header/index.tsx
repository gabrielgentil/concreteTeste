import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import GithubTitulo from "../../components/GithubTitulo";

import { Container, SearchForm, SearchIcon } from "./styles";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate("/" + search.toLowerCase().trim());
  }

  return (
    <Container>
      <GithubTitulo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <button>
          <SearchIcon />
        </button>
      </SearchForm>
    </Container>
  );
};

export default Header;
