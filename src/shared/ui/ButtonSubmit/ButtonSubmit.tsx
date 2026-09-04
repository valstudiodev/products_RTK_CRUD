import './buttonSubmitStyles.scss';

interface ButtonSubmitProps {
  className?: string;
  children: React.ReactNode,
  disabled?: boolean
}

function ButtonSubmit({
  className = '',
  children,
  disabled,
  ...props
}: ButtonSubmitProps) {
  const classButtonSubmit = 'btn-submit'
  return (
    <button
      className={`${classButtonSubmit} ${className}`}
      type="submit"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonSubmit;