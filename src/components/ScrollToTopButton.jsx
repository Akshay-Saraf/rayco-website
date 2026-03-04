import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function ScrollToTopButton(){

const [visible,setVisible] = useState(false)

useEffect(()=>{

const handleScroll = () => {
if(window.scrollY > 300){
setVisible(true)
}else{
setVisible(false)
}
}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])


function scrollTop(){
window.scrollTo({
top:0,
behavior:"smooth"
})
}

if(!visible) return null

return(

<motion.button
onClick={scrollTop}
initial={{opacity:0,scale:0.7}}
animate={{opacity:1,scale:1}}
exit={{opacity:0}}
whileHover={{scale:1.15}}
whileTap={{scale:0.9}}
className="fixed bottom-8 right-8 z-50 bg-black text-white p-3 rounded-full shadow-lg"
>

<ArrowUp size={22}/>

</motion.button>

)

}