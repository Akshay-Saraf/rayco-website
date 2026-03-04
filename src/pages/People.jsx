import Reveal from "../components/Reveal"

export default function People(){

return(

<div className="relative min-h-screen pt-32 pb-28 bg-gray-50 overflow-hidden">


{/* glow background */}

<div className="absolute -top-40 right-1/2 translate-x-1/2 w-[900px] h-[900px] bg-indigo-400/20 blur-[180px] rounded-full"></div>


{/* hero */}

<div className="relative max-w-4xl mx-auto text-center px-6 mb-20">

<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
Our Partners
</h1>

<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
Experienced advisors dedicated to helping individuals and businesses
navigate taxation, compliance and financial planning with confidence.
</p>

</div>



{/* partner cards */}

<div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">

<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition text-center flex flex-col items-center">

<div className="w-24 h-24 rounded-full bg-gray-200 mb-6 flex items-center justify-center text-gray-500 text-sm">

Photo

</div>

<h2 className="text-2xl font-semibold text-gray-900 mb-3">
Ajay
</h2>

<p className="text-gray-600 text-sm leading-relaxed max-w-sm">
Co-Founder and Chartered Tax Advisor with extensive experience
in corporate taxation, financial structuring and strategic advisory
for growing businesses across Ireland.
</p>

</div>

</Reveal>



<Reveal>

<div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition text-center flex flex-col items-center">

<div className="w-24 h-24 rounded-full bg-gray-200 mb-6 flex items-center justify-center text-gray-500 text-sm">

Photo

</div>

<h2 className="text-2xl font-semibold text-gray-900 mb-3">
Sai Ram
</h2>

<p className="text-gray-600 text-sm leading-relaxed max-w-sm">
Co-Founder specialising in accounting systems, financial reporting
and advisory services for startups and established companies
across Ireland.
</p>

</div>

</Reveal>

</div>

</div>

)
}