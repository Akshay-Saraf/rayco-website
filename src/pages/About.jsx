import { Users, Target, Lightbulb } from "lucide-react"
import Reveal from "../components/Reveal"

export default function About(){

return(

<div className="min-h-screen pt-32 pb-24">

<div className="max-w-4xl mx-auto text-center px-8 mb-20">

<h1 className="text-5xl font-semibold text-gray-900 mb-6">
About Ray & Co
</h1>

<p className="text-lg text-gray-600">
A Dublin based accounting and tax advisory firm helping individuals
and businesses simplify financial complexity.
</p>

</div>


<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-8">

<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<Users className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Our Clients
</h3>

<p className="text-gray-600 text-sm">
We support professionals, startups and growing companies
across Ireland with modern accounting solutions.
</p>

</div>

</Reveal>


<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<Target className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Our Mission
</h3>

<p className="text-gray-600 text-sm">
To simplify compliance and help clients optimise tax
efficiency through clear financial guidance.
</p>

</div>

</Reveal>


<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<Lightbulb className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Our Approach
</h3>

<p className="text-gray-600 text-sm">
Combining modern tools with deep tax expertise to
deliver practical and reliable advice.
</p>

</div>

</Reveal>

</div>

</div>

)
}