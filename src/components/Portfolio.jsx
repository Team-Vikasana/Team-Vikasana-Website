import React, { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import supabase from "../utils/supabase";

// Define placeholder image
const placeholderImage = "/images/VikasanaLogo.png";

const Portfolio = () => {
    const [events, setEvents] = useState([]);
    const [projects, setProjects] = useState([]);
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch events
                let { data: eventData, error: eventError } = await supabase
                    .from("events")
                    .select("*")
                    .order("id", { ascending: false })
                    .limit(7);
                if (eventError) throw eventError;
                console.log(eventData)
                setEvents(fillWithPlaceholders(eventData, 7));

                // Fetch projects
                let { data: projectData, error: projectError } = await supabase
                    .from("projects")
                    .select("*")
                    .order("id", { ascending: false })
                    .limit(7);
                if (projectError) throw projectError;
                setProjects(fillWithPlaceholders(projectData, 7));

                // Fetch workshops
                let { data: workshopData, error: workshopError } = await supabase
                    .from("workshops")
                    .select("*")
                    .order("id", { ascending: false })
                    .limit(7);
                if (workshopError) throw workshopError;
                setWorkshops(fillWithPlaceholders(workshopData, 7));
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        }

        fetchData();
    }, []);

    const fillWithPlaceholders = (data, maxItems) => {
        const filledData = [...data];
        while (filledData.length < maxItems) {
            filledData.push({
                id: `placeholder_${filledData.length}`,
                img_url: placeholderImage,
                event: "Placeholder",
            });
        }
        return filledData;
    };

    return (
        <section
            id="portfolio"
            className="bg-black min-w-screen min-h-screen h-fit py-20 text-white text-center flex flex-col items-center space-y-10"
        >
            <p className="font-tacticsans pb-16 text-5xl sm:text-6xl md:text-7xl text-white/80">
                OUR PORTFOLIO
            </p>
            <Events eventlist={events} />
            <Workshops workshoplist={workshops} />
            <Projects projectlist={projects} />
        </section>
    );
};

const Events = ({ eventlist }) => {
    return (
        <div className="w-full md:h-fit flex flex-col md:relative align-middle overflow-hidden">
            <div className="md:absolute flex flex-col md:flex-row justify-between items-center h-full w-full md:w-[26rem] z-10 pb-4 md:py-0 md:px-8 md:bg-gradient-to-r from-black from-[99%] text-justify md:text-left">
                <div className="w-72">
                    <p className="text-3xl py-3 md:px-2">Our Events</p>
                    <p className="text-white/30 text-2xl">Witness some of our events</p>
                </div>
                <div className="w-1 h-[95%] hidden md:block blur-sm shadow-md shadow-white bg-white/90"></div>
            </div>
            <div className="flex w-max h-fit py-4 items-center animate-loop-scroll hover:paused">
                <div className="flex mx-8 space-x-8">
                    {eventlist.map((card, index) => (
                        <PortfolioCard key={index} imageUrl={card.img_url} />
                    ))}
                    {eventlist.map((card, index) => (
                        <PortfolioCard key={index} imageUrl={card.img_url} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Workshops = ({ workshoplist }) => {
    return (
        <div className="w-full h-fit overflow-hidden group">
            <div className="flex w-max h-fit py-4 items-center animate-reverse-loop-scroll group-hover:paused">
                <div className="flex mx-8 space-x-8">
                    {workshoplist.map((card, index) => (
                        <PortfolioCard key={index} imageUrl={card.img_url} />
                    ))}
                    {workshoplist.map((card, index) => (
                        <PortfolioCard key={index} imageUrl={card.img_url} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = ({ projectlist }) => {
    return (
        <div className="w-full h-fit flex flex-col-reverse md:relative overflow-hidden">
            <div className="md:absolute flex flex-col md:flex-row justify-between items-center h-full w-full md:w-[26rem] z-10 py-2 md:py-0 md:px-8 md:right-0 md:bg-gradient-to-l bg-gradient-to-b from-black from-[99%] text-justify md:text-left">
                <div className="w-1 h-[95%] hidden md:block blur-sm shadow-md shadow-white bg-white/90"></div>
                <div className="w-72">
                    <p className="text-3xl py-3 md:px-2">Our Projects</p>
                    <p className="text-white/30 text-2xl">Check out our impactful projects</p>
                </div>
            </div>
            <div className="flex w-max h-fit py-4 animate-loop-scroll hover:paused">
                <div className="flex mx-8 space-x-8">
                    {projectlist.map((card, index) => (
                        <PortfolioCard key={index} imageUrl={card.img_url} />
                    ))}
                    {projectlist.map((card, index) => (
                        <PortfolioCard key={index} imageUrl={card.img_url} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
