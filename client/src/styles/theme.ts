import { DefaultTheme } from 'styled-components';

const color = {
  green: '#10ac84',
  red: '#ff7675',
};

export type ColorsTypes = typeof color;

export const theme: DefaultTheme = {
  color,
};
