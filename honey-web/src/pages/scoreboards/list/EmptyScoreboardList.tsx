import * as React from 'react';

import {
  styled,
  H3,
  P
} from 'kingsbury/lib';

import {
  DrawerState
} from 'kingsbury/lib/components/drawer/types';

interface IEmptyScoreboardListProps {
  setDrawerState: (drawerState: DrawerState) => void;
};

const EmptyScoreboardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const EmptyCardContent = styled.div`
  text-align: center;
  padding: 10px;

  margin-top: -150px;
`;

const EmptyCardTitle= styled(H3)`
  margin-bottom: 0px;
  display: block;
`;

const EmptyCardDescription = styled(P)`
  color: ${(props) => props.theme.colors.darkGrey};
  margin-top: 5px;
`;

class EmptyScoreboardList extends React.Component<IEmptyScoreboardListProps> {
  componentDidMount() {
    const {
      setDrawerState
    } = this.props;

    setDrawerState('PARTIAL');
  }

  render() {
    return (
      <EmptyScoreboardBodyContainer>
        <EmptyCardContent>
          <EmptyCardTitle>No Scoreboards</EmptyCardTitle>
          <EmptyCardDescription>Create a new scoreboard to really see who is winning.</EmptyCardDescription>
        </EmptyCardContent>
      </EmptyScoreboardBodyContainer>
    );
  }
};

export default EmptyScoreboardList;
