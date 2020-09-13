import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import Home from "../Home";
import UserNotFound from "../../components/UserNotFound";
import Loading from "../../components/Loading";
import { APIrepo, APIuser } from "../../@types";

interface Data {
  user?: APIuser;
  repos?: APIrepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (response) => {
      const [userResonse, reposResponse] = response;

      if (userResonse.status === 404) {
        setData({ error: "User not found :(" });
        return;
      }

      const user = await userResonse.json();
      const repos = await reposResponse.json();

      setData({
        user,
        repos,
      });
    });
  }, [username]);

  if (data?.error) {
    return <UserNotFound />;
  }

  if (!data?.user || !data?.repos) {
    return <Loading />;
  }

  return (
    <Container>
      <Home />

      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <div>
              {data.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  reponame={item.name}
                  descripition={item.descripition}
                  stars={item.stargazers_count}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
