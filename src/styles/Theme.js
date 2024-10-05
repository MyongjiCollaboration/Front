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
    green1: '#7fa67e',
    green2: '#8bb38a',
    green3: '#97bf96',
    green4: '#a3cca2',
    green5: '#afd9ae',
    green6: '#bce6bb',
    green7: '#c9f3c7',
    Black: '#000000',
    white: '#FFFFFF',
    gray: '#808080',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '769px',
    desktop: '1024px',
  },
};

export default Theme;
