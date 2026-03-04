import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Particles from "../components/Particles"



export default function Demo(){

return(

<div className="bg-gray-950 text-white overflow-hidden">

<Hero/>

<StorySection/>

<VideoSection/>

<ParallaxSection/>

<Services/>

<Stats/>

<CTA/>

</div>

)

}



function Hero(){

return(

<section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">

<Particles/>

<div className="absolute w-[700px] h-[700px] bg-blue-500/20 blur-[160px] rounded-full"></div>

<motion.div
initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="relative z-10"
>

<h1 className="text-7xl font-semibold mb-6">
Future of Finance
</h1>

<p className="text-xl text-gray-300 max-w-xl mx-auto">
Technology, automation and AI redefining modern accounting.
</p>

<motion.button
whileHover={{scale:1.08}}
whileTap={{scale:0.95}}
className="mt-10 px-10 py-4 bg-white text-black rounded-lg font-medium"
>

Start Exploration

</motion.button>

</motion.div>

</section>

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

<div className="relative max-w-3xl text-center">

<motion.div style={{opacity:opacity1}}>

<h2 className="text-5xl font-semibold mb-6">
Financial Intelligence
</h2>

<p className="text-gray-400">
Automation and predictive analytics transforming accounting.
</p>

</motion.div>

<motion.div style={{opacity:opacity2}} className="absolute inset-0 flex flex-col items-center justify-center">

<h2 className="text-5xl font-semibold mb-6">
AI Powered Strategy
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



function VideoSection(){

return(

<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

<video
autoPlay
muted
loop
playsInline
className="absolute w-full h-full object-cover"
>

<source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4"/>

</video>

<div className="relative text-white text-center">

<h2 className="text-5xl font-semibold mb-4">
Automation at Scale
</h2>

<p className="text-lg">
Technology streamlining complex financial workflows.
</p>

</div>

</section>

)

}



function ParallaxSection(){

const ref = useRef(null)

const {scrollYProgress} = useScroll({
target:ref,
offset:["start end","end start"]
})

const y = useTransform(scrollYProgress,[0,1],[100,-100])

return(

<section ref={ref} className="py-40 bg-gray-950">

<div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

<motion.img
src="https://picsum.photos/900/600"
style={{y}}
className="rounded-xl shadow-xl"
/>

<div>

<h2 className="text-4xl font-semibold mb-6">
Predictive Financial Models
</h2>

<p className="text-gray-400 text-lg">
Machine learning models forecasting revenue,
risk exposure and growth opportunities.
</p>

</div>

</div>

</section>

)

}



function Services(){

const services=[
"AI Tax Advisory",
"Automated Compliance",
"Financial Forecasting",
"Corporate Intelligence"
]

return(

<section className="py-40 bg-gray-900">

<div className="max-w-6xl mx-auto px-8">

<h2 className="text-5xl font-semibold text-center mb-20">
Technology Capabilities
</h2>

<div className="grid md:grid-cols-4 gap-10">

{services.map((s,i)=>(

<motion.div
key={i}
whileHover={{rotateX:10,rotateY:-10,scale:1.05}}
transition={{type:"spring",stiffness:200}}
className="bg-gray-800 p-10 rounded-xl shadow-xl"
>

<h3 className="text-xl font-semibold mb-4">
{s}
</h3>

<p className="text-gray-400 text-sm">
Advanced solutions designed for modern financial systems.
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}



function Stats(){

const stats=[
{value:500,label:"Clients"},
{value:15,label:"Years Experience"},
{value:98,label:"Retention"},
{value:24,label:"Support"}
]

return(

<section className="py-40 bg-gray-950">

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

{stats.map((s,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.2}}
>

<h3 className="text-5xl font-semibold mb-2">
{s.value}
</h3>

<p className="text-gray-400">
{s.label}
</p>

</motion.div>

))}

</div>

</section>

)

}



function CTA(){

return(

<section className="relative py-40 bg-black text-center overflow-hidden">

<div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full"></div>

<motion.div
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.8}}
className="relative z-10"
>

<h2 className="text-5xl font-semibold mb-6">
Build the Future of Finance
</h2>

<p className="text-gray-400 mb-10">
Partner with experts combining finance and technology.
</p>

<motion.button
whileHover={{scale:1.08}}
whileTap={{scale:0.95}}
className="px-10 py-4 bg-white text-black rounded-lg font-medium"
>

Start Consultation

</motion.button>

</motion.div>

</section>

)
}