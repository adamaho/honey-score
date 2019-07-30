import * as React from 'react';

import {
  styled
} from 'kingsbury/lib';

const ViewBodyContainer = styled.div`
  flex: 1;
  padding: 20px 20px 0px 20px;

  overflow-y: scroll;
`;

export const ViewBody: React.FunctionComponent = ({
  children
}) => (
  <ViewBodyContainer>
    {children}
  </ViewBodyContainer>
);