import React, { useEffect, useState } from 'react';
import MembersVayuvega from './MembersVayuvega';
import supabase from "../utils/supabase"


export default function TeamsComp() {
    const [toggleState, setToggleState] = useState(1);
    const [onyx_members, setOnyx_members] = useState([]);
    const [hexa_members, setHexa_members] = useState([]);
    const [imaginex_members, setImaginex_members] = useState([]);
    const [vayu_members, setVayu_members] = useState([]);
    const [robo_members, setRobo_members] = useState([]);
    const [rnd_members, setRnd_members] = useState([]);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(()=>{
        async function fetchData() {
            try{
                let { data: onyxData, error:onyxError } = await supabase
                .from('onyx_members')
                .select('*')
                if(onyxError) throw onyxError;
                setOnyx_members(onyxData);
                

                let { data: hexaData, error:hexaError } = await supabase
                .from('hexa_members')
                .select('*')
                if(hexaError) throw hexaError;
                setHexa_members(hexaData);
                

                let { data: roboData, error:roboError } = await supabase
                .from('robotics_members')
                .select('*')
                if(roboError) throw roboError;
                setRobo_members(roboData);
                

                let { data: vayuData, error:vayuError } = await supabase
                .from('vaayuvega_members')
                .select('*')
                if(vayuError) throw vayuError;
                setVayu_members(vayuData);
                

                let { data: imaginexData, error:imaginexError } = await supabase
                .from('imaginex_members')
                .select('*')
                if(imaginexError) throw imaginexError;
                setImaginex_members(imaginexData);
                

                let { data: rndData, error:rndError } = await supabase
                .from('research_and_dev_members')
                .select('*')
                if(rndError) throw rndError;
                setRnd_members(rndData);
                

            }
            catch(error) {
                console.error("Error fetching details:", error);
            }
            
            
        }
        fetchData();
    },[]);



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

            <div className='px-10'>
            <div className={` ${toggleState === 1 ? "flex" : "hidden"}`}>
                <MembersVayuvega
                    team={hexa_members.concat(
                        onyx_members,
                        vayu_members,
                        imaginex_members,
                        rnd_members,
                        robo_members
                    )}
                />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 2 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={vayu_members} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 3 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={rnd_members} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 4 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={hexa_members} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 5 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={robo_members} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 6 ? "flex" : "hidden"
                }`}
            >
                <MembersVayuvega team={onyx_members} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 7 ? "flex" : "hidden"
                }`}
                >
                <MembersVayuvega team={onyx_members} />
            </div>
            <div
                className={`items-center justify-center ${
                    toggleState === 8 ? "flex" : "hidden"
                }`}
                >
                <MembersVayuvega team={imaginex_members} />
            </div>
            </div>
        </div>
    );
}