import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  ProfileName,
  Tag,
  Location,
  Stats,
  ProfileLabel,
  Avatar,
  StatsList,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsList>
          <ProfileLabel>Followers</ProfileLabel>
          <Quantity>{stats.followers}</Quantity>
        </StatsList>
        <StatsList>
          <ProfileLabel>Views</ProfileLabel>
          <Quantity>{stats.views}</Quantity>
        </StatsList>
        <StatsList>
          <ProfileLabel>Likes</ProfileLabel>
          <Quantity>{stats.likes}</Quantity>
        </StatsList>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
