import { useGetProductsQuery } from '@/app/api/baseApi';
import '../model/productListStyles.scss';
import ProductCard from '@/entities/product/ui/ProductCard';
import Loader from '@/shared/ui/Loader/Loader';

function ProductList(): React.JSX.Element {
  const classProductList = 'product-list'

  const { data, isLoading, isError } = useGetProductsQuery()

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Error!!!</div>
  }

  return (
    <ul className={classProductList}>
      {data?.products.map((product) => (
        <li
          key={product.id}
          className={`${classProductList}__item`}
        >
          <ProductCard product={product} />
        </li>
      ))}

    </ul>
  );
}

export default ProductList;