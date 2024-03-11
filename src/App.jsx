import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import {} from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Jessent from "./components/Jessent";
import Kontact from "./components/Kontact";
const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/" element={<Hero />} />
        <Route path="/exp" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/Kontact" element={<Kontact />} />
        <Route path="/model" element={<Jessent />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
