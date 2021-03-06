export interface APIuser {
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  blog?: string;
  company?: string;
  email?: string;
  location?: string;
}

export interface APIrepo {
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  html_url: string;
  description?: string;
}
