import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./layouts/Landing";
import Dashboard from "./layouts/Dashboard";
function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to={"/landing/"} replace />} />
    </Routes>
  );
}

export default App;
