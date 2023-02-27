import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Text } from 'components/atoms';
import { Layout, Wrapper } from 'components/template';
import { flex } from 'styles';
import { ILecture } from 'types/lecture';
import { FcLike } from 'react-icons/fc';
import { AiFillStar } from 'react-icons/ai';

function Main() {
  const [lectureList, setLectureList] = useState<ILecture[]>([]);
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch('http://localhost:4000/lectures');
      const data = await res.json();
      setLectureList(data);
    };
    dataFetch();
  }, []);
  return (
    <Layout>
      <Container>
        <Wrapper>
          <SliderImg src="/img/lg.png" />
          {/* {lectureList.map((lecture) => (
            <span>{lecture.name}</span>
          ))} */}
          <FirstClassBox>
            <FirstClassTab>
              <Text size="small">실시간 할인💸</Text>
              <Text size="small">새로운 강좌💸</Text>
            </FirstClassTab>
            <FirstClass>
              <FirstClassIntro>
                <Text size="small">실시간 할인💸</Text>
                <Text size="large">가성비&가심비</Text>
                <Text size="large">모두 챙기세요!</Text>
              </FirstClassIntro>
              {lectureList.map((lecture) => (
                <FirstClasses>
                  <FirstClassImg src={lecture.thumbnail} />
                  <Text size="small">{lecture.name}</Text>
                  <Text size="small">{lecture.author}</Text>
                  <Text size="small">
                    {lecture.level}
                    <FcLike />
                    {lecture.like}
                    <AiFillStar />
                    {lecture.star}
                  </Text>
                  <Text size="small">{`₩${lecture.price.toLocaleString()}`}</Text>
                </FirstClasses>
              ))}
            </FirstClass>
          </FirstClassBox>
        </Wrapper>
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

const SliderImg = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 50px;
`;

const FirstClassBox = styled.div`
  ${flex('', '', 'column')}
  margin-top: 70px;
`;

const FirstClassTab = styled.div`
  ${flex('', '')}
  gap: 30px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
`;

const FirstClass = styled.div`
  ${flex('center', '')}
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

const FirstClassIntro = styled.div`
  ${flex('', '', 'column')}
  gap: 10px;
  width: 400px;
  height: 200px;
  background-color: #1f6ce0;
  border-radius: 10px;
  padding: 24px;
  color: white;
`;

const FirstClasses = styled.div`
  ${flex('', '', 'column')}
  width: 20%;
  gap: 10px;
`;

const FirstClassImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;
