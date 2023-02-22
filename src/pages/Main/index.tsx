import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout, Wrapper } from 'components/template';
import { flex } from 'styles/';
import { ILecture } from 'types/lecture';

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
          {lectureList.map((lecture) => (
            <span>{lecture.name}</span>
          ))}
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
