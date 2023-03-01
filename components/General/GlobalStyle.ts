import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  //font family
  --font-primary: 'Montserrat', sans-serif;
  --font-family-clash-display: 'Clash Display', sans-serif;
  --font-family-lufga: 'Lufga', sans-serif;

  //font size
  --font-size-xxs: 0.625rem; // 10px
  --font-size-xs: 0.75rem; // 12px
  --font-size-sm: 0.875rem; // 14px
  --font-size-md: 1rem; // 16px
  --font-size-lg: 1.125rem; // 18px
  --font-size-xl: 1.25rem; // 20px
  --font-size-xxl: 1.5rem; // 24px
  --font-size-xxxl: 2rem; // 32px
  --font-size-xxxxl: 2.5rem; // 40px

  //font weight
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;

  //line height
  --line-height-xs: 1.2; // 12px
  --line-height-sm: 1.4; // 14px
  --line-height-md: 1.6; // 16px
  --line-height-lg: 1.8; // 18px
  --line-height-xl: 2; // 20px

  // colors
  --color-primary: #000000;
  --color-secondary: #FFFFFF;
  --color-tertiary: #1E1E1E;
}
`;
