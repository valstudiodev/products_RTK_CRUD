import { useId } from "react";
import { ProductCreateFieldProps } from "../model/productCreateFormTypes";


function ProductCreateField({
  label,
  onChange,
  classParent,
  value,
  type = 'text'
}: ProductCreateFieldProps): React.JSX.Element {

  const id = useId()

  return (
    <div className={classParent}>
      <label
        className={`${classParent}--label`}
        htmlFor={id}>
        {label}
      </label>
      <input
        className={`${classParent}--input`}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default ProductCreateField;