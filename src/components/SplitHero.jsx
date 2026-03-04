import { useState } from "react"
import { motion } from "framer-motion"
import FormModal from "./FormModal"
import Reveal from "../components/Reveal"

export default function SplitHero(){

const [open,setOpen] = useState(false)
const [type,setType] = useState("")

return(

<div className="relative min-h-screen pt-32 pb-24 flex flex-col items-center overflow-hidden bg-gray-50">


{/* background glow */}

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-400/20 blur-[180px] rounded-full"></div>


{/* hero text */}

<div className="relative text-center mb-24 max-w-3xl px-6">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.7}}
className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight"
>

Modern Accounting  
for Ireland

</motion.h1>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.2,duration:0.7}}
className="text-lg md:text-xl text-gray-600 leading-relaxed"
>

Clear tax advice and reliable financial guidance  
for individuals and businesses across Ireland.

</motion.p>

</div>



{/* cards */}

<div className="relative grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl w-full px-6 md:px-8">


<Reveal>

<motion.div
whileHover={{ y:-8, scale:1.02 }}
transition={{ type:"spring", stiffness:200 }}
className="group bg-white border border-gray-200 rounded-2xl p-10 md:p-12 shadow-sm hover:shadow-xl transition text-center"
>

<h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
Individuals
</h2>

<p className="text-gray-600 mb-10 leading-relaxed text-sm md:text-base">
Personal tax planning, income filing and advisory  
services for individuals living or working in Ireland.
</p>

<motion.button
whileHover={{scale:1.06}}
whileTap={{scale:0.95}}
onClick={()=>{setType("Individual");setOpen(true)}}
className="bg-black text-white px-8 py-3 rounded-md font-medium transition group-hover:bg-gray-900"
>

Start Here

</motion.button>

</motion.div>

</Reveal>



<Reveal>

<motion.div
whileHover={{ y:-8, scale:1.02 }}
transition={{ type:"spring", stiffness:200 }}
className="group bg-white border border-gray-200 rounded-2xl p-10 md:p-12 shadow-sm hover:shadow-xl transition text-center"
>

<h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
Businesses
</h2>

<p className="text-gray-600 mb-10 leading-relaxed text-sm md:text-base">
Accounting, compliance and strategic tax advisory  
for companies operating in Ireland.
</p>

<motion.button
whileHover={{scale:1.06}}
whileTap={{scale:0.95}}
onClick={()=>{setType("Business");setOpen(true)}}
className="bg-black text-white px-8 py-3 rounded-md font-medium transition group-hover:bg-gray-900"
>

Start Here

</motion.button>

</motion.div>

</Reveal>

</div>


{open && <FormModal type={type} close={()=>setOpen(false)} />}

</div>

)
}