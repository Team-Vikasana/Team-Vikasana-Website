import React, { useState } from "react";
import { MenuIcon } from "lucide-react";

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="max-sm:flex lg:flex py-8 px-8 md:px-16 items-center justify-between bg-black font-altone font-extralight relative z-50">
            <div className="flex items-center select-none">
                <img src="/images/VikasanaIcon.svg" className="h-16 shrink-0" />
                <p className="text-white font-monument text-3xl">VIKASANA</p>
            </div>
            <nav
                className={`flex max-sm:flex-col max-sm:absolute max-sm:p-5 rounded-sm z-40 right-2 -bottom-[180%] bg-black items-center text-xl max-sm:space-y-2 space-x-[3vw] overflow-x-auto custom-scrollbar ${
                    !toggleMenu
                        ? "max-sm:-z-10 max-sm:opacity-0 max-sm:my-0"
                        : "max-sm:my-2 opacity-100"
                } transition-all duration-300 ease-linear`}
            >
                <a href="#home">
                    <p>Home</p>
                </a>
                <a href="#about">
                    <p>About</p>
                </a>
                <a href="#portfolio">
                    <p>Projects</p>
                </a>
                <a href="#teams">
                    <p>Team</p>
                </a>
                <a href="#contact">
                    <p>Contact</p>
                </a>
                <button className="bg-white rounded-xl px-6 py-2 hover:opacity-95 active:opacity-85 transition-opacity duration-300">
                    <span className="text-black font-extrabold">Register</span>
                </button>
            </nav>
            <button
                className="sm:hidden"
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                <MenuIcon className="border p-1 sm:hidden shrink-0" />
            </button>
        </div>
    );
}

export default NavBar;
