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
  justify-content: space-between;
  align-items: center;

  z-index: 1;
  height: 100px;

  padding: 0px 20px;
`;

const ViewHeaderRightContent = styled.div``;

export const ViewHeader: React.FunctionComponent<IViewHeaderProps> = ({
  title,
  children
}) => (
  <ViewHeaderContainer>
    <H1>{title}</H1>
    <ViewHeaderRightContent>
      {children}
    </ViewHeaderRightContent>
  </ViewHeaderContainer>
);
