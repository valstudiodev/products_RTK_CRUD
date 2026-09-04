import { useUpdateProductMutation } from "@/app/api/baseApi";
import { ProductDetail, UpdateProductPayload } from "@/entities/product/model/productTypes";
import ProductCreateField from "@/featured/product-create/ui/ProductCreateField";
import ButtonSubmit from "@/shared/ui/ButtonSubmit/ButtonSubmit";
import { ChangeEvent, FormEvent, useState } from "react";
import '../model/styles.scss';

interface ProductEditFormProps {
  product: ProductDetail
}

function ProductEditForm({
  product
}: ProductEditFormProps): React.JSX.Element {
  const classEditForm = 'edit-form'

  const [updateProduct, { isLoading }] = useUpdateProductMutation()

  const [formData, setFormData] = useState<UpdateProductPayload>({
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    brand: product.brand,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    const name = e.target.name

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.target.value)

    setFormData({
      ...formData,
      price: value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    try {
      const result = await updateProduct({
        id: product.id,
        data: formData,
      }).unwrap()

      console.log('---Update product:', result);

    } catch (error) {
      console.log('---Add product ERROR:', error);
    }
  }

  return (
    <form
      className={classEditForm}
      onSubmit={handleSubmit}
    >
      <ProductCreateField
        label="Title"
        classParent={`${classEditForm}__field`}
        onChange={handleChange}
        value={formData.title}
        name="title"
      />

      <ProductCreateField
        label="Price"
        classParent={`${classEditForm}__field`}
        onChange={handlePriceChange}
        value={formData.price}
        name="price"
      />

      <ProductCreateField
        label="Description"
        classParent={`${classEditForm}__field`}
        onChange={handleChange}
        value={formData.description}
        name="description"
      />

      <ProductCreateField
        label="Category"
        classParent={`${classEditForm}__field`}
        onChange={handleChange}
        value={formData.category}
        name="category"
      />

      <ProductCreateField
        label="Brand"
        classParent={`${classEditForm}__field`}
        onChange={handleChange}
        value={formData.brand}
        name="brand"
      />
      <ButtonSubmit disabled={isLoading}>
        {isLoading ? 'Loading' : 'Update product'}
      </ButtonSubmit>
    </form>
  );
}

export default ProductEditForm;