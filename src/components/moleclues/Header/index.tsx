import styled from 'styled-components';
import { Text } from 'components/atoms';
import { flex, colors } from 'styles';
import { BiChevronsLeft } from 'react-icons/bi';
import { RiGlobalLine } from 'react-icons/ri';
import { FiChevronDown } from 'react-icons/fi';
import { IoSearchCircle } from 'react-icons/io5';
import { HiSquares2X2 } from 'react-icons/hi2';

function Header() {
  return (
    <Wrapper>
      <Container>
        <HeaderTop>
          <HeaderTopLeft>
            <Text color={colors.BLACK_X1} size="xsmall">
              패밀리 서비스
            </Text>
            <BiChevronsLeft />
            <Text color={colors.BLUE_X2} size="xsmall">
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
          </HeaderTopLeft>
          <HeaderTopRight>
            <Text color={colors.BLACK_X1} size="xsmall">
              회사소개
            </Text>
            <Text color={colors.GRAY} size="xsmall">
              |
            </Text>
            <Text color={colors.BLACK_X1} size="xsmall">
              블로그
            </Text>
            <Text color={colors.GRAY} size="xsmall">
              |
            </Text>
            <RiGlobalLine />
            <FiChevronDown />
          </HeaderTopRight>
        </HeaderTop>
        <HeaderMid>
          <HeaderMidLeft>
            <Text color={colors.BLACK_X5} size="large">
              goorm
            </Text>
            <SearchBar placeholder="무엇을 배우고 싶으세요?" type="text" />
            <IoSearchCircle size={35} />
          </HeaderMidLeft>
          <HeaderMidRight>
            <Text color={colors.BLACK_X5} size="xsmall">
              로그인
            </Text>
            <Text color={colors.BLUE_X1} size="xsmall">
              회원가입
            </Text>
          </HeaderMidRight>
        </HeaderMid>
        <HeaderBottom>
          <HiSquares2X2 />
          <Text color={colors.BLACK_X5}>전체</Text>
          <Text color={colors.BLACK_X5}>루트</Text>
          <Text color={colors.BLACK_X5}>공지사항</Text>
          <Text color={colors.BLACK_X5}>Q & A</Text>
        </HeaderBottom>
      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  padding-bottom: 25px;
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

const Container = styled.header`
  ${flex('space-between', '', 'column')};
  margin: auto;
  width: 90%;
  position: sticky;
  top: 0px;
  gap: 25px;
`;

const HeaderTop = styled.div`
  ${flex('space-between', 'center', 'row')}
  width: 100%;
`;

const HeaderTopLeft = styled.div`
  ${flex('center', 'center', 'row')}
  gap: 10px;
`;

const HeaderTopRight = styled.div`
  ${flex('center', 'center', 'row')}
  gap: 10px;
`;

const HeaderMid = styled.div`
  ${flex('space-between', '', 'row')}
  width: 90%;
`;

const HeaderMidLeft = styled.div`
  ${flex('center', 'center', 'row')}
  gap: 10px;
`;
const HeaderMidRight = styled.div`
  ${flex('center', 'center', 'row')}
  gap: 10px;
`;

const HeaderBottom = styled.div`
  ${flex('', '', 'row')}
  width: 90%;
  gap: 10px;
`;

const SearchBar = styled.input`
  border-radius: 20px;
  border: none;
  background-color: #f7f7fa;
  width: 250px;
  height: 40px;
  padding: 0 20px;
  :focus {
    outline: none;
  }
`;
