import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contato from "./Contato";
import Produtos from "./Produtos";
import Eventos from "./Eventos";
import Clientes from "./Clientes";
import SobreNos from "./SobreNos";

export default function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
      </Routes>
    </Router>
  );
}
