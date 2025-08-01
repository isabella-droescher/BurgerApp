export type RestaurantProps = {
  name: string;
  address: string;
};

/// ---- Burger Props ---- ////

export type BurgerProps = {
  name: string;
  price: number;
  weight: number;
  image: string;
  available: boolean;
  onClick?: () => void; // Optional click handler for the burger
};

export type BurgerDetailsProps = {
  name: string;
  image: string;
  price: number;
  weight: number;
  vegetarian: boolean;
  description: string;
  ingredients: string[];
  allergens: string[];
}


/// ---- Drink Props ---- ////

// nur name und image!
export type DrinkProps =  {
  name: string;
  image: string;
};

// name, image, onClick, description, price, ingredients!
export type DrinkClickProps = DrinkProps & {
  onClick?: () => void; 
}

// Drinkprops phne onClick --> name, image, description, price, ingedients
export type DrinkDetailsProps = DrinkProps & {
  description: string;
  price: number; 
  ingredients: string[]; 

}
 