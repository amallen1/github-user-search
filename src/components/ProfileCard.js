import React from "react";
import styled from "styled-components";
import Moment from "moment";

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
  position: relative;

  @media (min-width: 900px) {
    margin-bottom: 0rem;
  }
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
  @media (min-width: 900px) {
    /* display: flex;
    justify-content: space-between; */
    /* margin-right: auto; */
    display: flex;
    p {
      /* margin-left: 6rem; */
      position: absolute;
      right: 0px;
      top: 1.25rem;
    }
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

  @media (min-width: 500px) {
    font-size: 0.9375rem;
  }

  @media (min-width: 900px) {
    margin-left: 8.7rem;
    margin-top: -2rem;
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

  @media (min-width: 900px) {
    padding-left: 2rem;
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

    li {
      :nth-child(2) {
        order: 2;
      }

      :nth-child(4) {
        order: 2;
      }
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

const Icon = styled.svg``;


const ProfileCard = ({ data, loaded }) => {
  return (
    <div>
      <Card>
        <Header>
          <AvatarContainer>
            <img src={loaded ? data.avatar_url : null} alt="avatar" />
          </AvatarContainer>

          <MainInfo>
            <NameSection>
              <h1>{loaded ? data.name : null}</h1>
              <h3>@{loaded ? data.login : null}</h3>
            </NameSection>

            <div>
              <p>
                Joined{" "}
                {loaded ? Moment(data.created_at).format("D MMM YYYY") : null}
              </p>
            </div>
          </MainInfo>
        </Header>

        <Bio>
          {loaded && data.bio !== null ? (
            data.bio
          ) : (
            <NoBio>This profile has no bio</NoBio>
          )}
        </Bio>

        <Stats>
          <ul>
            <li>
              <p>Repos</p>
              <span>{loaded ? data.public_repos : 0}</span>
            </li>

            <li>
              <p>Followers</p>
              <span>{loaded ? data.followers : 0}</span>
            </li>

            <li>
              <p>Following</p>
              <span>{loaded ? data.following : 0}</span>
            </li>
          </ul>
        </Stats>

        <Links>
          <ul>
            <li>
              {/* <img src="/assets/icon-location.svg" alt="Location" /> */}
              <Icon height="20" width="14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
                  fill="#4b6a9b"
                />
              </Icon>

              {loaded && data.location !== null ? (
                <p>{data.location}</p>
              ) : (
                <Unavailable>Not available</Unavailable>
              )}
            </li>

            <li>
              <img src="/assets/icon-website.svg" alt="Website icon" />
              {loaded && data !== null && data.blog !== "" ? (
                <a href={data.blog}>{data.blog}</a>
              ) : (
                <Unavailable>Not available</Unavailable>
              )}
            </li>

            <li>
              <img src="/assets/icon-twitter.svg" alt="Twitter icon" />
              {loaded && data.twitter_username !== null ? (
                <p>{data.twitter_username}</p>
              ) : (
                <Unavailable>Not available</Unavailable>
              )}
            </li>

            <li>
              <img src="/assets/icon-company.svg" alt="Company icon" />

              {loaded && data.company !== null ? (
                <p>{data.company}</p>
              ) : (
                <Unavailable>Not available</Unavailable>
              )}
            </li>
          </ul>
        </Links>
      </Card>
    </div>
  );
};

export default ProfileCard;
