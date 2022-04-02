import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  max-width: 240px;
  margin: 0px auto 36px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  padding: 28px 0px;
  text-align: center;
  background-color: blue;
  border-radius: 8px 8px 0px 0px;
`;

export const Avatar = styled.img`
  display: block;
  width: auto;
  height: 96px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background-color: yellow;
`;

export const ProfileName = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Tag = styled.p`
  font-weight: 400;
  color: #808080;
`;

export const Location = styled.p`
  margin-bottom: 0px;
  font-weight: 600;
  color: #808080;
`;

export const Stats = styled.ul`
  display: flex;
  border-radius: 0px 0px 8px 8px;
  background-color: yellow;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  padding: 12px 30px;
`;

export const ProfileLabel = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #606060;
`;

export const Quantity = styled.span`
  font-size: 12px;
  font-weight: 600;
`;
