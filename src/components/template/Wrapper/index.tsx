import { ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface IWrapperLayout {
  children: ReactNode;
}

function Wrapper({ children }: IWrapperLayout) {
  return <WrapperLayout>{children}</WrapperLayout>;
}

export default Wrapper;

const WrapperLayout = styled.div`
  ${flex('center', '', 'column')};
  margin: auto;
  width: 90%;
`;
