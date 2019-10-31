import { StyledComponent } from 'styled-components';

export interface IHeaderProps {}

export interface IStyle {
  [el: string]: StyledComponent<any, any>;
}

export interface IText {
  isLarge: boolean;
}
