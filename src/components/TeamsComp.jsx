import React, { useState } from 'react';
import MembersVayuvega from './MembersVayuvega';
import {
    HexaMembers,
    ImagineXMembers,
    OnyxMembers,
    ResearchAndDevMembers,
    RoboticsMembers,
    VayuvegaMembers,
} from "../assets/membersList";
export default function TeamsComp() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="flex flex-col items-center w-full pb-10 bg-black">
            <div className="w-full flex justify-around flex-wrap items-center gap-y-2 px-10 sm:px-0 text-[#9f5efa] text-[30px] font-altone font-bold">
                {/* <div className="w-full grid grid-cols-2 grid-rows-3 sm:grid-cols-8 sm:grid-rows-1 gap-[20px] content-center px-10 sm:px-[100px] text-[#9f5efa] text-[30px] font-altone font-bold"> */}
                <div
                    className={`py-[7px] w-40 flex justify-center items-center cursor-pointer border-2 border-white rounded-[15px] ${
                        toggleState === 1 ? "bg-white" : "bg-black"
                    }`}
                    onClick={() => {
                        toggleTab(1);
                    }}
                >
                    <b>All</b>
                </div>
                <div
                    className={`py-[7px] w-40 flex justify-center items-center cursor-pointer border-2 border-white rounded-[15px] ${
                        toggleState === 2 ? "bg-white" : "bg-black"
                    }`}
                    onClick={() => {
                        toggleTab(2);
                    }}
                >
                    <b>Vayuvega</b>
                </div>
                <div
                    className={`py-[7px] w-40 flex justify-center items-center cursor-pointer border-2 border-white rounded-[15px] ${
                        toggleState === 3 ? "bg-white" : "bg-black"
                    }`}
                    onClick={() => {
                        toggleTab(3);
                    }}
                >
                    <b>Research</b>
                </div>
                <div
                    className={`py-[7px] w-40 flex justify-center items-center cursor-pointer border-2 border-white rounded-[15px] ${
                        toggleState === 4 ? "bg-white" : "bg-black"
                    }`}
                    onClick={() => {
                        toggleTab(4);
                    }}
                >
                    <b>
                        <p>
                            <span className="font-poppins font-bold">0</span>
                            xHexa
                        </p>
                    </b>
                </div>
                <div
                    className={`py-[7px] w-40 flex justify-center items-center cursor-pointer border-2 border-white rounded-[15px] ${
                        toggleState === 5 ? "bg-white" : "bg-black"
                    }`}
                    onClick={() => {
                        toggleTab(5);
                    }}
                >
                    <b>Robotics</b>
                </div>
                <div
                    className={`py-[7px] w-40 flex justify-center items-center cursor-pointer border-2 border-white rounded-[15px] ${
                        toggleState === 6 ? "bg-white" : "bg-black"
                    }`}
                    onClick={() => {
                        toggleTab(6);
                    }}
                >
                    <b>Onyx</b>
                </div>
                <div
                    className={`py-[7px] w-40 flex justify-center items-center cursor-pointer border-2 border-white rounded-[15px] ${
                        toggleState === 7 ? "bg-white" : "bg-black"
                    }`}
                    onClick={() => {
                        toggleTab(7);
                    }}
                >
                    <b>OG</b>
                </div>
                <div
                    className={`py-[7px] w-40 flex justify-center items-center cursor-pointer border-2 border-white rounded-[15px] ${
                        toggleState === 8 ? "bg-white" : "bg-black"
                    }`}
                    onClick={() => {
                        toggleTab(8);
                    }}
                >
                    <b>ImagineX</b>
                </div>
            </div>
            <div className={` ${toggleState === 1 ? "flex" : "hidden"}`}>
                <MembersVayuvega
                    team={OnyxMembers.concat(
                        VayuvegaMembers,
                        ResearchAndDevMembers,
                        HexaMembers,
                        RoboticsMembers,
                        ImagineXMembers
                    )}
                />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 2 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={VayuvegaMembers} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 3 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={ResearchAndDevMembers} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 4 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={HexaMembers} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 5 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={RoboticsMembers} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 6 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={OnyxMembers} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 7 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={OnyxMembers} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 8 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={ImagineXMembers} />
            </div>
        </div>
    );
}