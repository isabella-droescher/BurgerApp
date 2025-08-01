"use client";
import { useEffect, useState } from "react";
import { type DrinkClickProps } from "../types";
import { useNavigate } from "react-router-dom";

export const Drinkscard = ({ name, image, available, onClick }: DrinkClickProps) => {
  return (
    
      <div className="flex flex-col space-y-2 pt-3">
        <div className="relative w-24 h-24">
        <img 
          src={image}
          alt={name}
          onClick={available ? onClick : undefined }
          className={`w-full h-full object-cover rounded-xl ${available ? 'cursor-pointer' : 'grayscale opacity-70'}`}
        />

         {!available && (
         <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
          <span className="text-red-200 text-[10px] font-semibold text-center"> Currently not available </span>
         </div>
        )}
        </div>

        <h3 className={`text-[10px] font-semibold break-words w-18 mx-1 ${!available ? 'line-through' : ''}`} >{name} </h3>

      </div>
    
  );
};

export const DrinkscardList = () => {
  const navigate = useNavigate();

  const [drinks, setDrinks] = useState<DrinkClickProps[]>([]);

  useEffect(() => {
    fetch("/restaurant.json")
      .then((res) => res.json())
      .then((data) => setDrinks(data.drinks))
      .catch((err) => console.error("Fehler beim Laden der JSON:", err));
  }, []);

  return (
    <div>
    <div className="flex gap-4 flex-wrap mx-5 mt-3">
      {drinks.map((drinks, index) => (
        <Drinkscard
          key={index}
          name={drinks.name}
          image={drinks.image}
          available={drinks.available}
          onClick= {() => navigate("/drinksdetails/" + index)}
        />
      ))}
    </div>
    </div>
  ); 
};
