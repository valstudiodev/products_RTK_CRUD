import '../model/productCardStyles.scss';
import { ProductCardProps } from '../model/productTypes';

function ProductCard({
  product
}: ProductCardProps): React.JSX.Element {
  const classProductCard = 'product-card'

  return (
    <article className={classProductCard}>
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
    </article>
  );
}

export default ProductCard;