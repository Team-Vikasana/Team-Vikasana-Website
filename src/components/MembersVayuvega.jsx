import React from "react";
import FoundingMembersCard from "./FoundingMembersCard";

export default function MembersOnyx({ team }) {
    
    return (
        <section className="mt-10">
            <div className="w-full flex flex-wrap justify-around  px-4 gap-x-2 gap-y-4">
                {team.map((item, index) => (
                    <FoundingMembersCard
                        key={index}
                        name={item.name}
                        src={item.image_url}
                        title={item.title}
                        linkedin={item.linkedin}
                        github={item.github}
                    />
                ))}
            </div>
        </section>
    );
}