import * as React from 'react';

import {
  Button,
  Drawer
} from 'kingsbury/lib';

// TODO: Change this to be included in index in kingsbury
import {
  DrawerState
} from 'kingsbury/lib/components/drawer/types';
import EditScoreboardForm from './EditScoreboardForm';

interface IEditScoreboardProps {
  drawerState: DrawerState;
  setDrawerState: (drawerState: DrawerState) => void;
};

const EditScoreboard: React.FunctionComponent<IEditScoreboardProps> = ({
  drawerState,
  setDrawerState
}) => {
  return (
    <Drawer
      drawerType="vertical"
      drawerState={drawerState}
      setDrawerState={setDrawerState}
      drawerHeaderContent={(
        <Button
          buttonType="primary"
          onClick={() => setDrawerState('CLOSED')}
        >
          save
        </Button>
      )}
    >
      <EditScoreboardForm
        drawerState={drawerState}
      />
    </Drawer>  
  );
}

export default EditScoreboard;
