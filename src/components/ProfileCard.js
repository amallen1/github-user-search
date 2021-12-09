import React from "react";
import Moment from "moment";
import {
  Card,
  Header,
  AvatarContainer,
  MainInfo,
  NameSection,
  Bio,
  NoBio,
  Stats,
  Links,
  Icon,
  Unavailable,
} from "./ProfileCardStyles";

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
