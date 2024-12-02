import React from "react";

const Contact = () => {
    return (
      <>
        <section className="bg-black min-w-screen min-h-screen h-fit font-altone">
          <div className="w-full text-center">
            <p className="py-3 text-4xl sm:text-5xl md:text-6xl mx-auto bg-gradient-to-r from-[#7AE0F5] from-25% to-[#9F5EFA] to-60% text-transparent font-tacticsans bg-clip-text">
              GOT SOMETHING ON YOUR MIND?
            </p>
            <p className="pt-2 pb-8 text-2xl sm:text-3xl md:text-4xl text-white/50">
              Don't Hesitate To Contact Us!!
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row px-6 md:px-16 pb-10 md:space-x-16 tracking-wide">

            <div className=" md:w-1/2 h-fit text-white">
                <div className="flex justify-between px-2 py-10 space-x-2 md:space-x-16 ">
                    <div className="border-l-2 pl-1 relative">
                        <div className="w-2 h-2 absolute rounded-full -left-[0.3rem] -top-1 bg-white" />
                        <p className="text-2xl">Got an idea?</p>
                        <p className="text-xl pt-1 text-white/70">Wanna implement it?</p>
                        <p className="text-2xl pt-5">Got an Feedback?</p>
                        <p className="text-xl pt-1 text-white/70">We'd appreciate it !</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl">Got A Problem?</p>
                        <p className="text-xl pt-1  text-white/70">We'd love to solve it!</p>
                        <p className="text-4xl pt-8">Wanna Join us?</p>
                    </div>
                </div>
                <p className="text-xl px-2 text-center">Just fill in this form and we will get back to you before you even realize!!</p>

                <div className="w-full h-fit mt-16 flex flex-col space-y-6 items-start">
                  <div className="flex space-x-2 items-center">
                    <img src="/images/constructionIcon.svg" className="h-8" />
                    <a><p>Construction site...</p></a>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <img src="/images/mail.svg" className="h-8" />
                    <a href="mailto:vikasana.pr@gmail.com"><p>vikasana.pr@gmail.com</p></a>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <img src="/images/location.svg" className="h-8" />
                    <a href="https://maps.app.goo.gl/QiMKgYqvWUcsyRFa9" target="_blank"><p>Preisdency University<br/>Itgalpura, Bengaluru - <span className="font-poppins">560064</span></p></a>
                  </div>
                  <img src="/images/VikasanaLogo.svg" className="h-16 -ml-5" />
                </div>
            </div>

            <div className="rounded-xl md:w-1/2 h-fit text-white bg-gradient-to-bl from-[#9F5EFA]/80 to-[#7AE0F5]">
              <form className="flex flex-col py-12 px-2 bg-clip-padding bg-black border-2 border-transparent rounded-xl text-xl">
                <label className="py-2 px-4 bg-transparent">Name*</label>
                <input
                  className="py-2 px-4 mx-8 ring-1 ring-white rounded-xl bg-transparent text-base"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
  
                <label className="py-2 px-4 bg-transparent">Email id*</label>
                <input
                  className="py-2 px-4 mx-8 ring-1 ring-white rounded-xl bg-transparent text-base"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
  
                <label className="py-2 px-4 bg-transparent">Phone no.</label>
                <input
                  className="py-2 px-4 mx-8 ring-1 ring-white rounded-xl bg-transparent font-poppins  text-base tracking-wide"
                  type="tel"
                  placeholder="+91XXXXXXXXXX"
                />
  
                <label className="py-2 px-4 bg-transparent">
                  Reason for contact*
                </label>
                <select
                  className="py-2 px-4 mx-8 ring-1 ring-white rounded-xl text-base bg-transparent"
                  required
                >
                  <option
                    className="bg-black text-base"
                    value=""
                    disabled
                    selected
                  >
                    Select
                  </option>
                  <option className="bg-black text-base" value="feedback">
                    Feedback
                  </option>
                  <option className="bg-black text-base" value="support">
                    Support
                  </option>
                  <option className="bg-black text-base" value="inquiry">
                    General Inquiry
                  </option>
                </select>
  
                <label className="py-2 px-4 bg-transparent">Your message*</label>
                <textarea
                  className="py-2 px-4 mx-8 ring-1 ring-white rounded-xl bg-transparent  text-base"
                  rows={4}
                  placeholder="Your message here"
                  required
                ></textarea>
  
                <button type="submit" className="py-2 px-16 mx-auto mt-4 w-fit text-lg font-bold submit-gradient text-white rounded-xl">
                  <span className="relative">Submit</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Contact;
  