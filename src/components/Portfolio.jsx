import PortfolioCard from "./PortfolioCard";

const eventlist = new Array(7).fill({imageUrl: "/images/logo.svg"});
const workshoplist = new Array(7).fill({imageUrl: "/images/logo.svg"});
const projectlist = new Array(7).fill({imageUrl: "/images/logo.svg"});

const Events = () => {
    return (
        <div className="w-full md:h-fit flex flex-col md:relative align-middle overflow-hidden">
            <div className="md:absolute flex flex-col md:flex-row justify-between items-center h-full w-full md:w-[26rem] z-10 pb-4 md:py-0 md:px-8 md:bg-gradient-to-r from-black from-[99%] text-justify md:text-left">
                <div className="w-72">
                    <p className="text-3xl py-3 md:px-2">Our Events</p>
                    <p className="text-white/30 text-2xl">witness some of our events and yeah some more things</p>
                </div>
                <div className="w-1 h-[95%] hidden md:block blur-sm shadow-md shadow-white bg-white/90"></div>
            </div>
            <div className="flex w-max h-fit py-4 items-center animate-loop-scroll hover:paused">
                {/* First set of cards */}
                <div className="flex mx-8 space-x-8">
                    {eventlist.map((card, index) => {
                        return <PortfolioCard key={index} imageUrl={card.imageUrl} />
                    })}
                </div>

                {/* Second set of cards (identical to the first) */}
                <div className="flex space-x-8">
                    {eventlist.map((card, index) => {
                        return <PortfolioCard key={index} imageUrl={card.imageUrl} />
                    })}
                </div>
            </div>
        </div>
    );
}
const Workshops = () => {
    return (
        <div className="w-full h-fit overflow-hidden group">
                <div className="flex w-max h-fit py-4 items-center animate-reverse-loop-scroll group-hover:paused">
                    {/* First set of cards */}
                    <div className="flex mx-8 space-x-8">
                        {workshoplist.map((card, index) => {
                            return <PortfolioCard key={index} imageUrl={card.imageUrl} />
                        })}
                    </div>

                    {/* Second set of cards (identical to the first) */}
                    <div className="flex space-x-8">
                        {workshoplist.map((card, index) => {
                            return <PortfolioCard key={index} imageUrl={card.imageUrl} />
                        })}
                    </div>
                </div>
            </div>
    );
}
const Projects = () => {
    return (
        <div className="w-full h-fit flex flex-col-reverse md:relative overflow-hidden">
            <div className="md:absolute flex flex-col md:flex-row justify-between items-center h-full w-full md:w-[26rem] z-10 py-2 md:py-0 md:px-8 md:right-0 md:bg-gradient-to-l bg-gradient-to-b from-black from-[99%] text-justify md:text-left">
                <div className="w-1 h-[95%] hidden md:block blur-sm shadow-md shadow-white bg-white/90"></div>
                <div className="w-72">
                <p className="text-3xl py-3 md:px-2">Our Projects</p>
                <p className="text-white/30 text-2xl">witness some of our works that helped us grow and yeah some more things</p>
                </div>
            </div>
            <div className="flex w-max h-fit py-4 animate-loop-scroll hover:paused">
                {/* First set of cards */}
                <div className="flex mx-8 space-x-8">
                    {projectlist.map((card, index) => {
                        return <PortfolioCard key={index} imageUrl={card.imageUrl} />
                    })}
                </div>

                {/* Second set of cards (identical to the first) */}
                <div className="flex space-x-8">
                    {projectlist.map((card, index) => {
                        return <PortfolioCard key={index} imageUrl={card.imageUrl} />
                    })}
                </div>
            </div>
        </div>
    );
}

const Portfolio = () => {
    return (
        <section className="bg-black min-w-screen min-h-screen h-fit py-20 text-white text-center flex flex-col items-center space-y-10">
            <p className="font-tacticsans pb-16 text-5xl sm:text-6xl md:text-7xl text-white/80">OUR PORTFOLIO</p>
            <Events />
            <Workshops />
            <Projects />
        </section>
    );
};

export default Portfolio;
