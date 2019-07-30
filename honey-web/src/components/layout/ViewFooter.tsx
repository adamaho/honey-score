import * as React from 'react';

import {
  styled
} from 'kingsbury/lib';

const ViewFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  z-index: 1;
  height: 60px;

  padding: 0px 15px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
`;

export const ViewFooter: React.FunctionComponent = ({
  children
}) => (
  <ViewFooterContainer>
    {children}
  </ViewFooterContainer>
);