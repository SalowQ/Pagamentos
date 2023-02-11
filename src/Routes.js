import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Pagamento from "./paginas/Pagamento";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/pagamento/:id/:nome' element={<Pagamento></Pagamento>}></Route>
      </ Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
