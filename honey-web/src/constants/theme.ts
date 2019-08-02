import {
  theme
} from 'kingsbury/lib';

export const lightTheme = {
  ...theme,
  buttons: {
    ...theme.buttons,
    boxShadow: 'none'
  },
  colors: {
    ...theme.colors,
    pastelPink: '#F4B2B2',
    pastelGreen: '#A6D5B3'
  },
  card: {
    ...theme.card,
    borderRadius: '8px'
  }
};
