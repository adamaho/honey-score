import * as React from 'react';

import {
  styled,
  Button,
  Input
} from 'kingsbury/lib';

import {
  DrawerState
} from 'kingsbury/lib/components/drawer/types';

interface IEditScoreboardForm {
  drawerState: DrawerState
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
`;

class EditScoreboardForm extends React.Component<IEditScoreboardForm> {
  render() {
    return (
      <Container>
        <StyledInput placeholder="Add Name" size="large" showBorder={false} />
        <StyledInput label="Game" />
        <StyledInput label="Players" />
      </Container>
    );
  }
}

export default EditScoreboardForm;

