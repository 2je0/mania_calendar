import tw from 'tailwind-styled-components';
import Progress from '@components/home/progress';
import Title from '@components/common/Title';
export default function Home() {
  return (
    <Container>
      <Progress />
      <Title title='asdf' />
    </Container>
  );
}
const Container = tw.div`
  flex
  flex-col
`;
