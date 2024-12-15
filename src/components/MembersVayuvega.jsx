import React from "react";
import FoundingMembersCard from "./FoundingMembersCard";

export default function MembersOnyx({ team }) {
    const items = [
        {
            name: "Dinesh T",
            title: "Project Manager",
            src: "/src/assets/onyx/Dinesh T 1.png",
            division: "Vayuvega Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
        {
            name: "Laya Shree",
            title: "Head of Onyx",
            src: "/images/insta.png",
            division: "Vayuvega Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
        {
            name: "Laya Shree",
            title: "Head of Onyx",
            src: "/images/insta.png",
            division: "Vayuvega Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
        {
            name: "Laya Shree",
            title: "Head of Onyx",
            src: "/images/insta.png",
            division: "Vayuvega Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
        {
            name: "Laya Shree",
            title: "Head of Onyx",
            src: "/images/insta.png",
            division: "Vayuvega Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
        {
            name: "Laya Shree",
            title: "Head of Onyx",
            src: "/images/insta.png",
            division: "Vayuvega Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
    ];
    return (
        <section className="mt-10">
            <div className="w-full flex flex-wrap justify-around  px-4 gap-x-2 gap-y-4">
                {team.map((item, index) => (
                    <FoundingMembersCard
                        key={index}
                        name={item.name}
                        src={item.src}
                        title={item.title}
                        division={item.division}
                        linkedin={item.linkedin}
                        github={item.github}
                    />
                ))}
            </div>
        </section>
    );
}