import tw from 'tailwind-styled-components';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Home() {
  return (
    <Container>
      <div>Use the Container as any other React Component</div>
    </Container>
  );
}
const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;