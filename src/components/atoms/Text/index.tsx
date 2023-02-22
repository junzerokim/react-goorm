import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { fontSize } from 'styles';

interface ITextProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
  size?: 'xsmall' | 'small' | 'regular' | 'medium' | 'large';
  weight?: '700';
}

function Text({ children, ...rest }: ITextProps) {
  return <StyledText {...rest}>{children}</StyledText>;
}

export default Text;

const SIZE_OBJ = {
  xsmall: fontSize.xsmall,
  small: fontSize.small,
  regular: fontSize.regular,
  medium: fontSize.medium,
  large: fontSize.large,
};

const StyledText = styled.span<ITextProps>`
  font-size: ${({ size = 'regular' }) => SIZE_OBJ[size]};
  color: ${({ color }) => color};
  font-weight: ${({ weight = '400' }) => weight};
`;
