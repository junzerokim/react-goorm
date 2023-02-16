import { ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface IWrapperLayout {
  children: ReactNode;
}

function WrapperLayout({ children }: IWrapperLayout) {
  return <Wrapper>{children}</Wrapper>;
}

export default WrapperLayout;

const Wrapper = styled.div`
  ${flex('space-between', '')};
`;
