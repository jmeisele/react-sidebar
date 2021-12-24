import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./Pages/Overview";
import Team from "./Pages/Team";
import Users from "./Pages/Users";
import Revenue from "./Pages/Revenue";
import Products from "./Pages/Products";
import Support from "./Pages/Support";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./Pages/Reports";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/overview/users" element={<Users />} />
        <Route path="/overview/revenue" element={<Revenue />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/reports1" element={<ReportsOne />} />
        <Route path="/reports/reports2" element={<ReportsTwo />} />
        <Route path="/reports/reports3" element={<ReportsThree />} />
        <Route path="/products" element={<Products />} />
        <Route path="/team" element={<Team />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
