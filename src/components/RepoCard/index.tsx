import React from "react";

import { Container, Topside, Botside, StarIcon } from "./styles";

interface Props {
  reponame: string;
  description?: string;
  stars: number;
}

const RepoCard: React.FC<Props> = ({ reponame, description, stars }) => {
  return (
    <Container>
      <Topside>
        <header>{reponame}</header>
        <p>{description}</p>
      </Topside>
      <Botside>
        <ul>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;
