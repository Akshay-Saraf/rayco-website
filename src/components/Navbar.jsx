import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from "../assets/logo.svg"

export default function Navbar(){

const [scrolled,setScrolled] = useState(false)

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
? "bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
: "bg-white border-b border-gray-200 py-5"
}`}>

<div className="max-w-7xl mx-auto flex justify-between items-center px-10">

<NavLink to="/" className="flex items-center">
<img src={logo} className="h-9"/>
</NavLink>

<div className="flex items-center gap-8 text-sm font-medium">

<NavItem to="/demo" label="Demo"/>
<NavItem to="/services" label="Services"/>
<NavItem to="/calculators" label="Calculators"/>
<NavItem to="/about" label="About"/>
<NavItem to="/people" label="People"/>
<NavItem to="/resources" label="Resources"/>
<NavItem to="/contact" label="Contact"/>

</div>

</div>

</nav>

)
}



function NavItem({to,label}){

return(

<NavLink
to={to}
className={({isActive}) =>
`relative pb-1 transition-colors duration-300 ${
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