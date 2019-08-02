import {
  lightTheme
} from './theme';

interface ISupportedGame {
  title: string;
  color: string;
};

interface ISupportedGames {
  [key: string]: ISupportedGame;
  BACKGAMMON: ISupportedGame;
  LAWN_BOWLING: ISupportedGame
};

export const SUPPORTED_GAMES: ISupportedGames = {
  BACKGAMMON: {
    title: 'Backgammon',
    color: lightTheme.colors.pastelPink
  },
  LAWN_BOWLING: {
    title: 'Lawn Bowling',
    color: lightTheme.colors.pastelGreen
  },
};
