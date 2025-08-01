"use client";
import { useEffect, useState } from "react";
import { type BurgerProps } from "../types";
import { useNavigate } from "react-router-dom";

export const Burgercard = ({ name, price, weight, image, available, onClick }: BurgerProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md w-80 mx-5 mt-3">
      <div className="relative"> 
        {/* Ausführliche Version: (if available === true, wenn verfügbar dann ... , sonst ...)
        
        {(available ? <img src={image} alt={name} onClick={onClick} className="w-full h-30 object-cover cursor-pointer" /> : 
        <img src={"/images/not-available.jpg"} alt={name} className="w-full h-30 object-cover cursor-pointer" /> 
        )} */}

        {/* Zusammengefasste Version: */}
        <img
         src={available ? image : "/images/not-available.jpg"}   // Optional: Extra Image (image2) in .json für jedes Element anders anlegen
         alt={name} 
         onClick={available ? onClick : undefined} 
         className={`w-full h-30 object-cover ${!available ? '' : 'cursor-pointer'}`} 
         />

         <div className={`absolute top-20 right-1.5 text-white px-3 py-1 text-sm rounded-full ${!available ? 'line-through bg-red-700' : 'bg-sky-400' }`}> {price.toFixed(2)} USD </div> 
      </div>

      <div className="flex justify-between items-center p-3">
        <h3 className={`text-base font-medium ${!available ? 'line-through' : ''}`} > {name} </h3>
        <p className={`text-sm text-gray-600 ${!available ? 'line-through' : '' }`} > {weight} g </p>
      </div>
    </div>
  );
};

export const BurgerList = () => {
  const [burgers, setBurgers] = useState<BurgerProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/restaurant.json")
      .then((res) => res.json())
      .then((data) => setBurgers(data.burgers))
      .catch((err) => console.error("Fehler beim Laden der JSON:", err));
  }, []);

  return (
    <div>
      {burgers.map((burger, index) => (
        <Burgercard
          key={index}
          name={burger.name}
          price={burger.price}
          weight={burger.weight}
          image={burger.image}
          available ={burger.available}
          onClick={() => navigate("/details/" + index)} 
        />
      ))}
    </div>
  );
};