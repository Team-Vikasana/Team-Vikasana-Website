import React from "react";
import NavBar from "./NavBar";
import SplineElement from "./SplineElement";

const HeroPage = () => {
    return (
        <>
        <section className="bg-black w-screen h-fit overflow-hidden text-white z-0">
            <NavBar />
            <div className="relative mb-40 md:m-0">
                <div className="relative z-20 w-full md:w-2/3 h-fit py-8 px-8 md:px-16  flex flex-col space-y-6 text-left font-altone text-wrap justify-between">
                    <p className="w-fit font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#48E9F8] to-white"># The Research and Innovation Unit of Presidency.</p>
                    <p className="w-fit text-4xl md:text-6xl font-tacticsans">THE INNOVATION HUB FOR BREAKTHROUGH IDEAS.</p>
                    <p className="w-full text-2xl text-[#DADADA]">Empowering students and faculty to turn ideas into impact with cutting-edge research and applications.</p>
                    <div className="flex pt-4">
                        <button className="px-8 py-2 rounded-xl submit-gradient font-semibold"><span className="relative">Contact Us</span></button>
                    </div>
                </div>
                <SplineElement />
            </div>
        </section>
        </>
    );
};

export default HeroPage;