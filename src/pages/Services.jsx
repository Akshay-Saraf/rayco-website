import { Calculator, Building, Receipt } from "lucide-react"
import Reveal from "../components/Reveal"

export default function Services(){

return(

<div className="relative min-h-screen pt-32 pb-28 bg-gray-50 overflow-hidden">


{/* glow background */}

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-400/20 blur-[180px] rounded-full"></div>


{/* hero */}

<div className="relative max-w-4xl mx-auto text-center px-6 mb-24">

<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
Our Services
</h1>

<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
Professional accounting and taxation solutions designed
for individuals and modern businesses across Ireland.
</p>

</div>



{/* services grid */}

<div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">


<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition flex flex-col h-full">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<Calculator className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Personal Tax
</h3>

<p className="text-gray-600 text-sm leading-relaxed flex-grow">
Income tax filing, planning and advisory services
for professionals and individuals across Ireland.
</p>

</div>

</Reveal>



<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition flex flex-col h-full">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<Building className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Corporate Accounting
</h3>

<p className="text-gray-600 text-sm leading-relaxed flex-grow">
Accounting, financial reporting and advisory
services tailored for growing businesses.
</p>

</div>

</Reveal>



<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition flex flex-col h-full">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<Receipt className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
VAT & Compliance
</h3>

<p className="text-gray-600 text-sm leading-relaxed flex-grow">
VAT registration, filing and compliance support
to keep businesses aligned with Irish tax law.
</p>

</div>

</Reveal>

</div>

</div>

)
}