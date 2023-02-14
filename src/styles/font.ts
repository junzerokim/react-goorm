import { css } from 'styled-components';

export const fontSize = {
  xsmall: '12px',
  small: '14px',
  regular: '16px',
  medium: '20px',
  large: '24px',
};

export const font = (size: number, weight: number, lineHeight: number = 0) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${lineHeight || size * 1.5}px;
`;
