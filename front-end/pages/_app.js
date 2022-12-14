import '@styles/globals.css';
import tw from 'tailwind-styled-components';
import Header from '@components/Layout/Header';
function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
const Container = tw.div`
    flex
    max-w-screen-md
    mx-auto
    flex-col
`;
