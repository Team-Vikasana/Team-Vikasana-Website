import React from "react";

const PortfolioCard = ({ imageUrl, link }) => {

    return (
        <a
            href={link}
            className="w-[315px] aspect-[3/2] bg-white/10 rounded-xl hover:scale-105 duration-300 transition-all delay-150 ease-in-out">
            <img
                loading="lazy"
                src={imageUrl}
                className="w-full h-full mx-auto object-fill"
                alt="Event image"
            />
        </a>
    );
};

export default PortfolioCard;
