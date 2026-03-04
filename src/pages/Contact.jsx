import { Mail, Phone, MapPin } from "lucide-react"
import Reveal from "../components/Reveal"

export default function Contact(){

return(

<div className="relative min-h-screen pt-32 pb-28 bg-gray-50 overflow-hidden">

{/* subtle glow background */}

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-400/20 blur-[180px] rounded-full"></div>


{/* hero */}

<div className="relative max-w-4xl mx-auto text-center px-6 mb-24">

<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
Contact Us
</h1>

<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
Our team is available to assist with accounting,
tax advisory and financial planning enquiries.
</p>

</div>


{/* contact cards */}

<div className="relative max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">

<Reveal>

<div className="group flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<MapPin className="text-gray-700 group-hover:text-white"/>

</div>

<p className="text-gray-700 text-sm font-medium">
Dublin, Ireland
</p>

</div>

</Reveal>



<Reveal>

<div className="group flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<Mail className="text-gray-700 group-hover:text-white"/>

</div>

<p className="text-gray-700 text-sm font-medium">
info@rayco.ie
</p>

</div>

</Reveal>



<Reveal>

<div className="group flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<Phone className="text-gray-700 group-hover:text-white"/>

</div>

<p className="text-gray-700 text-sm font-medium">
+353 000000000
</p>

</div>

</Reveal>

</div>

</div>

)
}