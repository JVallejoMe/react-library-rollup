import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const ECTable = styled.table`
  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-of-type(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
`;

export const ECCardNoId = styled(Card)`
  height: 100%;
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
