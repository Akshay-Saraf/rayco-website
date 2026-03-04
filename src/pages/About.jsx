import { Users, Target, Lightbulb } from "lucide-react"
import Reveal from "../components/Reveal"

export default function About(){

return(

<div className="relative min-h-screen pt-32 pb-28 bg-gray-50 overflow-hidden">


{/* subtle gradient glow */}

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-400/20 blur-[180px] rounded-full"></div>


{/* hero */}

<div className="relative max-w-4xl mx-auto text-center px-6 mb-24">

<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
About Ray & Co
</h1>

<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
A Dublin based accounting and tax advisory firm helping individuals
and businesses simplify financial complexity and make confident
financial decisions.
</p>

</div>



{/* cards */}

<div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8 md:gap-10 px-6">

<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<Users className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Our Clients
</h3>

<p className="text-gray-600 text-sm leading-relaxed">
We support professionals, startups and growing companies
across Ireland with modern accounting solutions and
clear financial guidance.
</p>

</div>

</Reveal>



<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<Target className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Our Mission
</h3>

<p className="text-gray-600 text-sm leading-relaxed">
To simplify compliance and help clients optimise tax
efficiency through reliable and transparent financial
advisory services.
</p>

</div>

</Reveal>



<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<Lightbulb className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Our Approach
</h3>

<p className="text-gray-600 text-sm leading-relaxed">
Combining modern technology with deep tax expertise
to deliver practical solutions and long-term financial
clarity.
</p>

</div>

</Reveal>

</div>

</div>

)
}