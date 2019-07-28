import * as React from 'react';

import {
  styled
} from 'kingsbury/lib';

const ViewFooterContainer = styled.div`
  position: absolute;
  bottom: 0px;

  height: 60px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);

  width: 100%;
`;

export const ViewFooter: React.FunctionComponent = ({
  children
}) => (
  <ViewFooterContainer>
    {children}
  </ViewFooterContainer>
);