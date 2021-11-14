import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: ${(props) => props.theme.shadow};
  padding: 2rem 1.5rem;
  font-size: 0.8125rem;

  @media (min-width: 500px) {
    padding: 2.5rem;
  }
`;

const Header = styled.div`
  display: flex; //only for right now
  margin-bottom: 2.0625rem;
`;

const AvatarContainer = styled.div`
  margin-right: 1.1875rem;

  @media (min-width: 500px) {
    img {
      height: 117px;
      width: 117px;
    }
  }
`;

const MainInfo = styled.div`
  @media (min-width: 500px) {
    p {
      font-size: 0.9375rem;
    }

    margin-top: 0.75rem;
  }
`;

const NameSection = styled.div`
  h1 {
    font-size: 1rem;
    line-height: normal;
    color: ${(props) => props.theme.usernameColor};
  }

  h3 {
    display: inline-block;
    color: var(--brightBlue);
    margin-bottom: 0.375rem;
    font-size: 0.8125rem;

    @media (min-width: 500px) {
      margin-bottom: 4px;
    }
  }

  @media (min-width: 500px) {
    h1 {
      font-size: revert;
      margin-bottom: 0.125rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;

const Bio = styled.div`
  margin-bottom: 1.4375rem;

  @media (min-width: 500px) {
    font-size: 0.9375rem;
  }
`;

const Stats = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 1.125rem 0.875rem 1.1875rem;
  margin-bottom: 1rem;

  ul {
    display: flex;
    text-align: center;

    li {
      width: 100%;
    }
  }

  p {
    font-size: 0.6875rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme.usernameColor};
  }

  @media (min-width: 500px) {
    ul {
      text-align: left;
    }
    padding: 0.9375rem 0.875rem 1.0625rem;

    margin-bottom: 1.875rem;

    p {
      font-size: 0.8125rem;
      margin-bottom: 1px;
    }

    span {
      font-size: 1.375rem;
    }
  }
`;

const Links = styled.div`
  ul {
    display: grid;

    li {
      display: flex;
      margin-bottom: 1rem;
      position: relative;
    }

    p {
      position: absolute;
      left: 2.0625rem;
    }
  }

  @media (min-width: 500px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const ProfileCard = () => {
  return (
    <div>
      <Card>
        <Header>
          <AvatarContainer>
            <img src="/assets/Oval.svg" />
          </AvatarContainer>

          <MainInfo>
            <NameSection>
              <h1>The Octocat</h1>
              <h3>@octocat</h3>
            </NameSection>

            <div>
              <p>Joined 25 Jan 2011</p>
            </div>
          </MainInfo>
        </Header>

        <Bio>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </Bio>

        <Stats>
          <ul>
            <li>
              <p>Repos</p>
              <span>8</span>
            </li>

            <li>
              <p>Followers</p>
              <span>3938</span>
            </li>

            <li>
              <p>Following</p>
              <span>9</span>
            </li>
          </ul>
        </Stats>

        <Links>
          <ul>
            <li>
              <img src="/assets/icon-location.svg" alt="Location" />
              <p>Location</p>
            </li>

            <li>
              <img src="/assets/icon-website.svg" alt="Website icon" />
              <p>Website</p>
            </li>

            <li>
              <img src="/assets/icon-twitter.svg" alt="Twitter icon" />
              <p>Twitter</p>
            </li>

            <li>
              <img src="/assets/icon-location.svg" alt="Company icon" />
              <p>Company</p>
            </li>
          </ul>
        </Links>
      </Card>
    </div>
  );
};

export default ProfileCard;
