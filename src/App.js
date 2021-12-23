import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>{/* <Route path="" element={}/> */}</Routes>
    </Router>
  );
}

export default App;
