import styled, { css } from "styled-components";
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
  RiStarLine,
  RiInboxLine,
} from "react-icons/ri";

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin-left: 24px;
    > h1 {
      font-size: 35px;
      font-family: Raleway;
      color: var(--gray-dark);
      font-weight: 300;
    }
    > h2 {
      font-size: 20px;
      color: var(--username);
      font-weight: 300;
      font-family: Raleway;
      color: #5c5c5c;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
  }
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%;
  margin-top: 32px;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

const styleSpan = css`
  font-size: 20px;
  color: var(--username);
  font-weight: 300;
  font-family: Raleway;
  color: #5c5c5c;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const Row = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  > li {
    display: flex;
    align-items: center;
    > span {
      ${styleSpan}
    }
    > * {
      margin-right: 5px;
    }
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCSS}
`;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  li + li {
    margin-top: 10px;
  }
  span {
    ${styleSpan}
  }
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCSS}
`;

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCSS}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconCSS}
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const RepoIcon = styled(RiInboxLine)`
  ${iconCSS}
`;
