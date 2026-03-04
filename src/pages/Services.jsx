import { Calculator, Building, Receipt } from "lucide-react"
import Reveal from "../components/Reveal"

export default function Services(){

return(

<div className="min-h-screen pt-32 pb-24">

<div className="max-w-4xl mx-auto text-center px-8 mb-20">

<h1 className="text-5xl font-semibold text-gray-900 mb-6">
Our Services
</h1>

<p className="text-lg text-gray-600">
Accounting and tax solutions designed for modern businesses and individuals.
</p>

</div>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-8">

<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<Calculator className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Personal Tax
</h3>

<p className="text-gray-600 text-sm">
Income tax filing and planning services for individuals.
</p>

</div>

</Reveal>


<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<Building className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Corporate Accounting
</h3>

<p className="text-gray-600 text-sm">
Accounting and financial reporting for businesses.
</p>

</div>

</Reveal>


<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<Receipt className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
VAT & Compliance
</h3>

<p className="text-gray-600 text-sm">
VAT registration, filing and compliance support.
</p>

</div>

</Reveal>

</div>

</div>

)
}