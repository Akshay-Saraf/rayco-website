import { useState } from "react"

export default function FormModal({ type, close }) {

const [step,setStep] = useState("form")

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
message:""
})

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value})
}

function handleSubmit(e){
e.preventDefault()
setStep("confirm")
}

function sendEmail(){
setStep("sent")
}

return(

<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">

<div className="bg-white w-[520px] rounded-2xl shadow-2xl p-10 relative">

<button
onClick={close}
className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 text-lg"
>
×
</button>

{step === "form" && (

<form onSubmit={handleSubmit} className="space-y-6">

<div>

<h2 className="text-2xl font-semibold text-gray-900">
{type} Consultation
</h2>

<p className="text-gray-500 text-sm mt-1">
Leave your details and our team will get back to you.
</p>

</div>

<div className="grid grid-cols-2 gap-4">

<input
name="name"
placeholder="Full Name"
onChange={handleChange}
className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
/>

<input
name="phone"
placeholder="Phone"
onChange={handleChange}
className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
/>

</div>

<input
name="email"
placeholder="Email Address"
onChange={handleChange}
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
/>

<textarea
name="message"
placeholder="How can we help?"
rows="4"
onChange={handleChange}
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
/>

<div className="flex justify-between items-center pt-4">

<button
type="button"
onClick={close}
className="text-gray-500 hover:text-gray-900"
>
Cancel
</button>

<button
className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition"
>
Submit
</button>

</div>

</form>

)}

{step === "confirm" && (

<div className="space-y-6">

<h2 className="text-xl font-semibold text-gray-900">
Confirm Your Details
</h2>

<div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm space-y-2">

<p><b>Name:</b> {form.name}</p>
<p><b>Email:</b> {form.email}</p>
<p><b>Phone:</b> {form.phone}</p>
<p><b>Message:</b> {form.message}</p>

</div>

<div className="flex justify-end gap-4">

<button
onClick={()=>setStep("form")}
className="text-gray-600 hover:text-black"
>
Edit
</button>

<button
onClick={sendEmail}
className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900"
>
Confirm
</button>

</div>

</div>

)}

{step === "sent" && (

<div className="text-center space-y-6">

<h2 className="text-2xl font-semibold text-gray-900">
Request Sent
</h2>

<p className="text-gray-600">
Our team will contact you shortly.
</p>

<button
onClick={close}
className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900"
>
Close
</button>

</div>

)}

</div>

</div>

)
}