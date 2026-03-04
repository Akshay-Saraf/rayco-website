import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import FormModal from "../components/FormModal"
import Reveal from "../components/Reveal"



export default function Home(){

const [hover,setHover] = useState(null)
const [open,setOpen] = useState(false)
const [type,setType] = useState("")

const leftWidth = hover==="left" ? "70%" : hover==="right" ? "30%" : "50%"
const rightWidth = hover==="right" ? "70%" : hover==="left" ? "30%" : "50%"

return(

<div className="bg-gray-950 text-white">


{/* SPLIT HERO */}

<section className="h-screen flex overflow-hidden">

<motion.div
animate={{width:leftWidth}}
transition={{duration:0.45}}
onMouseEnter={()=>setHover("left")}
onMouseLeave={()=>setHover(null)}
className="relative flex items-center justify-center bg-gray-950"
>

<div className="absolute w-[700px] h-[700px] bg-blue-500/20 blur-[180px] rounded-full"></div>

<div className="relative text-center max-w-md px-6">

<h2 className="text-5xl font-semibold mb-6">
Individuals
</h2>

<p className="text-gray-300 mb-10">
Personal tax advisory and income filing services
for individuals living and working in Ireland.
</p>

<motion.button
whileHover={{scale:1.08}}
whileTap={{scale:0.95}}
onClick={()=>{setType("Individual");setOpen(true)}}
className="bg-white text-black px-8 py-3 rounded-md font-medium"
>
Start Consultation
</motion.button>

</div>

</motion.div>



<motion.div
animate={{width:rightWidth}}
transition={{duration:0.45}}
onMouseEnter={()=>setHover("right")}
onMouseLeave={()=>setHover(null)}
className="relative flex items-center justify-center bg-white text-black"
>

<div className="absolute w-[700px] h-[700px] bg-indigo-400/20 blur-[180px] rounded-full"></div>

<div className="relative text-center max-w-md px-6">

<h2 className="text-5xl font-semibold mb-6">
Businesses
</h2>

<p className="text-gray-600 mb-10">
Accounting, compliance and tax advisory services
for startups and growing companies.
</p>

<motion.button
whileHover={{scale:1.08}}
whileTap={{scale:0.95}}
onClick={()=>{setType("Business");setOpen(true)}}
className="bg-black text-white px-8 py-3 rounded-md font-medium"
>
Start Consultation
</motion.button>

</div>

</motion.div>

</section>



{/* SCROLL INTRO */}

<section className="py-40 px-8 max-w-5xl mx-auto text-center">

<Reveal>

<h2 className="text-5xl font-semibold mb-6">
Modern Accounting for a Digital Economy
</h2>

<p className="text-lg text-gray-400">
We combine technology, financial expertise and
strategic tax planning to help individuals and
businesses make smarter decisions.
</p>

</Reveal>

</section>



{/* PINNED STORY SECTION */}

<StorySection/>



{/* SERVICES */}

<section className="py-40 bg-gray-900">

<div className="max-w-6xl mx-auto px-8">

<h2 className="text-5xl font-semibold text-center mb-20">
Our Expertise
</h2>

<div className="grid md:grid-cols-3 gap-10">

{["Personal Tax","Corporate Accounting","VAT Compliance"].map((s,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.2}}
className="bg-gray-800 p-10 rounded-xl shadow-xl hover:shadow-2xl transition"
>

<h3 className="text-xl font-semibold mb-4">
{s}
</h3>

<p className="text-gray-400 text-sm">
Professional services designed for modern financial needs.
</p>

</motion.div>
))}

</div>

</div>

</section>



{/* STATS */}

<section className="py-40">

<div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-10 text-center">

{[
{n:"500+",l:"Clients"},
{n:"15+",l:"Years Experience"},
{n:"98%",l:"Client Retention"},
{n:"24/7",l:"Support"}
].map((s,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.15}}
>

<h3 className="text-5xl font-semibold mb-2">
{s.n}
</h3>

<p className="text-gray-400">
{s.l}
</p>

</motion.div>
))}

</div>

</section>



{/* CTA */}

<section className="py-40 bg-black text-center relative overflow-hidden">

<div className="absolute w-[700px] h-[700px] bg-blue-500/20 blur-[160px] rounded-full"></div>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
>

<h2 className="text-5xl font-semibold mb-6">
Let's Work Together
</h2>

<p className="text-gray-400 mb-10">
Start a consultation and discover how we can
optimise your financial strategy.
</p>

<motion.button
whileHover={{scale:1.08}}
whileTap={{scale:0.95}}
onClick={()=>{setType("Consultation");setOpen(true)}}
className="bg-white text-black px-8 py-4 rounded-md font-medium"
>
Book Consultation
</motion.button>

</motion.div>

</section>


{open && <FormModal type={type} close={()=>setOpen(false)}/>}

</div>

)
}



function StorySection(){

const ref = useRef(null)

const {scrollYProgress} = useScroll({
target:ref,
offset:["start start","end end"]
})

const opacity1 = useTransform(scrollYProgress,[0,0.4],[1,0])
const opacity2 = useTransform(scrollYProgress,[0.4,0.8],[0,1])

return(

<section ref={ref} className="relative h-[140vh] bg-gray-900">

<div className="sticky top-0 h-screen flex items-center justify-center">

<div className="relative max-w-3xl text-center px-6">

<motion.div style={{opacity:opacity1}}>

<h2 className="text-5xl font-semibold mb-6">
Financial Intelligence
</h2>

<p className="text-gray-400">
Automation and predictive analytics transforming accounting.
</p>

</motion.div>

<motion.div
style={{opacity:opacity2}}
className="absolute inset-0 flex flex-col items-center justify-center"
>

<h2 className="text-5xl font-semibold mb-6">
AI Powered Financial Strategy
</h2>

<p className="text-gray-400">
Data driven insights guiding financial decisions.
</p>

</motion.div>

</div>

</div>

</section>

)
}   