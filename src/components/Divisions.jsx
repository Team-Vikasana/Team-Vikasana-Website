import React from "react";

const divs = [
    {
        title: "Onyx",
        subtitle: "The coding division",
        desc: "Office ipsum you must be muted. Idea lunch wanted customer this discussions ladder...",
        link: "",
        color: "#7AE0F5",
        img: "/images/onyx.png",
    },
    {
        title: "0xHexa",
        subtitle: "The cybersecurity division",
        desc: "Office ipsum you must be muted. Idea lunch wanted customer this discussions ladder...",
        link: "",
        color: "#88CD01",
        img: "/images/hexa.png",
    },
    {
        title: "Vayuvega",
        subtitle: "The aerospace division",
        desc: "Office ipsum you must be muted. Idea lunch wanted customer this discussions ladder...",
        link: "",
        color: "#C91200",
        img: "/images/vayu.png",
    },
    {
        title: "Robotics",
        subtitle: "The robotics division",
        desc: "Office ipsum you must be muted. Idea lunch wanted customer this discussions ladder...",
        link: "",
        color: "#9A4C03",
        img: "/images/robo.png",
    },
];

const Teams = () => {
    return divs.map((div, index) => {
        return (
            <DivCard
                key={index}
                title={div.title}
                subtitle={div.subtitle}
                desc={div.desc}
                link={div.link}
                color={div.color}
                img={div.img}
            />
        );
    });
};

const DivCard = ({ title, subtitle, desc, link, color, img }) => {

    const renderTitle = (title) => {
        const parts = title.split(/(\d+)/);
        return parts.map((part, index) => (
            <span key={index} className={/\d/.test(part) ? "font-poppins font-bold" : ""}>
                {part}
            </span>
        ));
    };

    return (
        <>
            <div className="bg-white snap-center sm:snap-start snap-always relative shrink-0 h-fit w-fit object-contain rounded-2xl left-0">
                <div
                    className={` absolute left-0 right-0 rounded-xl w-full h-full flex items-center text-left font-altone text-[#1E1E1E] opacity-0 hover:opacity-100 transition-opacity duration-300`}
                    style={{ background: `linear-gradient(to bottom, white, white, ${color})` }}
                >
                    <div className="mx-4">
                        <div className="pb-14 px-2">
                            <p className="font-extrabold text-2xl pb-1">
                                {renderTitle(title)}
                            </p>
                            <p className="text-sm">{subtitle}</p>
                        </div>
                        <div>
                            <p className="text-sm">{desc}</p>
                            <a href={link}>
                                <p className="text-xs">Learn more &#8594;</p>
                            </a>
                        </div>
                    </div>
                </div>
                <img src={img} className="h-96" />
            </div>
        </>
    );
};

const Divisions = () => {
    return (
        <>
            <section
                id="division"
                className="bg-black w-screen min-h-[70vh] h-fit py-20 text-white text-center flex flex-col items-center space-y-10"
            >
                <div className="font-altone text-[#afafaf] text-xl md:text-2xl">
                    <p className="font-tacticsans text-3xl md:text-4xl text-white">
                        OUR DIVISIONS
                    </p>
                    <p>Divided By Teams United By Goal...</p>
                    <p>Representing The Divisions Of Vikasana</p>
                </div>
                <div className="flex gap-x-8 overflow-x-scroll justify-around px-8 no-scrollbar scroll-smooth snap-x snap-mandatory">
                    <Teams />
                </div>
            </section>
        </>
    );
};

export default Divisions;