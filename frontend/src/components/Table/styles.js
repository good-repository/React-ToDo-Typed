import styled from "styled-components";

export const Styles = styled.div`
  table {
    border-radius: 1rem;
    background-color: #fff;
    border-spacing: 0;
    width: 100%;
    tr {
      height: 3rem;

      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    tbody {
      tr {
        :hover {
          background-color: #eee;

          &:last-child {
            border-radius: 1rem;
            overflow: hidden;
            td {
              &:first-of-type {
                border-bottom-left-radius: 1rem;
              }
              &:last-of-type {
                border-bottom-right-radius: 1rem;
              }
            }
          }
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #ccc;
      text-align: center;

      :first-child {
        width: 60%;
      }
    }

    td {
      :first-child {
        text-align: start;
      }
    }
  }
`;
