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
  display: flex;
  margin-bottom: 2.0625rem;
`;

const AvatarContainer = styled.div`
  margin-right: 1.1875rem;

  img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }

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
  @media (min-width: 1000px) {
    /* display: flex;
    justify-content: space-between; */
    /* margin-right: auto; */
  }
`;

const NameSection = styled.div`
  h1 {
    font-size: 1rem;
    line-height: normal;
    color: ${(props) => props.theme.usernameColor};
  }
  h3 {
    /* display: inline-block; */
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

  /* p {
    color: #4b6a9b;
  } */

  @media (min-width: 500px) {
    font-size: 0.9375rem;
  }

  @media (min-width: 900px) {
    margin-left: 8.7rem;
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

    @media (min-width: 900px) {
      margin-left: 8.7rem;
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

    p,
    a {
      position: absolute;
      left: 2.0625rem;
    }

    a {
      color: ${(props) => props.theme.textColor};
      :hover {
        text-decoration: underline;
      }
    }
  }
  @media (min-width: 500px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 900px) {
    margin-left: 8.7rem;
  }
`;

const NoBio = styled.p`
  color: ${(props) => props.theme.textColor};
  opacity: 0.75;
`;

const Unavailable = styled.p`
  color: #4b6a9b;
  opacity: 0.75;
  position: absolute;
  left: 2.0625rem;
`;

const ProfileCard = ({ data, loaded }) => {
  return (
    <div>
      <Card>
        <Header>
          <AvatarContainer>
            <img src={loaded && data ? data.avatar_url : null} alt="avatar" />
          </AvatarContainer>

          <MainInfo>
            <NameSection>
              <h1>{loaded && data ? data.name : null}</h1>
              <h3>@{loaded && data ? data.login : null}</h3>
            </NameSection>

            <div>
              {/* <p>Joined 25 Jan 2011</p> */}
              <p>Joined {loaded && data ? data.created_at : null}</p>
            </div>
          </MainInfo>
        </Header>

        <Bio>
          {loaded && data ? (
            data.bio !== null ? (
              data.bio
            ) : (
              <NoBio>This profile has no bio</NoBio>
            )
          ) : null}
        </Bio>

        <Stats>
          <ul>
            <li>
              <p>Repos</p>
              <span>{data ? data.public_repos : 0}</span>
            </li>

            <li>
              <p>Followers</p>
              <span>{data ? data.followers : 0}</span>
            </li>

            <li>
              <p>Following</p>
              <span>{data ? data.following : 0}</span>
            </li>
          </ul>
        </Stats>

        <Links>
          <ul>
            <li>
              <img src="/assets/icon-location.svg" alt="Location" />

              {loaded && data ? (
                data.location !== null ? (
                  <p>{data.location}</p>
                ) : (
                  <Unavailable>Not available</Unavailable>
                )
              ) : null}
            </li>

            <li>
              <img src="/assets/icon-website.svg" alt="Website icon" />
              {loaded && data !== null ? (
                data.blog !== "" ? (
                  <a href={data.blog}>{data.blog}</a>
                ) : (
                  <Unavailable>Not available</Unavailable>
                )
              ) : (
                <Unavailable>Not available</Unavailable>
              )}
            </li>

            <li>
              <img src="/assets/icon-twitter.svg" alt="Twitter icon" />
              {loaded && data ? (
                data.twitter_username !== null ? (
                  <p>{data.twitter_username}</p>
                ) : (
                  <Unavailable>Not available</Unavailable>
                )
              ) : null}
            </li>

            <li>
              <img src="/assets/icon-company.svg" alt="Company icon" />

              {loaded && data ? (
                data.company !== null ? (
                  <p>{data.company}</p>
                ) : (
                  <Unavailable>Not available</Unavailable>
                )
              ) : null}
            </li>
          </ul>
        </Links>
      </Card>
    </div>
  );
};

export default ProfileCard;
