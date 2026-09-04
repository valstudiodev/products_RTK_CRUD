import { useId } from "react";
import { ProductCreateFieldProps } from "../model/productCreateFormTypes";
import '../model/styles.scss';

function ProductCreateField({
  label,
  onChange,
  classParent,
  value,
  name,
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
        name={name}
      />
    </div>
  );
}

export default ProductCreateField;