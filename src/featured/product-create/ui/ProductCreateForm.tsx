import { CreateProductPayload } from "@/entities/product/model/productTypes";
import ProductCreateField from "./ProductCreateField";
import { ChangeEvent, useState } from "react";

function ProductCreateForm(): React.JSX.Element {
  const classCreateForm = 'create-form'

  const [formData, setFormData] = useState<CreateProductPayload>({
    title: '',
    price: 0,
    description: '',
    category: '',
    brand: ''
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

  return (
    <form
      className={classCreateForm}
      action=""
    >
      <ProductCreateField
        label="Title"
        classParent={`${classCreateForm}__field`}
        onChange={handleChange}
        value={formData.title}
        name='title'
      />
      <ProductCreateField
        label="Price"
        type="number"
        classParent={`${classCreateForm}__field`}
        onChange={handlePriceChange}
        value={formData.price}
        name='price'
      />
      <ProductCreateField
        label="Description"
        classParent={`${classCreateForm}__field`}
        onChange={handleChange}
        value={formData.description}
        name='description'
      />
      <ProductCreateField
        label="Category"
        classParent={`${classCreateForm}__field`}
        onChange={handleChange}
        value={formData.category}
        name='category'
      />
      <ProductCreateField
        label="Brand"
        classParent={`${classCreateForm}__field`}
        onChange={handleChange}
        value={formData.brand}
        name='brand'
      />
    </form>
  );
}

export default ProductCreateForm;