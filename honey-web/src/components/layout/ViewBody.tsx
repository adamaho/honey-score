import * as React from 'react';

import {
  styled
} from 'kingsbury/lib';

const ViewBodyContainer = styled.div`
  flex: 1;
`;

export const ViewBody: React.FunctionComponent = ({
  children
}) => (
  <ViewBodyContainer>
    {children}
  </ViewBodyContainer>
);