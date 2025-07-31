"use client";
import { useEffect, useState } from "react";
import { type RestaurantProps } from "../types";


export const Restaurant = ({ name, address }: RestaurantProps) => {
  return (
     <div className="mt-8 mx-5">
      <h1 className="text-[25px] font-bold text-black-600">{name}</h1>
      <p className="text-[12px] font-normal">{address}</p>
    </div>
  );
};

export const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

  useEffect(() => {
    fetch("/restaurant.json")
      .then((res) => res.json())
      .then((data) => setRestaurants(data.restaurant))
      .catch((err) => console.error("Fehler beim Laden der JSON:", err));
  }, []);

  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Restaurant
          key={index}
          name={restaurant.name}
          address={restaurant.address}
        />  
      ))}
    </div>
  );
};
