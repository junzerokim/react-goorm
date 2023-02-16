import { ReactNode } from 'react';
import Header from 'components/moleclues/Header';
import Footer from 'components/moleclues/Footer';
import styled from 'styled-components';
import { flex } from 'styles';

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  ${flex('', 'center', 'column')};
`;

const Body = styled.div``;
