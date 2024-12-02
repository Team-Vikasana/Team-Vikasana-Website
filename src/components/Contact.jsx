

const Contact = () => {
    return (
        <>
        <section className="bg-black min-w-screen min-h-screen h-fit font-altone">
            <div className="w-full text-center">
                <p className="py-3 text-4xl sm:text-5xl md:text-6xl mx-auto bg-gradient-to-r from-[#7AE0F5] from-25% to-[#9F5EFA] to-60% text-transparent font-tacticsans bg-clip-text">GOT SOMETHING ON YOUR MIND?</p>
                <p className="pt-2 pb-8 text-2xl sm:text-3xl md:text-4xl text-white/50">Don't Hesitate To Contact Us!!</p>
            </div>
            <div className="flex">
                <div className="border w-1/2 h-fit">
                </div>
                <div className="rounded-xl w-1/2 h-fit text-white bg-gradient-to-bl from-[#9F5EFA]/80 to-[#7AE0F5]">
    <form className="flex flex-col py-12 px-2 bg-clip-padding bg-black border border-transparent rounded-xl text-xl">
        <label className="py-2 px-4 bg-transparent">Name*</label>
        <input className="py-2 px-4 mx-8 ring-1 ring-white rounded-xl bg-transparent" type="text" placeholder="Enter your name" required />

        <label className="py-2 px-4 bg-transparent">Email id*</label>
<input className="py-2 px-4 mx-8 ring-1 ring-white rounded-xl bg-transparent" type="email" placeholder="Enter your email" required />

<label className="py-2 px-4 bg-transparent">Phone no.</label>
<input className="py-2 px-4 mx-8 ring-1 ring-white rounded-xl bg-transparent font-poppins tracking-wide" type="tel" placeholder="+91XXXXXXXXXX"/>

<label className="py-2 px-4 bg-transparent">Reason for contact*</label>
<select className="py-2 px-4 mx-8 ring-1 ring-white rounded-xl bg-transparent" required>
    <option className="bg-black text-base" value="" disabled selected>Select</option>
    <option className="bg-black text-base" value="feedback">Feedback</option>
    <option className="bg-black text-base" value="support">Support</option>
    <option className="bg-black text-base" value="inquiry">General Inquiry</option>
</select>

<label className="py-2 px-4 bg-transparent">Your message*</label>
<textarea className="py-2 px-4 mx-8 ring-1 ring-white rounded-xl bg-transparent" rows={4} placeholder="Your message here" required></textarea>

<button className="py-2 px-6 mx-8 mt-4 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:opacity-80">
    Submit
</button>
</form>
</div>

    </div>
</section>
</>
);
}

export default Contact;