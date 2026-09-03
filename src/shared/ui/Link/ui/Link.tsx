import { LinkProps } from "../model/linkTypes";

function Link({
  href,
  external,
  variant = 'unstyled',
  children,
  className = '',
  as: Component = 'a',
  ...props
}: LinkProps) {

  const variantStyles = {
    primary: 'text-blue-600 hover:text-blue-800 transition-colors',
    secondary: 'text-gray-600 hover:text-gray-900 transition-colors',
    underline: 'text-blue-600 underline hover:no-underline',
    unstyled: '',
  }

  const combinedClasses = `${variantStyles[variant]} ${className}`.trim();

  const isExternal = external ??
    (href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('//'))

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        {...props}
      >

      </a>
    )
  }

  return (
    <Component
      href={href}
      className={combinedClasses}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Link;