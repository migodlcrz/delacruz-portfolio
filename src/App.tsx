import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./index.css";
import Footer from "./components/Footer";
import { useRef } from "react";

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <BrowserRouter>
      <AppContent
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
      />
    </BrowserRouter>
  );
};

interface AppContentProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

const AppContent: React.FC<AppContentProps> = ({
  homeRef,
  aboutRef,
  servicesRef,
  projectsRef,
}) => {
  return (
    <div>
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeRef={homeRef}
              aboutRef={aboutRef}
              servicesRef={servicesRef}
              projectsRef={projectsRef}
            />
          }
        />
      </Routes>
      <Footer
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
      />
    </div>
  );
};

export default App;
