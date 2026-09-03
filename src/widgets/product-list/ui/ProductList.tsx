import { useGetProductsQuery } from '@/app/api/baseApi';
import '../model/productListStyles.scss';
import ProductCard from '@/entities/product/ui/ProductCard';
import { Link } from "@/shared/ui";

function ProductList(): React.JSX.Element {
  const classProductList = 'product-list'

  const { data, isLoading, isError } = useGetProductsQuery()

  if (isLoading) {
    return <div>Loading...</div>
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
          <Link
            href={`/products/${product.id}`}
            className={`${classProductList}__link`}
          >
            <ProductCard product={product} />
          </Link>
        </li>
      ))}

    </ul>
  );
}

export default ProductList;