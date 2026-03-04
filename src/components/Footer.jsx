import { motion } from "framer-motion"

export default function Footer(){

return(

<footer className="bg-gray-950 text-gray-400">

<div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-3">


<div>

<h3 className="text-white font-semibold text-lg mb-4">
Ray & Co Accounting
</h3>

<p className="text-sm leading-relaxed max-w-sm">
Professional accounting and tax advisory services based in Dublin, Ireland.
Helping individuals and businesses stay compliant, optimise taxes and grow
with confidence.
</p>

</div>


<div>

<h3 className="text-white font-semibold text-lg mb-4">
Contact
</h3>

<ul className="space-y-2 text-sm">

<li>Dublin, Ireland</li>
<li>info@rayco.ie</li>
<li>+353 000000000</li>

</ul>

</div>


<div>

<h3 className="text-white font-semibold text-lg mb-4">
Services
</h3>

<ul className="space-y-2 text-sm">

<FooterLink label="Personal Tax"/>
<FooterLink label="Corporate Accounting"/>
<FooterLink label="VAT Advisory"/>
<FooterLink label="Financial Consulting"/>

</ul>

</div>

</div>


<div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">

© 2026 Ray & Co Accounting. All rights reserved.

</div>

</footer>

)
}



function FooterLink({label}){

return(

<motion.li
whileHover={{x:4}}
className="cursor-pointer hover:text-white transition"
>
{label}
</motion.li>

)

}