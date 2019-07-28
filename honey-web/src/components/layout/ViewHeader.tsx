import * as React from 'react';

import {
  styled,
  H1
} from 'kingsbury/lib';

import {
  AddButton
} from '~components/buttons/AddButton';

interface IViewHeaderProps {
  title: string;
  onCreateNew?: () => void;
};

const ViewHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ViewHeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;

  margin-top: 20px;
  padding: 0px 20px;
`;

const ViewHeaderTitle = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const ViewHeader: React.FunctionComponent<IViewHeaderProps> = ({
  title,
  onCreateNew
}) => (
  <ViewHeaderContainer>
    <ViewHeaderControls>
      {onCreateNew &&
        <AddButton onClick={onCreateNew}/>
      }
    </ViewHeaderControls>
    <ViewHeaderTitle>
      <H1>{title}</H1>
    </ViewHeaderTitle>
  </ViewHeaderContainer>
);