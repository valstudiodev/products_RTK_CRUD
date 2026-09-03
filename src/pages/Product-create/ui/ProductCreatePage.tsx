import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../model/productCreateStyles.scss';
import ProductCreateForm from "@/featured/product-create/ui/ProductCreateForm";

function ProductCreate(): React.JSX.Element {
  const classProductCreate = 'product-create'
  return (
    <Section className={classProductCreate}>
      <Container className={`${classProductCreate}__container`}>
        <h1>Product create page</h1>
        <ProductCreateForm />
      </Container>
    </Section>
  );
}

export default ProductCreate;