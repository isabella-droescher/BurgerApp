import { type BurgerDetailsProps } from "../types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const BurgerDetailsCard = ({
  name,
  image,
  description,
  price,
  weight,
  vegetarian,
  ingredients,
  allergens,
}: BurgerDetailsProps) => {
  const navigate = useNavigate();

  return (
    <div>
    {/* --- Header ---- */}
      <div className="flex items-center border-gray-200 shadow-lg h-10">
        <button onClick={() => navigate(-1)} className="text-cyan-500 mx-5 text-[15px]">
          Zurück
        </button>
        <div className="text-black text-[16px] font-semibold ">{name}</div>
    </div>

    <div className="p-4 space-y-5 max-w-md mx-auto">
    {/* --- Bild ---*/}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover rounded-xl shadow-md"
        />
      </div>

    {/* --- Preis-Infos ---*/}
      <div className="shadow-lg rounded-xl border-gray-200 py-3">
        {/* Werte oben */}
        <div className="grid grid-cols-3 text-center text-[17px] font-semibold text-black">
          <p>{price.toFixed(2)} USD</p>
          <p>{weight} g</p>
          <p>{vegetarian ? "Yes" : "No"}</p>
        </div>

        {/* Beschriftungen unten */}
        <div className="grid grid-cols-3 text-center text-[11px] text-gray-500 mt-1">
          <p>Price</p>
          <p>Weight</p>
          <p>Vegetarian</p>
        </div>
      </div>

    {/* --- Beschreibung --- */}
      <p className="text-[14px] text-center text-black"> {description} </p>

    {/* --- Zutaten --- */}
      <div>
        <h4 className="text-[11px] text-gray"> Special ingredients </h4>

        {/* ? = Wenn ingredients nicht undefined oder null ist, wird .join(", ") ausgeführt.
      Wenn ingredients nicht existiert, wird nichts gemacht – und kein Fehler ausgelöst. */}
        <p className="text-[14px]"> {ingredients?.join(", ")} </p>
      </div>

    {/* ---  Allergien --- */}
      <div>
        <h4 className="text-[11px] text-gray mt-2"> Allergens </h4>
        <p className="text-[14px] text-black bg-orange-100 rounded-lg p-2">
          {allergens?.join(", ")}
        </p>
      </div>
    </div>
    </div>
  );
};

export const BurgerDetails = () => {
  const { id } = useParams(); // z.B. id = "1"
  const [details, setDetails] = useState<BurgerDetailsProps | null>(null);

  useEffect(() => {
    fetch("/restaurant.json")
      .then((res) => res.json())
      .then((data) => {
        const index = Number(id);
        if (!isNaN(index) && data.burgerdetails?.[index]) {
          setDetails(data.burgerdetails[index]);
        }
      })
      .catch((err) => console.error("Fehler beim Laden der JSON:", err));
  }, [id]);

  if (!details) {
    return <div className="p-4">Lade Burger-Details ...</div>;
  }

  return (
    <BurgerDetailsCard
      name={details.name}
      image={details.image}
      description={details.description}
      price={details.price}
      weight={details.weight}
      vegetarian={details.vegetarian}
      ingredients={details.ingredients}
      allergens={details.allergens}
    />
  );
};
