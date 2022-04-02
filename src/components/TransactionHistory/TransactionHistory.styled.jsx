import styled from '@emotion/styled';

export const TransactionHistoryContainer = styled.table`
  table-layout: fixed;
  width: 480px;
  margin: 0px auto;
  border-collapse: collapse;
  border: 3px solid green;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);

  th,
  td {
    padding: 20px;
  }

  td {
    text-align: center;
  }

  thead th {
    border: 3px solid green;
  }

  tbody tr:nth-of-type(odd) {
    background-color: yellow;
  }

  tbody tr:nth-of-type(even) {
    background-color: blue;
    color: white;
  }

  // tbody td:not(:last-child) {
  //   border-right: 2px solid green;
  // }
`;
