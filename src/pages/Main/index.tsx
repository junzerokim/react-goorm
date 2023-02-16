import Header from 'components/moleclues/Header';
import Footer from 'components/moleclues/Footer';
import styled from 'styled-components';
import { flex } from 'styles/';

function Main() {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  ${flex('center', 'center', 'column')}
  margin: auto;
  width: 80%;
  height: 100vh;
`;
