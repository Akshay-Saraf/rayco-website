import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"



export default function Demo(){

return(

<div className="bg-gray-50">

<HeroSection/>

<RevealSection/>

<VideoSection/>

<ParallaxSection/>

<CardsSection/>

<StatsSection/>

<CTASection/>

</div>

)

}



function HeroSection(){

return(

<section className="h-screen flex items-center justify-center text-center px-6">

<motion.div
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
>

<h1 className="text-7xl font-semibold text-gray-900 mb-6">
Future of Accounting
</h1>

<p className="text-xl text-gray-600 max-w-xl mx-auto">
Modern financial advisory designed for the next generation of businesses.
</p>

</motion.div>

</section>

)

}



function RevealSection(){

return(

<section className="py-40 px-8 max-w-5xl mx-auto text-center">

<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.8}}
>

<h2 className="text-5xl font-semibold mb-6">
Helping Businesses Grow
</h2>

<p className="text-lg text-gray-600">
We simplify financial complexity so companies can focus on growth.
</p>

</motion.div>

</section>

)

}



function VideoSection(){

return(

<section className="relative h-[70vh] overflow-hidden flex items-center justify-center">

<video
autoPlay
muted
loop
playsInline
className="absolute w-full h-full object-cover"
>

<source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4"/>

</video>

<div className="relative z-10 text-white text-center">

<h2 className="text-5xl font-semibold mb-4">
Data Driven Decisions
</h2>

<p className="text-lg">
Financial insights powered by technology.
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

<section ref={ref} className="py-40">

<div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

<motion.img
src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
className="rounded-xl shadow-xl"
style={{y}}
/>

<div>

<h2 className="text-4xl font-semibold mb-6">
Financial Strategy
</h2>

<p className="text-gray-600 text-lg">
Strategic advisory designed to optimise tax efficiency
and financial performance.
</p>

</div>

</div>

</section>

)

}



function CardsSection(){

const cards = [
"Tax Advisory",
"Corporate Accounting",
"Financial Planning",
"Business Structuring"
]

return(

<section className="py-40 bg-white">

<div className="max-w-6xl mx-auto px-8">

<h2 className="text-5xl font-semibold text-center mb-20">
Our Services
</h2>

<div className="grid md:grid-cols-4 gap-10">

{cards.map((card,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.15,duration:0.6}}
className="bg-gray-50 p-10 rounded-xl shadow-sm hover:shadow-lg transition"
>

<h3 className="text-xl font-semibold mb-4">
{card}
</h3>

<p className="text-gray-600 text-sm">
Professional services tailored to modern organisations.
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}



function StatsSection(){

const stats = [
{number:"500+",label:"Clients"},
{number:"15+",label:"Years Experience"},
{number:"98%",label:"Client Retention"},
{number:"24/7",label:"Support"}
]

return(

<section className="py-40">

<div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-10 text-center">

{stats.map((s,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.15}}
>

<h3 className="text-5xl font-semibold mb-2">
{s.number}
</h3>

<p className="text-gray-600">
{s.label}
</p>

</motion.div>

))}

</div>

</section>

)

}



function CTASection(){

return(

<section className="py-40 bg-gray-900 text-white text-center">

<motion.div
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.8}}
>

<h2 className="text-5xl font-semibold mb-6">
Let's Work Together
</h2>

<p className="text-lg mb-10 text-gray-300">
Start your financial transformation today.
</p>

<button className="bg-white text-black px-8 py-4 rounded-md font-medium">
Book Consultation
</button>

</motion.div>

</section>

)

}