import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  :nth-of-type(2n) {
    background: yellow;
  }
  :nth-of-type(2n + 1) {
    background: blue;
    color: white;
  }

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Status = styled.span`
    display: block;
    margin-left: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => {
      if (props.isOnline) {
        return 'darkgreen';
      } else {
        return 'darkred';
      }
    }};
  }
`;

export const Avatar = styled.img`
  width: 48px;
  margin-left: 24px;
`;

export const FriendName = styled.p`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  }
`;
