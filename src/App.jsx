import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Navbar from "./components/Navbar"
import SplitHero from "./components/SplitHero"
import Footer from "./components/Footer"
import SmoothScroll from "./components/SmoothScroll"
import ScrollToTopButton from "./components/ScrollToTopButton"
import ScrollProgress from "./components/ScrollProgress"

import Home from "./pages/Home"
import Demo from "./pages/Demo"
import About from "./pages/About"
import People from "./pages/People"
import Services from "./pages/Services"
import Calculators from "./pages/Calculators"
import Resources from "./pages/Resources"
import Contact from "./pages/Contact"

export default function App(){

const location = useLocation()

return(

<>

<SmoothScroll/>
<ScrollProgress/>

<Navbar/>

<AnimatePresence mode="wait">

<motion.div
key={location.pathname}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-20}}
transition={{duration:0.35}}
>

<Routes location={location}>

<Route path="/" element={<SplitHero/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/demo" element={<Demo/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/people" element={<People/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/calculators" element={<Calculators/>}/>
<Route path="/resources" element={<Resources/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>

</motion.div>

</AnimatePresence>

<ScrollToTopButton/>

<Footer/>

</>

)

}