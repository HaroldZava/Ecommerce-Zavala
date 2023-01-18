
import "./App.css";

import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";


// Componente App
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer />} />
        <Route path="/Item/:itemid" element={ <ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
