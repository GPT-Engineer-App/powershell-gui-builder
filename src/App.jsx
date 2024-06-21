import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PowerShellGUI from "./pages/PowerShellGUI.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/powershell-gui" element={<PowerShellGUI />} />
      </Routes>
    </Router>
  );
}

export default App;
