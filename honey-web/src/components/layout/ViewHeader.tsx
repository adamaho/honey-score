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
  justify-content: center;
  align-items: center;

  z-index: 1;
  height: 60px;

  box-shadow: 0px 0px 7px rgba(0,0,0,0.25);
`;

export const ViewHeader: React.FunctionComponent<IViewHeaderProps> = ({
  title
}) => (
  <ViewHeaderContainer>
    <H1>{title}</H1>
  </ViewHeaderContainer>
);