import styled from "styled-components"

const BasicTable = styled.table`
  width: 100%;
  background-color: #1f2937;
  border-radius: 6px;

  td {
    padding: 10px 16px;

    &:first-child {
      font-weight: 500;
      border-right: 1px solid #2b3544;
    }
  }
  tr:not(tr:last-child) td {
    border-bottom: 1px solid #2b3544;
  }
`

export default BasicTable
