import { useState } from "react"
import { motion } from "framer-motion"
import FormModal from "./FormModal"
import Reveal from "../components/Reveal"

export default function SplitHero(){

const [open,setOpen] = useState(false)
const [type,setType] = useState("")

return(

<div className="min-h-screen pt-32 pb-24 bg-gray-50 flex flex-col items-center">

<div className="text-center mb-24 max-w-3xl px-6">

<h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
Modern Accounting<br/>for Ireland
</h1>

<p className="text-xl text-gray-600 leading-relaxed">
Clear tax advice and reliable financial guidance
for individuals and businesses across Ireland.
</p>

</div>

<div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full px-8">

<Reveal>

<motion.div
whileHover={{ y: -6 }}
transition={{ duration: 0.25 }}
className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm hover:shadow-lg transition text-center"
>

<h2 className="text-3xl font-semibold text-gray-900 mb-6">
Individuals
</h2>

<p className="text-gray-600 mb-10 leading-relaxed">
Personal tax planning, income filing and advisory
services for individuals living or working in Ireland.
</p>

<button
onClick={()=>{setType("Individual");setOpen(true)}}
className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition"
>
Start Here
</button>

</motion.div>

</Reveal>

<Reveal>

<motion.div
whileHover={{ y: -6 }}
transition={{ duration: 0.25 }}
className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm hover:shadow-lg transition text-center"
>

<h2 className="text-3xl font-semibold text-gray-900 mb-6">
Businesses
</h2>

<p className="text-gray-600 mb-10 leading-relaxed">
Accounting, compliance and strategic tax advisory
for companies operating in Ireland.
</p>

<button
onClick={()=>{setType("Business");setOpen(true)}}
className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition"
>
Start Here
</button>

</motion.div>

</Reveal>

</div>

{open && <FormModal type={type} close={()=>setOpen(false)} />}

</div>

)
}