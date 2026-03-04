import { Mail, Phone, MapPin } from "lucide-react"
import Reveal from "../components/Reveal"

export default function Contact(){

return(

<div className="min-h-screen pt-32 pb-24">

<div className="max-w-4xl mx-auto text-center px-8 mb-20">

<h1 className="text-5xl font-semibold text-gray-900 mb-6">
Contact Us
</h1>

<p className="text-lg text-gray-600">
Our team is available to assist with accounting
and taxation queries.
</p>

</div>


<div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8 px-8">

<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">

<MapPin className="mx-auto mb-4 text-gray-700"/>

<p className="text-gray-700 text-sm">
Dublin, Ireland
</p>

</div>

</Reveal>


<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">

<Mail className="mx-auto mb-4 text-gray-700"/>

<p className="text-gray-700 text-sm">
info@rayco.ie
</p>

</div>

</Reveal>


<Reveal>

<div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">

<Phone className="mx-auto mb-4 text-gray-700"/>

<p className="text-gray-700 text-sm">
+353 000000000
</p>

</div>

</Reveal>

</div>

</div>

)
}