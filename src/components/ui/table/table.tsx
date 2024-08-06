import styled from 'styled-components';

const Root = styled.table`
  position: relative;
  min-width: 100%;

  border-spacing: 0;
  border-collapse: collapse;
`;
const Head = styled.thead`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: #f0f3f7;
`;
const Body = styled.tbody``;
const Row = styled.tr`
  button {
    display: none;
  }
  &:hover {
    background-color: #f7f8f9;
    button {
      display: inline;
    }
  }
  &.noHover {
    &:hover {
      background-color: inherit;
    }
  }
`;
const HeaderCell = styled.th`
  text-align: left;
  font-weight: 500;
  color: #697180;
  font-size: 13px;
  line-height: 16px;
  padding: 8px 0 8px 12px;
`;
const Cell = styled.td`
  position: relative;
  padding: 16px 0 16px 12px;
  &:last-child {
    width: 64px;
  }
`;
export const Table = { Body, Cell, Head, HeaderCell, Root, Row };
