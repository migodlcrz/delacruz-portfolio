import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./index.css";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
