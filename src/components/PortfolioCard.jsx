import React from "react";

const PortfolioCard = ({ imageUrl, link }) => {

    return (
        <a
            href={link}
            className="w-[315px] h-[208px] bg-white/20 rounded-xl hover:scale-105 duration-300 transition-all delay-150 ease-in-out">
            <img
                loading="lazy"
                src={imageUrl}
                className="min-h-0 max-h-full object-cover"
                alt="Event image"
            />
        </a>
    );
};

export default PortfolioCard;
