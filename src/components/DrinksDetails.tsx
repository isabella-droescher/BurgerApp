import { type DrinkDetailsProps } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const DrinksDetailsCard = ({
  name,
  image,
  description,
  price,
  ingredients,
}: DrinkDetailsProps) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* --- Header ---- */}
      <div className="flex items-center border-gray-200 shadow-lg h-10">
        <button
          onClick={() => navigate(-1)}
          className="text-cyan-500 mx-5 text-[15px]"
        >
          Zurück
        </button>
        <div className="text-black text-[16px] font-semibold ">{name}</div>
      </div>

    {/* --- Image ---- */}
      <div className="p-4 space-y-5 max-w-md mx-auto">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-60 object-cover rounded-xl shadow-md"
          />
        </div>

       <div className="shadow-lg rounded-xl border-gray-200 py-3">
        {/* Werte oben */}
        <div className="text-center text-[17px] font-semibold text-black">
          <p>{price.toFixed(2)} USD</p>
        </div>

        {/* Beschriftungen unten */}
        <div className="text-center text-[11px] text-gray-500 mt-1">
          <p>Price</p>
        </div>
      </div>

       <p className="text-[14px] text-center text-black"> {description} </p>

        {/* --- Zutaten --- */}
      <div>
        <h4 className="text-[11px] text-gray"> Special ingredients </h4>
        <p className="text-[14px] text-black bg-orange-100 rounded-lg p-2"> {ingredients?.join(", ")} </p>
      </div>
       
      </div>
    </div>
  );
};

export const DrinksDetail = () => {
  const { id } = useParams(); // z.B. id = "1"
  const [drinks, setDrinks] = useState<DrinkDetailsProps | null>(null);

  useEffect(() => {
    fetch("/restaurant.json")
      .then((res) => res.json())
      .then((data) => {
        const index = Number(id);
        if (!isNaN(index) && data.drinkdetails?.[index]) {
          setDrinks(data.drinkdetails[index]);
        }
      })
      .catch((err) => console.error("Fehler beim Laden der JSON:", err));
  }, [id]);

  if (!drinks) {
    return <div className="p-4">Lade Getränke-Details ...</div>;
  }

  return (
    <DrinksDetailsCard
      name={drinks.name}
      image={drinks.image}
      description={drinks.description}
      price={drinks.price}
      ingredients={drinks.ingredients}
    />
  );
};
