import * as React from 'react';

import {
  styled,
  Button
} from 'kingsbury/lib';

import {
  EditView
} from '../Scoreboards';

interface IEditScoreboardProps {
  editView: EditView;
  setEditView: (editView: EditView) => void;
}

interface IContainerProps {
  editView: EditView;
}

interface IModeConfigObject {
  top: string | number;
  borderRadius: string;
}

interface IModeConfig {
  CLOSED: IModeConfigObject;
  PARTIAL: IModeConfigObject;
  OPEN: IModeConfigObject;
}

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

const EditScoreboard: React.FunctionComponent<IEditScoreboardProps> = ({
  editView,
  setEditView
}) => {

  return (
    <Container
      editView={editView}
    >
      <Button
        buttonType="primary"
        onClick={editView === 'PARTIAL' ? 
          () => setEditView('OPEN') :
          () => setEditView('PARTIAL')
        }
      >
        open
      </Button>
      <Button
        buttonType="primary"
        onClick={() => setEditView('CLOSED')}
      >
        close
      </Button>
    </Container>  
  );
}

export default EditScoreboard;