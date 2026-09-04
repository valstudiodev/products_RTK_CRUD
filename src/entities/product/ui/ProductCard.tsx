import { Link } from 'react-router';
import '../model/productCardStyles.scss';
import { Product, ProductCardProps } from '../model/productTypes';
import { useDeleteProductMutation } from '@/app/api/baseApi';

function ProductCard({
  product
}: ProductCardProps): React.JSX.Element {
  const classProductCard = 'product-card'

  const [deleteProduct, { isLoading }] = useDeleteProductMutation()

  const handleDelete = async (product: Product): Promise<void> => {

    try {
      const deleteProductResult = await deleteProduct(product.id).unwrap()

      console.log('---Delete product:', deleteProductResult);

    } catch (error) {

    }
  }

  // const handleUpdate = async ({ id, data }: UpdateProductRequest): Promise<void> => {
  //   try {
  //     const updateProductResult = await updateProduct({ id, data }).unwrap()

  //     console.log('---Update product:', updateProductResult);

  //   } catch (error) {

  //   }
  // }

  return (
    <article className={classProductCard}>
      <Link
        to={`/products/${product.id}`}
        className={`${classProductCard}__link`}
      >
        <div className={`${classProductCard}__inner`}>
          <div className={`${classProductCard}__image-wrap`}>
            <img
              className={`${classProductCard}__img`}
              src={product.thumbnail} alt={product.title} />
          </div>
          <div className={`${classProductCard}__content`}>
            <h3 className={`${classProductCard}__title`}>
              {product.title}
            </h3>
            <p className={`${classProductCard}__desc`}>
              {product.description}
            </p>
            <div className={`${classProductCard}__info`}>
              <strong className={`${classProductCard}__price`}>
                {product.price}$
              </strong>
              <span className={`${classProductCard}__category`}>
                {product.category}
              </span>
              <span className={`${classProductCard}__brand`}>
                {product.brand}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className={`${classProductCard}__action flex
      items-center gap-5 justify-between`}>
        <button
          className={`${classProductCard}__btn ${classProductCard}__btn--delete`}
          onClick={() => handleDelete(product)}
        >
          {isLoading ? 'Loading' : 'Delete'}
        </button>

        <Link
          to={`/products/${product.id}/edit`}
        >
          Edit
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;