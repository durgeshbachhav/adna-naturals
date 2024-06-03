import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurJourney from "./pages/OurJourney";
import Whywe from "./pages/Whywe";
import Products from "./pages/Products";
import Blogpage from "./pages/Blogpage";
import ProductInfo from "./pages/ProductInfo";
import Privacy from "./pages/other/Privacy";
import Return from "./pages/other/Return";
import LocomotiveScroll from 'locomotive-scroll';



export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourjourney" element={<OurJourney />} />
        <Route path="/products" element={<Products />} />
        <Route path="/why" element={<Whywe />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/return-policy" element={<Return />} />
      </Routes>
    </div>
  );
}
