import {Linkedin,Twitter} from 'lucide-react'
import "./style.css"

const SocialMedia = () => {
    return (
        <div className='bg-black text-white font-altone flex justify-centre items-center flex-col p-[20px] sm:p-[72px]'>
        <div className='flex items-center flex-col'>
        <h1 className='font-tacticsans text-[45px] sm:text-[75px]'>SOICAL MEDIA</h1>
        <p className='text-[#AFAFAF] text-[20px] sm:text-[35px] text-center'>Check out our social media handles to stay updated on the latest
            <br></br> innovations, projects, and events at <i>Vikasana!</i>.</p>
        </div>
        <div className='grid grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 gap-[16px] m-[21px] sm:m-[42px]'>
        <div className='row-span-2 col-span-2 border border-[rgba(255,255,255,0.3)] rounded-[20.69px] bg-[#1c1b1b]'><img src="./../../public/images/insta.png" className='opacity-50 object-cover w-full h-full' alt="insta" /></div>
    <div className='border border-[rgba(255,255,255,0.3)] rounded-[20.69px] bg-[#141414] flex justify-center items-center  flex-col'>
        <Linkedin className='icon'/>
        <span className='text-[10px] sm:text-[30px]'>@Vikasana</span>
    </div>
    <div className='border border-[rgba(255,255,255,0.3)] rounded-[20.69px] bg-[#141414] flex justify-center items-center  flex-col'>
            <Twitter className='icon'/>
        <span className='text-[10px] sm:text-[30px]'>@Vikasana</span>
    </div>
    <div className='col-span-2 border border-[rgba(255,255,255,0.3)] rounded-[20.69px] bg-[#141414] flex justify-center items-center  flex-col'>
        <p className='text-[30px]'>Blog Website</p>
    </div>
        </div>
        </div>
    )
}

export default SocialMedia;