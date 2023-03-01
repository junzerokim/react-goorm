import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Text } from 'components/atoms';
import { Layout, Wrapper } from 'components/template';
import { flex, colors } from 'styles';
import { ILecture } from 'types/lecture';
import { FcLike } from 'react-icons/fc';
import { AiFillStar } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';

function Main() {
  const images = useRef([
    { src: '/img/lg.png' },
    { src: '/img/' },
    { src: 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white' },
  ]);

  const [lectureList, setLectureList] = useState<ILecture[]>([]);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    transform: `translate(-${current}00%)`,
    transition: 'transform 1s',
  });

  const imgSize = useRef(images.current.length);

  const moveSlide = (e: any) => {
    let nextIndex = current + e;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch('http://localhost:4000/lectures');
      const data = await res.json();
      setLectureList(data);
    };
    dataFetch();
  }, []);

  useEffect(() => {
    setStyle({ transform: `translate(-${current}00%)`, transition: 'transform 1s' });
  }, [current]);
  return (
    <Layout>
      <Container>
        <Wrapper>
          <SliderLBtn onClick={() => moveSlide(-1)}>&lt;</SliderLBtn>
          <SliderImg style={style}>
            {images.current.map((img, i) => (
              <div key={i} style={{ backgroundImage: `url(${img.src})` }}></div>
            ))}
            <SliderLgImg src="/img/lg.png" />
          </SliderImg>
          <SliderRBtn onClick={() => moveSlide(1)}>&gt;</SliderRBtn>
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
                  <Text size="xsmall">{lecture.author}</Text>
                  <ClassPrefer>
                    <Text size="xsmall">{lecture.level}</Text>
                    <Text size="xsmall">
                      <FcLike />
                      {lecture.like}
                    </Text>
                    <Text size="xsmall">
                      <AiFillStar />
                      {lecture.star}
                    </Text>
                  </ClassPrefer>
                  <Text size="small">{`₩${lecture.price.toLocaleString()}`}</Text>
                </FirstClasses>
              ))}
            </FirstClass>
          </FirstClassBox>
          <SecondClassBox>
            <Text color={colors.BLUE_X3} size="xsmall">
              직접 만들어보며 배우는 코딩
            </Text>
            <SecondClassTitle>
              <Text style={{ display: 'flex', fontWeight: 'bold' }}>
                인생처럼 코딩도 실전! 👊
                <FiChevronRight />
              </Text>
            </SecondClassTitle>
            <SecondClass>
              {lectureList.map((lecture) => (
                <SecondClasses>
                  <SecondClassImg src={lecture.thumbnail} />
                  <Text size="small">{lecture.name}</Text>
                  <Text size="xsmall">{lecture.author}</Text>
                  <ClassPrefer>
                    <Text size="xsmall">{lecture.level}</Text>
                    <Text size="xsmall">
                      <FcLike />
                      {lecture.like}
                    </Text>
                    <Text size="xsmall">
                      <AiFillStar />
                      {lecture.star}
                    </Text>
                  </ClassPrefer>
                  <Text size="small">{`₩${lecture.price.toLocaleString()}`}</Text>
                </SecondClasses>
              ))}
            </SecondClass>
          </SecondClassBox>
          <ThirdClassBox>
            <Text color={colors.BLUE_X3} size="xsmall">
              코딩, 완전 처음입니다🙋‍♀️
            </Text>
            <ThirdClassTitle>
              <Text style={{ display: 'flex', fontWeight: 'bold' }}>
                Hello World - 생활코딩
                <FiChevronRight />
              </Text>
            </ThirdClassTitle>
            <ThirdClass>
              {lectureList.map((lecture) => (
                <ThirdClasses>
                  <ClassWrap>
                    <ThirdClassImg src={lecture.thumbnail} />
                    <Text size="small">{lecture.name}</Text>
                  </ClassWrap>
                  <Text size="xsmall">{lecture.author}</Text>
                  <ClassPrefer>
                    <Text size="xsmall">{lecture.level}</Text>
                    <Text size="xsmall">
                      <FcLike />
                      {lecture.like}
                    </Text>
                    <Text size="xsmall">
                      <AiFillStar />
                      {lecture.star}
                    </Text>
                  </ClassPrefer>
                  <Text size="small">{`₩${lecture.price.toLocaleString()}`}</Text>
                </ThirdClasses>
              ))}
            </ThirdClass>
          </ThirdClassBox>
          <SliderLgImg src="/img/md.png" />
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

const SliderLgImg = styled.img`
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

const SecondClassBox = styled.div`
  ${flex('', '', 'column')}
  margin-top: 70px;
`;

const SecondClassTitle = styled.div`
  ${flex('', '')}
  gap: 30px;
  margin-top: 10px;
  padding-bottom: 20px;
`;

const SecondClass = styled.div`
  ${flex('', '')}
  gap: 10px;
  width: 100%;
`;

const SecondClasses = styled.div`
  ${flex('', '', 'column')}
  width: 20%;
  gap: 10px;
`;

const SecondClassImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ThirdClassBox = styled.div`
  ${flex('', '', 'column')}
  margin-top: 70px;
`;

const ThirdClassTitle = styled.div`
  ${flex('', '')}
  gap: 30px;
  margin-top: 10px;
  padding-bottom: 20px;
`;

const ThirdClass = styled.div`
  ${flex('', '')}
  gap: 10px;
  width: 100%;
`;

const ThirdClasses = styled.div`
  ${flex('', '', 'column')}
  width: 20%;
  gap: 10px;
`;

const ThirdClassImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ClassPrefer = styled.div`
  ${flex('', '')}
  gap: 5px;
`;

const ClassWrap = styled.div`
  ${flex('space-between', '', 'column')}
  gap: 15px;
`;

const SliderImg = styled.div`
  ${flex('', 'center')}
`;

const SliderLBtn = styled.div`
  ${flex('center', 'center')}
  cursor: pointer;
  font-size: 30px;
  color: blue;
  padding: 0 10px;
`;

const SliderRBtn = styled.div`
  ${flex('center', 'center')}
  cursor: pointer;
  font-size: 30px;
  color: blue;
  padding: 0 10px;
`;
