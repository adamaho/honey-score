import * as React from 'react';

import {
  styled,
  Button
} from 'kingsbury/lib';

type Mode = 'CLOSED' | 'PARTIAL' | 'OPEN';

interface IEditScoreboardProps {
  mode: Mode;
}

interface IContainerProps {
  mode: Mode
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

const MODE_CONFIG_MAP: IModeConfig = {
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
  top: ${(props) => MODE_CONFIG_MAP[props.mode].top};
  background-color: red;

  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => MODE_CONFIG_MAP[props.mode].borderRadius};

  transition: all 0.25s cubic-bezier(0, .93, .33, 1.05);
`;

const EditScoreboard: React.FunctionComponent<IEditScoreboardProps> = ({
  mode
}) => {
  const [modeState, setOpen] = React.useState(mode);

  return (
    <Container
      mode={modeState}
    >
      <Button
        buttonType="primary"
        onClick={modeState === 'PARTIAL' ? 
          () => setOpen('OPEN') :
          () => setOpen('PARTIAL')
        }
      >
        open
      </Button>
      adsfasdf
    </Container>  
  );
}

export default EditScoreboard;