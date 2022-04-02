import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  max-width: 240px;
  margin: 0px auto 36px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  margin: 0px;
  padding: 30px 0px;
  text-align: center;
  background-color: blue;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  border-radius: 0px 0px 8px 8px;
  background-color: yellow;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: 12px 0px;
`;

export const Label = styled.span`
  color: #606060;
  font-weight: 400;
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 12px;
  font-weight: 600;
`;
