import { BookOpen, FileText, Newspaper } from "lucide-react"
import Reveal from "../components/Reveal"

export default function Resources(){

return(

<div className="min-h-screen pt-32 pb-24">

<div className="max-w-4xl mx-auto text-center px-8 mb-20">

<h1 className="text-5xl font-semibold text-gray-900 mb-6">
Resources
</h1>

<p className="text-lg text-gray-600">
Guides and insights to help understand taxation
and financial planning in Ireland.
</p>

</div>


<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-8">

<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<BookOpen className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Tax Guides
</h3>

<p className="text-gray-600 text-sm">
Practical explanations of Irish tax regulations.
</p>

</div>

</Reveal>


<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<FileText className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Compliance Updates
</h3>

<p className="text-gray-600 text-sm">
Latest regulatory updates affecting businesses.
</p>

</div>

</Reveal>


<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">

<Newspaper className="mb-4 text-gray-700"/>

<h3 className="text-xl font-semibold text-gray-900 mb-3">
Industry Insights
</h3>

<p className="text-gray-600 text-sm">
Articles on financial planning and tax optimisation.
</p>

</div>

</Reveal>

</div>

</div>

)
}