import styled from 'styled-components';
import { flex } from 'styles/';
import { Layout, Wrapper } from 'components/template';

function Main() {
  return (
    <Layout>
      <Container>
        <Wrapper>.</Wrapper>
      </Container>
    </Layout>
  );
}

export default Main;

const Container = styled.div`
  /* ${flex('center', 'center', 'column')} */
  /* margin: auto; */
  /* width: 80%; */
  /* height: 100vh; */
`;
