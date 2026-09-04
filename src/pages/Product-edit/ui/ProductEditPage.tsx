import Section from '@/shared/primitives/Section/Section';
import '../model/productEditStyles.scss';
import Container from '@/shared/primitives/Container/Container';
import { NavigateButton } from '@/shared/ui/NavigateButton/ui/NavigateButton';
import { useGetProductByIdQuery } from '@/app/api/baseApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useParams } from 'react-router';
import Loader from '@/shared/ui/Loader/Loader';
import ProductEditForm from '@/featured/product-edit/ui/ProductEditForm';

function ProductEdit(): React.JSX.Element {
  const classProductEdit = 'product-edit'

  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isError } = useGetProductByIdQuery(id ?? skipToken)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Error!!!</div>
  }
  if (!data) {
    return <div>Product is not found.</div>
  }

  console.log(data);


  return (
    <Section className={`${classProductEdit} py-20`}>
      <Container className={`${classProductEdit}__container`}>
        <h1 className='text-center text-white
        text-5xl mb-10'>Product edit</h1>
        <ProductEditForm product={data} />
        <NavigateButton
          variant='unstyled'
          className={`${classProductEdit}__btn-navigate`}
        />
      </Container>
    </Section>
  );
}

export default ProductEdit;