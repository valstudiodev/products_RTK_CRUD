import Section from '@/shared/primitives/Section/Section';
import '../model/_homeStyle.scss';
import Container from '@/shared/primitives/Container/Container';

function HomePage(): React.JSX.Element {
  const classHomePage = 'home-page'

  return (
    <Section className={classHomePage}>
      <Container className={`${classHomePage}__container`}>
        <h1 className='text-center
        text-white text-5xl py-10'>Home page</h1>
      </Container>
    </Section>
  );
}

export default HomePage;