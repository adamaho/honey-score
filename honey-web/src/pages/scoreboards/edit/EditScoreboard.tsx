import * as React from 'react';

import {
  styled,
  Button,
  Drawer,
  Icon,
  css
} from 'kingsbury/lib';

// TODO: Change this to be included in index in kingsbury
import {
  DrawerState
} from 'kingsbury/lib/components/drawer/types';

interface IEditScoreboardProps {
  drawerState: DrawerState;
  setDrawerState: (drawerState: DrawerState) => void;
};

interface IDrawerButtonProps {
  side: 'left' | 'right';
};

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0px 15px;
`;

const DrawerButtonContainer = styled.div<IDrawerButtonProps>`
  align-self: center;
  margin-left: ${(props) => props.side === 'left' ? '10px' : '0px'};
`;

const EditScoreboard: React.FunctionComponent<IEditScoreboardProps> = ({
  drawerState,
  setDrawerState
}) => {
  return (
    <Drawer
      drawerType="vertical"
      drawerState={drawerState}
      setDrawerState={setDrawerState}
    >
      <ContainerHeader>
        <DrawerButtonContainer side="left">
          <div onClick={() => setDrawerState('CLOSED')}>
            <Icon.Close />
          </div>
        </DrawerButtonContainer>
        <DrawerButtonContainer side="right">
          <Button
            buttonType="primary"
            onClick={() => setDrawerState('CLOSED')}
          >
            save
          </Button>
        </DrawerButtonContainer>
      </ContainerHeader>
    </Drawer>  
  );
}

export default EditScoreboard;
