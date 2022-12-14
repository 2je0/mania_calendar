import tw from 'tailwind-styled-components';
import Progress from '@components/home/progress';
export default function Home() {
  return (
    <Container>
      <Progress />
    </Container>
  );
}
const Container = tw.div`
  flex
`;
