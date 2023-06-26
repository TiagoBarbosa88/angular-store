export interface Products {
  id: string;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
  };
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Category {
  name: string;
  link: string;
}

export interface CartModel {
  title: string;
  price: number;
  image: string;
  units?: number;
  category: {
    id: number;
    name: string;
  };
}
