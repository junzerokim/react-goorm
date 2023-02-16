import styled from 'styled-components';
import { Text } from 'components/atoms';
import { flex, colors } from 'styles';

function Header() {
  return (
    <Container>
      <ContainerLeft>
        <Text color={colors.BLACK_X1} size="xsmall">
          패밀리 서비스
        </Text>
        <FamilyServices>
          <Text color={colors.BLACK_X5} size="xsmall">
            EDU
          </Text>
          <Text color={colors.BLACK_X5} size="xsmall">
            LEVEL
          </Text>
          <Text color={colors.BLACK_X5} size="xsmall">
            DEVTH
          </Text>
          <Text color={colors.BLACK_X5} size="xsmall">
            IDE
          </Text>
        </FamilyServices>
      </ContainerLeft>
      <ContainerRight>
        <Text color={colors.BLACK_X1} size="xsmall">
          회사소개
        </Text>
        <Text color={colors.BLACK_X1} size="xsmall">
          블로그
        </Text>
      </ContainerRight>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  ${flex('space-between', 'center', 'row')};
  margin: auto;
  width: 100%;
  position: sticky;
  top: 0px;
`;

const ContainerLeft = styled.div`
  ${flex('flex-start', 'center', 'row')};
`;

const ContainerRight = styled.div`
  ${flex('flex-end', 'center', 'row')};
`;

const FamilyServices = styled.div`
  ${flex('center', 'center', 'row')};
`;
