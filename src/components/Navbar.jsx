import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/logo.svg"

export default function Navbar(){

const [scrolled,setScrolled] = useState(false)
const [mobileOpen,setMobileOpen] = useState(false)

useEffect(()=>{

const handleScroll = () => {
setScrolled(window.scrollY > 40)
}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
scrolled
? "bg-white/80 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm"
: "bg-white py-5"
}`}>

<div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10">

<NavLink to="/" className="flex items-center">
<img src={logo} className="h-9"/>
</NavLink>


{/* Desktop Navigation */}

<div className="hidden md:flex items-center gap-8 text-sm font-medium">

<NavItem to="/home" label="Home"/>
<NavItem to="/demo" label="Demo"/>
<NavItem to="/services" label="Services"/>
<NavItem to="/calculators" label="Calculators"/>
<NavItem to="/about" label="About"/>
<NavItem to="/people" label="People"/>
<NavItem to="/resources" label="Resources"/>
<NavItem to="/contact" label="Contact"/>

</div>


{/* Mobile Menu Button */}

<button
onClick={()=>setMobileOpen(!mobileOpen)}
className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
aria-label="Toggle Menu"
>

{mobileOpen ? <X size={24}/> : <Menu size={24}/>}

</button>

</div>


{/* Mobile Menu */}

<AnimatePresence>

{mobileOpen && (

<motion.div
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-20}}
transition={{duration:0.25}}
className="md:hidden bg-white border-t border-gray-200"
>

<div className="flex flex-col px-6 py-6 space-y-4 text-sm font-medium">

<MobileNavItem to="/demo" label="Demo" close={()=>setMobileOpen(false)}/>
<MobileNavItem to="/services" label="Services" close={()=>setMobileOpen(false)}/>
<MobileNavItem to="/calculators" label="Calculators" close={()=>setMobileOpen(false)}/>
<MobileNavItem to="/about" label="About" close={()=>setMobileOpen(false)}/>
<MobileNavItem to="/people" label="People" close={()=>setMobileOpen(false)}/>
<MobileNavItem to="/resources" label="Resources" close={()=>setMobileOpen(false)}/>
<MobileNavItem to="/contact" label="Contact" close={()=>setMobileOpen(false)}/>

</div>

</motion.div>

)}

</AnimatePresence>

</nav>

)

}



function NavItem({to,label}){

return(

<NavLink
to={to}
className={({isActive}) =>
`relative pb-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
isActive ? "text-black" : "text-gray-600 hover:text-black"
}
after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black
after:w-full after:origin-left after:scale-x-0
after:transition-transform after:duration-300
hover:after:scale-x-100
${isActive ? "after:scale-x-100" : ""}`
}
>

{label}

</NavLink>

)

}



function MobileNavItem({to,label,close}){

return(

<NavLink
to={to}
onClick={close}
className={({isActive}) =>
`block py-2 text-base transition ${
isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"
}`
}
>

{label}

</NavLink>

)

}