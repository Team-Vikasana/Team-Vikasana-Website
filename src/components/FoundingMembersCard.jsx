import React from "react";

export default function FoundingMembersCard({ src, name, title, linkedin, github }) {
	return (
        <div>
            <div className="w-[250px] h-[300px] rounded-[20px] border border-white relative group">
                <img
                    loading="lazy"
                    src={src}
                    className="w-full h-full object-cover rounded-[inherit]"
                />

                <div className="p-2 absolute bottom-2 right-2 left-2 rounded-[10px] text-white font-bold bg-[#9f5efa] opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <p>{name}</p>
                </div>
                <div className="p-2 absolute top-2 right-2 left-2 rounded-[10px] text-white font-bold bg-[#9f5efa] opacity-0 transform translate-y-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}
