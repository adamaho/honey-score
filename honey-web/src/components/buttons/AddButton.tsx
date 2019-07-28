import * as React from 'react';

import {
  styled
} from 'kingsbury/lib';

import AddIcon from '../../assets/icons/AddIcon';

interface IAddButtonProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const AddButtonContainer = styled.div`

  outline: none !important;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const AddButton = ({
  onClick
}: IAddButtonProps) => (
  <AddButtonContainer onClick={onClick}>
    <AddIcon />
  </AddButtonContainer>  
);