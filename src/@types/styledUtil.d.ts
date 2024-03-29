import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface IStyledComponent {
    [el: string]: StyledComponent;
  }

  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
