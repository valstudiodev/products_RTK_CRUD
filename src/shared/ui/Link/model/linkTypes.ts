
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'underline' | 'unstyled';
  children: React.ReactNode;
  as?: React.ElementType;
}