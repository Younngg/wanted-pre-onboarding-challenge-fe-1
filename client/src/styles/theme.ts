import { DefaultTheme } from 'styled-components';

const color = {
  green: 'green',
  red: 'red',
};

export type ColorsTypes = typeof color;

export const theme: DefaultTheme = {
  color,
};
