import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SplitHero from "./components/SplitHero";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

import Demo from "./pages/Demo";
import About from "./pages/About";
import People from "./pages/People";
import Services from "./pages/Services";
import Calculators from "./pages/Calculators";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

export default function App(){

return(

<Router>

<SmoothScroll />

<Navbar/>

<Routes>

<Route path="/" element={<SplitHero/>}/>
<Route path="/demo" element={<Demo/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/people" element={<People/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/calculators" element={<Calculators/>}/>
<Route path="/resources" element={<Resources/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>

<Footer/>

</Router>

)

}