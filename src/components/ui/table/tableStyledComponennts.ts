import { styled } from 'styled-components';

const ScrollTableWrapper = styled.div`
  width: 100%;
  height: 600px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f8f9fa;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5e6674;
    border-radius: 4px;
  }
`;

const TableWrapper = styled.div`
  border: 1px solid #e0e5eb;
  border-radius: 10px;
  margin: 40px;
  overflow: hidden;
`;

export const DeleteCellButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40px;
  width: 40px;
  background-color: #fee3e3;
  border-radius: 8px;
  &.disabled {
    background-color: #e0e5eb;
  }
`;

export const St = { ScrollTableWrapper, TableWrapper, DeleteCellButton };
