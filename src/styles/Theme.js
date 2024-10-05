import { css } from 'styled-components';
export const Theme = {
  fonts: {
    mainTitle: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 54px;
    `,
    heading: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 28px;
    `,
    default: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 20px;
    `,
    helperText: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      font-size: 16px;
    `,
    BigButton: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 600;
      font-size: 30px;
    `,
    SmallButton: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 800;
      font-size: 20px;
    `,
    subTitle: css`
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
    `,
  },
  colors: {
    green1: '#194618',
    green2: '#9FBC9E',
    green3: '#A8C5A7',
    green4: '#B1CEB0',
    green5: '#B9D7B9',
    green6: '#C2E0C2',
    green7: '#CBEACB',
    green8: '#D4F3D4',
    Black: '#000000',
    white: '#FFFFFF',
    gray: '#808080',
    red: '#FD0103',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '769px',
    desktop: '1024px',
  },
};

export default Theme;
