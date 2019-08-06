import * as React from 'react';

import {
  styled,
  Button,
  Drawer,
  css
} from 'kingsbury/lib';

import {
  EditView
} from '../Scoreboards';

import {
  XIcon
} from '../../../assets/icons/XIcon';

interface IEditScoreboardProps {
  editView: EditView;
  setEditView: (editView: EditView) => void;
};

interface IContainerProps {
  editView: EditView;
};

interface IModeConfigObject {
  top: string | number;
  borderRadius: string;
};

interface IModeConfig {
  CLOSED: IModeConfigObject;
  PARTIAL: IModeConfigObject;
  OPEN: IModeConfigObject;
};

interface IDrawerControlProps {
  side: 'left' | 'right';
  open: boolean;
};

interface IDrawerButtonProps {
  side: 'left' | 'right';
};

const EDIT_VIEW_CONFIG_MAP: IModeConfig = {
  CLOSED: {
    top: '100%',
    borderRadius: '0px'
  },
  PARTIAL: {
    top: '70%',
    borderRadius: '8px'
  },
  OPEN: {
    top: '0',
    borderRadius: '0px'
  }
}

const Container = styled.div<IContainerProps>`
  position: fixed;
  top: ${(props) => EDIT_VIEW_CONFIG_MAP[props.editView].top};
  background-color: ${(props) => props.theme.colors.white};

  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => EDIT_VIEW_CONFIG_MAP[props.editView].borderRadius};

  box-shadow: ${(props) => `0px 0px 7px rgba(${props.theme.colors.blackRGB}, 0.20)`};

  transition: all ${(props) => props.theme.animations.time.fast} cubic-bezier(0,1.04,.47,.98);
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0px 15px;
`;

const DrawerControlContainer = styled.div`
  display: flex;
  flex-direction: row;

  cursor: pointer;
`;

const DrawerButtonContainer = styled.div<IDrawerButtonProps>`
  margin-top: 10px;
  align-self: center;

  margin-left: ${(props) => props.side === 'left' ? '10px' : '0px'};
`;

const DrawerControl = styled.div<IDrawerControlProps>`
  height: 6px;
  width: 35px;
  border-radius: 3px;
  margin-top: ${(props) => props.open ? '15px' : '10px'};

  background-color: ${(props) => props.theme.colors.darkGrey};

  ${(props) => props.open ? css`
      transform-origin: center;
      transform:
        ${() => props.side === 'left' && 'translateX(10px)'}
        rotate(${() => props.side === 'left' ? '35deg' : '-35deg'});
    ` : css`
      ${props.side === 'left' && `transform: translateX(3px)`};
    `
  };

  transition: all 0.25s ease-out;
  transition-delay: 0.05s;
`;

const EditScoreboard: React.FunctionComponent<IEditScoreboardProps> = ({
  editView,
  setEditView
}) => {
  const isOpen = editView === 'OPEN';

  return (
    <Drawer
      drawerType="vertical"
      drawerState={editView}
    >
      <ContainerHeader>
        <DrawerButtonContainer side="left">
          <div onClick={() => setEditView('CLOSED')}>
            <XIcon />
          </div>
        </DrawerButtonContainer>
        <DrawerControlContainer
          onClick={editView === 'PARTIAL' ? 
            () => setEditView('OPEN') :
            () => setEditView('PARTIAL')
          }
        >
          <DrawerControl
            open={isOpen}
            side="left"
          />
          <DrawerControl
            open={isOpen}
            side="right"
          />
        </DrawerControlContainer>
        <DrawerButtonContainer side="right">
          <Button
            buttonType="primary"
            onClick={() => setEditView('CLOSED')}
          >
            save
          </Button>
        </DrawerButtonContainer>
      </ContainerHeader>
    </Drawer>  
  );
}

export default EditScoreboard;
