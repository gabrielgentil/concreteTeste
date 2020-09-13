import React from "react";

import { Container, Topside, Botside, StarIcon } from "./styles";

interface Props {
  reponame: string;
  descripition?: string;
  stars: number;
}

const RepoCard: React.FC<Props> = ({ reponame, descripition, stars }) => {
  return (
    <Container>
      <Topside>
        <header>{reponame}</header>
        <p>{descripition}</p>
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
