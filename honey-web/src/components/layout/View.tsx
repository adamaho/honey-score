import * as React from 'react';

import {
  styled
} from 'kingsbury/lib';

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
`;

export const View: React.FunctionComponent = ({
  children
}) => (
  <ViewContainer>
    {children}
  </ViewContainer>
);