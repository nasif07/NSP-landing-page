import logo from "/Logo.svg"
import banner from "../assets/bannerimage.png"
import Marquee from "react-fast-marquee";
import marqueeImage from "../assets/Group 8.png";

const Banner = () => {
    const myInlineStyles = {
        borderRadius: '90px',
        border: '1px solid #004E98'
        // Add more CSS properties as needed
    };
    const shadow = {
        boxShadow: '0px 8px 22px 0px rgba(20, 77, 138, 0.30)'
    }
    return (
        <>
            <div className="min-h-screen font-Space_Grotesk">
                <div className="max-w-[1200px] mx-auto flex justify-between pt-[30px] pb-[50px]">
                    <img src={logo} alt="" />
                    <div className="flex justify-center items-center gap-[11px]">
                        <p className="text-[#000] text-[14px] font-light">yourmail@mail.com</p>
                        <button style={myInlineStyles} className="px-[22px] text-[#004E98] py-[10px] font-bold text-[12px]">Accept payments today!</button>
                    </div>
                </div>
                <div className="text-center max-w-[933px] mx-auto">
                    <p className="text-[#004E98] text-4 font-light text-center line-clamp-1 lea">To All Business Owners Proccesesing Credit Cards:</p>
                    <h1 className="text-[#272932] font-bold text-[46px] py-[10px] leading-none">Your current payment processor
                        may be a ticking time bomb for your business! </h1>
                    <p className="text-[#000] font-light text-[12px] max-w-[544px] mx-auto">Watch the video below to find out why billion dollar companies around the world use North Summit Payments to empower their payment systems and protect their businesses.</p>
                </div>
                <div className="flex items-center justify-center pt-[50px]">
                    <img className="w-[768px] h-[432px] rounded-2xl" src={banner} alt="" />
                </div>
                <div className=" flex justify-center items-center m-12">
                    <button style={shadow} className="bg-[#1E4FFD] px-[30px] py-[18px] text-white rounded-full font-bold text-[16px] ml-[142px]">Talk to our team now!</button>
                    <button className="text-[#1E4FFD] ml-4 underline">(Instant support)</button>
                </div>
                <div className="py-20">
                    <Marquee gradient="true" speed={30}>
                        <div className='px-3'>
                            <img className="pr-24" src={marqueeImage} alt="Nike" />
                        </div>
                        <div className='px-3'>
                            <img className="pr-24" src={marqueeImage} alt="Nike" />
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default Banner;