const Onyx = () => {
    return (
        <>
        <div className="bg-white snap-center sm:snap-start snap-always relative shrink-0 h-fit w-fit object-contain rounded-2xl left-0">
            <div className=" absolute left-0 right-0 rounded-xl w-full h-full flex items-center text-left font-altone text-[#1E1E1E] bg-gradient-to-b from-white via-white to-[#7AE0F5] opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="mx-4">
                    <div className="pb-14 px-2">
                        <p className="font-extrabold text-2xl pb-1">Onyx</p>
                        <p className="text-sm">The coding division</p>
                    </div>
                    <div>
                        <p className="text-sm">Office ipsum you must be muted. Idea lunch wanted customer this discussions ladder...</p>
                        <a href="" ><p className="text-xs">Learn more &#8594;</p></a>
                    </div>
                </div>
            </div>
            <img src="/images/onyx.png" className="h-96"/>
        </div>
        </>
    );
}
const Hexa = () => {
    return (
        <>
        <div className="bg-white snap-center sm:snap-start snap-always relative shrink-0 h-fit w-fit object-contain rounded-2xl left-0">
            <div className=" absolute left-0 right-0 rounded-xl w-full h-full flex items-center text-left font-altone text-[#1E1E1E] bg-gradient-to-b from-white via-white to-[#88CD01] opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="mx-4">
                    <div className="pb-14 px-2">
                        <p className="font-extrabold font-poppins text-2xl pb-1">0xHexa</p>
                        <p className="text-sm">The cybersecurity division</p>
                    </div>
                    <div>
                        <p className="text-sm">Office ipsum you must be muted. Idea lunch wanted customer this discussions ladder...</p>
                        <a href="" ><p className="text-xs">Learn more &#8594;</p></a>
                    </div>
                </div>
            </div>
            <img src="/images/hexa.png" className="h-96"/>
        </div>
        </>
    );
}
const Vayu = () => {
    return (
        <>
        <div className="bg-white snap-center sm:snap-start snap-always relative shrink-0 h-fit w-fit object-contain rounded-2xl left-0">
            <div className=" absolute left-0 right-0 rounded-xl w-full h-full flex items-center text-left font-altone text-[#1E1E1E] bg-gradient-to-b from-white via-white to-[#C91200] opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="mx-4">
                    <div className="pb-14 px-2">
                        <p className="font-extrabold text-2xl pb-1">Vayuvega</p>
                        <p className="text-sm">The aerospace division</p>
                    </div>
                    <div>
                        <p className="text-sm">Office ipsum you must be muted. Idea lunch wanted customer this discussions ladder...</p>
                        <a href="" ><p className="text-xs">Learn more &#8594;</p></a>
                    </div>
                </div>
            </div>
            <img src="/images/vayu.png" className="h-96"/>
        </div>
        </>
    );
}
const Robo = () => {
    return (
        <>
        <div className="bg-white snap-center sm:snap-start snap-always shrink-0 relative h-fit w-fit object-contain rounded-2xl left-0">
            <div className=" absolute left-0 right-0 rounded-xl w-full h-full flex items-center text-left font-altone text-[#1E1E1E] bg-gradient-to-b from-white via-white to-[#9A4C03] opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="mx-4">
                    <div className="pb-14 px-2">
                        <p className="font-extrabold text-2xl pb-1">Robotics</p>
                        <p className="text-sm">The robotics division</p>
                    </div>
                    <div>
                        <p className="text-sm">Office ipsum you must be muted. Idea lunch wanted customer this discussions ladder...</p>
                        <a href="" ><p className="text-xs">Learn more &#8594;</p></a>
                    </div>
                </div>
            </div>
            <img src="/images/robo.png" className="h-96"/>
        </div>
        </>
    );
}

const Divisions = () => {
    return (
        <>
        <section className="bg-black min-w-screen min-h-screen h-fit py-20 text-white text-center flex flex-col items-center space-y-10">
            <div className="font-altone text-[#afafaf] text-xl md:text-2xl">
                <p className="font-tacticsans text-3xl md:text-4xl text-white">OUR DIVISIONS</p>
                <p>Divided By Teams United By Goal...</p>
                <p>Representing The Divisions Of Vikasana</p>
            </div>
            <div className="flex gap-x-8 overflow-x-scroll justify-around px-8 no-scrollbar scroll-smooth snap-x snap-mandatory">

                <Onyx />
                <Hexa />
                <Vayu />
                <Robo />

            </div>
        </section>
        </>
    );
}

export default Divisions;