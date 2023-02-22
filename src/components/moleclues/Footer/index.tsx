import { Text } from 'components/atoms';
import styled from 'styled-components';
import { flex, colors } from 'styles';
import { BsFacebook } from 'react-icons/bs';

function Footer() {
  return (
    <Container>
      <FooterTop>
        <Text color={colors.BLACK_X5} size="small">
          도움이 필요하신가요?
        </Text>
        <Text color={colors.BLUE_X4} size="small" weight="700">
          강의자 도움말
        </Text>
        <Text color={colors.BLUE_X4} size="small">
          수강자 도움말
        </Text>
        <Text color={colors.BLACK_X0} size="small">
          |
        </Text>
        <Text color={colors.BLACK_X5} size="small">
          구름EDU와 함께 강좌 제작부터 배포까지!
        </Text>
        <Text color={colors.BLUE_X3} size="small">
          강의자 되기
        </Text>
      </FooterTop>
      <FooterBody>
        <FooterBodyLeft>
          <Text color={colors.BLACK_X5} size="large">
            goorm
          </Text>
          <CompanyInfo>
            <div>
              <Text color={colors.BLACK_X5} size="xsmall">
                English
              </Text>
              <Text color={colors.BLACK} size="xsmall">
                |
              </Text>
              <Text color={colors.BLACK_X5} size="xsmall">
                한국어
              </Text>
              <Text color={colors.BLACK} size="xsmall">
                |
              </Text>
              <Text color={colors.BLACK_X5} size="xsmall">
                日本語
              </Text>
            </div>
            <InfoWithSpace>
              <Text color={colors.BLACK_X5} size="xsmall">
                상호 : (주)구름
              </Text>
              <Text color={colors.BLACK_X5} size="xsmall">
                대표 : 류성태
              </Text>
              <Text color={colors.BLACK_X5} size="xsmall">
                개인정보보호책임자 : 김현화
              </Text>
            </InfoWithSpace>
            <Text color={colors.BLACK_X5} size="xsmall">
              주소 : 경기 성남시 분당구 판교로 242 PDC A동 9092호
            </Text>
            <Text color={colors.BLACK_X5} size="xsmall">
              사업자등록번호 : 124-87-39200
            </Text>
            <Text color={colors.BLACK_X5} size="xsmall">
              통신판매업 신고 번호 : 제2019-성남분당B-0224호
            </Text>
            <InfoWithSpace>
              <Text color={colors.BLACK_X5} size="xsmall">
                TEL : 031-600-8586
              </Text>
              <Text color={colors.BLACK_X5} size="xsmall">
                Email : contact@goorm.io
              </Text>
            </InfoWithSpace>
          </CompanyInfo>
        </FooterBodyLeft>
        <div>
          <BsFacebook />
          <Text color={colors.BLACK_X5} size="xsmall">
            패밀리 서비스
          </Text>
        </div>
      </FooterBody>
      <FooterBottom>
        <Text color={colors.BLACK_X5} size="xsmall">
          © goorm Inc. All Rights Reserved.
        </Text>
        <div>
          <Text color={colors.PURPLE} size="xsmall">
            채용
          </Text>
          <Text color={colors.PURPLE} size="xsmall">
            이용약관
          </Text>
          <Text color={colors.PURPLE} size="xsmall">
            개인정보처리방침
          </Text>
          <Text color={colors.PURPLE} size="xsmall">
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
  width: 90%;
  height: 100%;
  gap: 10px;
`;

const FooterTop = styled.div`
  ${flex('center', 'flex-start', 'row')};
  width: 100%;
  gap: 15px;
  padding: 25px 0;
  border-top: 1px solid #f0f0f5;
  border-bottom: 1px solid #f0f0f5;
`;

const FooterBody = styled.div`
  ${flex('space-between', 'space-between', 'row')};
  width: 100%;
  padding-bottom: 10px;
`;

const FooterBottom = styled.div`
  ${flex('space-between', '', 'row')};
  width: 100%;
  padding: 15px 0;
  border-top: 1px solid #f0f0f5;
`;

const InfoWithSpace = styled.div`
  ${flex('', '')};
  gap: 15px;
`;

const FooterBodyLeft = styled.div`
  ${flex('', '')};
  column-gap: 30px;
`;

const CompanyInfo = styled.div`
  ${flex('', '', 'column')};
`;
