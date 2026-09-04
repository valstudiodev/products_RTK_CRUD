import Section from '@/shared/primitives/Section/Section';
import '../model/productDetailsStyles.scss';
import Container from '@/shared/primitives/Container/Container';
import { useGetProductByIdQuery } from '@/app/api/baseApi';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';
import ProductDetail from '@/entities/product/ui/ProductDetail';
import '../model/productDetailsStyles.scss';
import Loader from '@/shared/ui/Loader/Loader';
import { NavigateButton } from '@/shared/ui/NavigateButton/ui/NavigateButton';

function ProductDetails(): React.JSX.Element {
  const classProductDetails = 'product-details'

  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isError } = useGetProductByIdQuery(id ?? skipToken)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Error!!!</div>
  }

  if (!data) return <div>Product is not found.</div>


  return (
    <Section className={classProductDetails}>
      <Container className={`${classProductDetails}__container`}>
        <h1 className={`${classProductDetails}__title`}>Product details</h1>
        <ProductDetail product={data} />
        <NavigateButton
          variant='outline'
          className={`${classProductDetails}__btn-navigate`}
        />
      </Container>
    </Section>
  );
}

export default ProductDetails;