import { motion } from "framer-motion"

export default function Particles(){

const particles = new Array(20).fill(0)

return(

<div className="absolute inset-0 overflow-hidden pointer-events-none">

{particles.map((_,i)=>(

<motion.div
key={i}
className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
initial={{
x: Math.random()*window.innerWidth,
y: Math.random()*window.innerHeight
}}
animate={{
y: [null,-100],
opacity:[0.3,0]
}}
transition={{
duration: 10+Math.random()*10,
repeat:Infinity
}}
/>

))}

</div>

)

}