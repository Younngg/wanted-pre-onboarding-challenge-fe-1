import 'styled-components';
import { ColorsTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorsTypes;
  }
}
