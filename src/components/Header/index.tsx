import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, SearchIcon, SearchForm } from "./styles";

import GithubTitulo from "../../components/GithubTitulo";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate("/" + search.toLowerCase().trim());
  }
  return (
    <Container>
      <div>
        <GithubTitulo />
      </div>
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
