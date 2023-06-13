export interface Products {
  id: string;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string
  };
  images: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Category {
  name: string;
  link: string;
}
