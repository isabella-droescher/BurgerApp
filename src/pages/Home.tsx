// Importierte Routing Funktionen
/*import { useNavigate } from "react-router-dom"; */
import { StatusBar } from "../components/StatusBar";
import { DrinkscardList } from "../components/DrinksCard";
import { RestaurantList } from "../components/Restaurant";
import { BurgerList } from "../components/BurgerCard";


//Hauptfunktion der App
export default function Home() {
  return (
    // Hintergrund Grau / Dark
    <div className="bg-zinc-800 py-10">
      {/* Flexbox Weiß */}
      <div className="flex bg-white rounded-lg shadow-lg w-90 h-300 mx-auto">
        <div>
          <StatusBar />
          <RestaurantList />

          <h2 className="text-[20px] font-bold text-black-600 mt-5 mx-5">
            Burgers
          </h2>
          {/* Hier wird die Liste aller Burger angezeigt */}
          <BurgerList />

          <h3 className="text-[20px] font-bold text-black-600 mt-5 mx-5">
            Drinks
          </h3>
          {/* Hier wird die Liste aller Drinks angezeigt */}
          <DrinkscardList />
        </div>
      </div>
    </div>
  );
}
