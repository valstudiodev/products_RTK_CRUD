import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import ProductList from "@/widgets/product-list/ui/ProductList";
import '../model/productsPageStyles.scss';

function ProductsPage() {
  const classProductsPage = 'products-page'

  return (
    <Section className={classProductsPage}>
      <Container className={`${classProductsPage}__container`}>
        <h1 className={`${classProductsPage}__title`}>
          Products page
        </h1>
        <ProductList />
      </Container>
    </Section>
  );
}

export default ProductsPage;