import { Calculator, TrendingUp, PieChart } from "lucide-react"
import Reveal from "../components/Reveal"

export default function Calculators(){

return(

<div className="min-h-screen pt-32 pb-24">

<div className="max-w-4xl mx-auto text-center px-8 mb-20">

<h1 className="text-5xl font-semibold text-gray-900 mb-6">
Financial Calculators
</h1>

<p className="text-lg text-gray-600">
Tools to estimate taxes and understand financial outcomes.
</p>

</div>


<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-8">

<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<Calculator className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Income Tax Calculator
</h3>

<p className="text-gray-600 text-sm">
Estimate personal income tax obligations in Ireland.
</p>

</div>

</Reveal>


<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<TrendingUp className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Profit Estimator
</h3>

<p className="text-gray-600 text-sm">
Estimate business profits and expected tax liabilities.
</p>

</div>

</Reveal>


<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<PieChart className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Expense Breakdown
</h3>

<p className="text-gray-600 text-sm">
Visualise spending patterns and financial distribution.
</p>

</div>

</Reveal>

</div>

</div>

)
}