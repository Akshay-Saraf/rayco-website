import { FileText, BookOpen, BarChart3 } from "lucide-react"
import Reveal from "../components/Reveal"

export default function Resources(){

return(

<div className="relative min-h-screen pt-32 pb-28 bg-gray-50 overflow-hidden">


{/* glow background */}

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-400/20 blur-[180px] rounded-full"></div>


{/* hero */}

<div className="relative max-w-4xl mx-auto text-center px-6 mb-24">

<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
Resources
</h1>

<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
Insights, guides and financial resources to help
individuals and businesses make informed decisions.
</p>

</div>



{/* resource grid */}

<div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">


<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition flex flex-col h-full">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<FileText className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Tax Guides
</h3>

<p className="text-gray-600 text-sm leading-relaxed flex-grow">
Practical guides explaining Irish taxation rules,
compliance obligations and financial planning.
</p>

</div>

</Reveal>



<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition flex flex-col h-full">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<BookOpen className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Financial Articles
</h3>

<p className="text-gray-600 text-sm leading-relaxed flex-grow">
Expert insights on financial management,
tax planning and business strategy.
</p>

</div>

</Reveal>



<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition flex flex-col h-full">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<BarChart3 className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Reports & Insights
</h3>

<p className="text-gray-600 text-sm leading-relaxed flex-grow">
Industry insights and financial trends affecting
Irish businesses and professionals.
</p>

</div>

</Reveal>

</div>

</div>

)
}