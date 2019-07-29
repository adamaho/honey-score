import * as React from 'react';

import {
  styled,
  H1
} from 'kingsbury/lib';

interface IViewHeaderProps {
  title: string;
};

const ViewHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  justify-content: center;

  height: 100px;
`;

export const ViewHeader: React.FunctionComponent<IViewHeaderProps> = ({
  title
}) => (
  <ViewHeaderContainer>
    <H1>{title}</H1>
  </ViewHeaderContainer>
);