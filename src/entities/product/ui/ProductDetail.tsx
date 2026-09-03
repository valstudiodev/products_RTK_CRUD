import { ProductDetailProps } from "../model/productTypes";
import '../model/productCardStyles.scss';

function ProductDetail({
  product
}: ProductDetailProps): React.JSX.Element {
  const classProductDetail = 'product-detail'

  return (
    <article className={classProductDetail}>
      <div className={`${classProductDetail}__inner`}>
        <div className={`${classProductDetail}__image-wrap`}>
          <img
            className={`${classProductDetail}__img`}
            src={product.thumbnail} alt={product.title} />
        </div>
        <div className={`${classProductDetail}__body`}>
          <div className={`${classProductDetail}__content`}>
            <h3 className={`${classProductDetail}__title`}>
              {product.title}
            </h3>
            <p className={`${classProductDetail}__text`}>
              {product.description}
            </p>
          </div>
          <div className={`${classProductDetail}__info`}>
            <span className={`${classProductDetail}__price`}>
              {product.price}$
            </span>
            <div className={`${classProductDetail}__rating`}>
              <span>Rating:</span> {product.rating}
            </div>
          </div>
          <div className={`${classProductDetail}__bottom`}>
            <div className={`${classProductDetail}__discount`}>
              <span>Discount:</span> {product.discountPercentage}
            </div>
            <div className={`${classProductDetail}__brand`}>
              <strong>Brand:</strong> {product.brand}
            </div>
            <div className={`${classProductDetail}__bar-code`}>
              <span>Bar-code</span> {product.barcode}
            </div>
            <div className={`${classProductDetail}__status`}>
              <span>Status:</span> {product.availabilityStatus}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductDetail;