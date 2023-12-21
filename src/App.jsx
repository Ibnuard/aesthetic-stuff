import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./layouts/Landing";
import Dashboard from "./layouts/Dashboard";
import Product from "./layouts/Product";
function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="products" element={<Dashboard />} />
      <Route path="products/:id" element={<Product />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
