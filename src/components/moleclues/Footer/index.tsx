import { Text } from 'components/atoms';
import styled from 'styled-components';
import { flex, colors } from 'styles';

function Footer() {
  return (
    <Container>
      <FooterTop>
        <Text color={colors.BLACK_X5} size="small">
          도움이 필요하신가요?
        </Text>
        <Text color={colors.BLUE_X3} size="small">
          강의자 도움말
        </Text>
        <Text color={colors.BLUE_X3} size="small">
          수강자 도움말
        </Text>
        <Text color={colors.BLACK_X5} size="small">
          구름EDU와 함께 강좌 제작부터 배포까지!
        </Text>
        <Text color={colors.BLUE_X3} size="small">
          강의자 되기
        </Text>
      </FooterTop>
      <FooterBody>
        <div>
          <Text color={colors.BLACK_X5} size="large">
            goorm
          </Text>
          <div>
            <div>
              <Text color={colors.BLACK_X5} size="xsmall">
                English
              </Text>
              <Text color={colors.BLACK_X5} size="xsmall">
                한국어
              </Text>
              <Text color={colors.BLACK_X5} size="xsmall">
                日本語
              </Text>
            </div>
            <div>
              <Text color={colors.BLACK_X5} size="xsmall">
                상호 : (주)구름
              </Text>
              <Text color={colors.BLACK_X5} size="xsmall">
                대표 : 류성태
              </Text>
              <Text color={colors.BLACK_X5} size="xsmall">
                개인정보보호책임자 : 김현화
              </Text>
            </div>
            <div>
              <Text color={colors.BLACK_X5} size="xsmall">
                주소 : 경기 성남시 분당구 판교로 242 PDC A동 9092호
              </Text>
            </div>
            <div>
              <Text color={colors.BLACK_X5} size="xsmall">
                사업자등록번호 : 124-87-39200
              </Text>
            </div>
            <div>
              <Text color={colors.BLACK_X5} size="xsmall">
                통신판매업 신고 번호 : 제2019-성남분당B-0224호
              </Text>
            </div>
            <div>
              <Text color={colors.BLACK_X5} size="xsmall">
                TEL : 031-600-8586
              </Text>
              <Text color={colors.BLACK_X5} size="xsmall">
                Email : contact@goorm.io
              </Text>
            </div>
          </div>
        </div>
        <div>
          <Text color={colors.BLACK_X5} size="xsmall">
            패밀리 서비스
          </Text>
        </div>
      </FooterBody>
      <FooterBottom>
        <div>
          <Text color={colors.BLACK_X5} size="xsmall">
            © goorm Inc. All Rights Reserved.
          </Text>
        </div>
        <div>
          <Text color={colors.BLACK_X6} size="xsmall">
            채용
          </Text>
          <Text color={colors.BLACK_X6} size="xsmall">
            이용약관
          </Text>
          <Text color={colors.BLACK_X6} size="xsmall">
            개인정보처리방침
          </Text>
          <Text color={colors.BLACK_X6} size="xsmall">
            도움말
          </Text>
        </div>
      </FooterBottom>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  ${flex('flex-end', 'flex-start', 'column')};
  width: 100%;
  height: 100%;
`;

const FooterTop = styled.div`
  ${flex('center', 'flex-start', 'row')};
  width: 100%;
  gap: 15px;
`;

const FooterBody = styled.div`
  ${flex('space-between', 'space-between', 'row')};
  width: 100%;
`;

const FooterBottom = styled.div`
  ${flex('space-between', '', 'row')};
  width: 100%;
`;
