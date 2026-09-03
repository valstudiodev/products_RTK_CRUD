import Section from '@/shared/primitives/Section/Section';
import '../model/productEditStyles.scss';
import Container from '@/shared/primitives/Container/Container';

function ProductEdit(): React.JSX.Element {
  const classProductEdit = 'product-edit'
  return (
    <Section className={classProductEdit}>
      <Container className={`${classProductEdit}__container`}>
        <h1>Product edit</h1>
      </Container>
    </Section>
  );
}

export default ProductEdit;