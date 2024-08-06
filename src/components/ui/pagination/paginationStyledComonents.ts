import { styled } from 'styled-components';

const PaginationWrapper = styled.div`
  position: sticky;
  z-index: 2;
  background-color: white;
  bottom: 0;
  left: 0;
  height: 50px;
  border-top: 1px solid #e0e5eb;
  padding: 8px;
`;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;
`;
const PaginationButton = styled.button`
  cursor: pointer;
  width: 32px;
  height: 32px;

  border: 1px solid #e0e5eb;
  border-radius: 6px;
  background-color: inherit;
  &.selected {
    background-color: #f2f5f8;
  }
  &.disabled {
    color: #ced5de;
  }
  &:hover {
    background-color: #f2f5f8;
  }
`;
export const Sp = { PaginationWrapper, PaginationContainer, PaginationButton };
