import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

function AppContent() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
