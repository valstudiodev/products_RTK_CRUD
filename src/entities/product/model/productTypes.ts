export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  price: number;
  brand: string;
}

export interface ProductCardProps {
  product: Product
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductDetail {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  barcode: string;
  availabilityStatus: string;
}

export interface ProductDetailProps {
  product: ProductDetail;
}

export interface CreateProductPayload {
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
}