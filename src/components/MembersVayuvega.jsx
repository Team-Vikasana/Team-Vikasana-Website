import React from "react";
import FoundingMembersCard from "./FoundingMembersCard";

export default function MembersOnyx() {
    const items = [
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
            <div className="w-full grid grid-cols-1 sm:grid-cols-5 gap-[40px]">
				{items.map((item, index) => (
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