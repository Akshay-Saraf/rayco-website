import { Calculator, TrendingUp, PieChart } from "lucide-react"
import Reveal from "../components/Reveal"

export default function Calculators(){

return(

<div className="relative min-h-screen pt-32 pb-28 bg-gray-50 overflow-hidden">


{/* background glow */}

<div className="absolute -top-40 right-1/2 translate-x-1/2 w-[900px] h-[900px] bg-indigo-400/20 blur-[180px] rounded-full"></div>


{/* hero */}

<div className="relative max-w-4xl mx-auto text-center px-6 mb-24">

<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
Financial Calculators
</h1>

<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
Interactive tools designed to estimate taxes,
visualise financial outcomes and support smarter
financial decisions.
</p>

</div>



{/* cards */}

<div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8 md:gap-10 px-6">

<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition flex flex-col h-full">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<Calculator className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Income Tax Calculator
</h3>

<p className="text-gray-600 text-sm leading-relaxed flex-grow">
Estimate personal income tax obligations based
on Irish tax brackets and allowances.
</p>

</div>

</Reveal>



<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition flex flex-col h-full">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<TrendingUp className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Profit Estimator
</h3>

<p className="text-gray-600 text-sm leading-relaxed flex-grow">
Estimate projected profits and approximate
corporate tax liabilities.
</p>

</div>

</Reveal>



<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition flex flex-col h-full">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-6 group-hover:bg-black transition">

<PieChart className="text-gray-700 group-hover:text-white"/>

</div>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Expense Breakdown
</h3>

<p className="text-gray-600 text-sm leading-relaxed flex-grow">
Understand spending distribution and identify
opportunities for cost optimisation.
</p>

</div>

</Reveal>

</div>

</div>

)
}