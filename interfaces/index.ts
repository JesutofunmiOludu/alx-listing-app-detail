export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface ReviewProps {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: string[]; // Acts as amenities
  price: number;
  offers: string[]; // Specific offers
  image: string;
  description: string;
  reviews: ReviewProps[];
}