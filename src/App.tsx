// Routing Seite --> Bestimmt die Verlinkung der verschienen Seiten

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import DrinksDetailPage from "./pages/DrinksDetailPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/drinksdetails/:id" element={<DrinksDetailPage />} />

      </Routes>
    </Router>
  );
}
