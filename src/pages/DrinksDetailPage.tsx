import { DrinksDetail } from "../components/DrinksDetails";
import { StatusBar } from "../components/StatusBar";



//Hauptfunktion der App
export default function DrinksDetailPage() {

  return (
    // Hintergrund Grau / Dark
    <div className="bg-zinc-800 py-10">
      {/* Flexbox Weiß */}
      <div className="flex bg-white rounded-lg shadow-lg w-90 h-240 mx-auto">
        <div className="w-full" >
          <StatusBar/>
          <DrinksDetail/>
        </div>
    </div>
</div>
  );
};