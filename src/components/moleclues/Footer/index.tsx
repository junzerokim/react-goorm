import { Text } from 'components/atoms';
import styled from 'styled-components';
import { flex, colors } from 'styles';
import { BsFacebook } from 'react-icons/bs';

function Footer() {
  return (
    <Container>
      <FooterTop>
        <Text color={colors.BLACK_X0} size="small" weight="700">
          도움이 필요하신가요?
        </Text>
        <Text color={colors.BLUE_X4} size="small" weight="700">
          강의자 도움말
        </Text>
        <Text color={colors.BLUE_X4} size="small" weight="700">
          수강자 도움말
        </Text>
        <Text color={colors.BLACK_X0} size="small">
          |
        </Text>
        <Text color={colors.BLACK_X0} size="small" weight="700">
          구름EDU와 함께 강좌 제작부터 배포까지!
        </Text>
        <Text color={colors.BLUE_X4} size="small" weight="700">
          강의자 되기
        </Text>
      </FooterTop>
      <FooterBody>
        <FooterBodyLeft>
          <Text color={colors.BLACK_X5} size="large">
            goorm
          </Text>
          <CompanyInfo>
            <PageLanguage>
              <Text color={colors.BLACK_X0} size="xsmall">
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
              <Text color={colors.BLACK_X0} size="xsmall">
                日本語
              </Text>
            </PageLanguage>
            <InfoWithSpace>
              <Text color={colors.BLACK_X0} size="xsmall">
                상호 : (주)구름
              </Text>
              <Text color={colors.BLACK_X0} size="xsmall">
                대표 : 류성태
              </Text>
              <Text color={colors.BLACK_X0} size="xsmall">
                개인정보보호책임자 : 김현화
              </Text>
            </InfoWithSpace>
            <Text color={colors.BLACK_X0} size="xsmall">
              주소 : 경기 성남시 분당구 판교로 242 PDC A동 9092호
            </Text>
            <Text color={colors.BLACK_X0} size="xsmall">
              사업자등록번호 : 124-87-39200
            </Text>
            <Text color={colors.BLACK_X0} size="xsmall">
              통신판매업 신고 번호 : 제2019-성남분당B-0224호
            </Text>
            <InfoWithSpace>
              <Text color={colors.BLACK_X0} size="xsmall">
                TEL : 031-600-8586
              </Text>
              <Text color={colors.BLACK_X0} size="xsmall">
                Email : contact@goorm.io
              </Text>
            </InfoWithSpace>
          </CompanyInfo>
        </FooterBodyLeft>
        <FooterBodyRight>
          <BsFacebook />
          <FamilyService name="familyService">
            <option value="">패밀리 서비스</option>
            <option value="">구름EDU</option>
            <option value="">구름LEVEL</option>
            <option value="">구름DEVTH</option>
            <option value="">구름IDE</option>
            <option value="">구름FORUM</option>
          </FamilyService>
        </FooterBodyRight>
      </FooterBody>
      <FooterBottom>
        <Text color={colors.BLACK_X0} size="xsmall">
          © goorm Inc. All Rights Reserved.
        </Text>
        <FooterBottomRight>
          <Text color={colors.PURPLE} size="xsmall" style={{ fontWeight: 'bold' }}>
            채용
          </Text>
          <Text color={colors.PURPLE} size="xsmall" style={{ fontWeight: 'bold' }}>
            이용약관
          </Text>
          <Text color={colors.PURPLE} size="xsmall" style={{ fontWeight: 'bold' }}>
            개인정보처리방침
          </Text>
          <Text color={colors.PURPLE} size="xsmall" style={{ fontWeight: 'bold' }}>
            도움말
          </Text>
        </FooterBottomRight>
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
  margin-top: 75px;
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
  ${flex('space-between', 'flex-start', 'row')};
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
  gap: 7px;
`;

const FamilyService = styled.select`
  padding: 5px 7px;
  border-radius: 5px;
`;

const FooterBodyRight = styled.div`
  ${flex('', 'center', 'row')}
  gap: 10px;
`;

const PageLanguage = styled.div`
  ${flex('', '')}
  gap: 10px;
`;

const FooterBottomRight = styled.div`
  ${flex('', '')}
  gap: 10px;
`;
