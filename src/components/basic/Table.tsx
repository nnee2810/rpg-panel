import styled from "styled-components"

const Table = styled.table`
  width: 100%;
  border-radius: 6px;
  background-color: rgb(31, 41, 55);
  th,
  td {
    text-align: center;
    padding: 16px;
  }
  th:first-child,
  td:first-child {
    text-align: left;
  }
  th:last-child,
  td:last-child {
    text-align: right;
  }
  td {
    border-top: 1px solid rgba(55, 65, 81, 0.75);
  }
  th:not(th:last-child),
  td:not(td:last-child) {
    border-right: 1px solid rgb(55, 65, 81, 0.75);
  }
`

export default Table
