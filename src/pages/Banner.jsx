import logo from "/Logo.svg"
import banner from "../assets/bannerimage.png"
import Marquee from "react-fast-marquee";
import microsoft from "../assets/logo/microsoft.svg"
import sunwing from "../assets/logo/sunwing.svg"
import tommy from "../assets/logo/tommy.svg"
import stateFarm from "../assets/logo/stateFarm.svg"
import vans from "../assets/logo/vans.svg"
import beyond from "../assets/logo/beyond.svg"
import swar from "../assets/logo/swar.svg"

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
            <div className="min-h-screen font-Space_Grotesk md:px-10 lg:px-0">
                <div className="max-w-[1200px] px-4 mx-auto md:flex md:justify-between pt-[30px] pb-8 md:pb-[50px]">
                    <div className="flex justify-center items-center pb-8 md:pb-0">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex justify-center items-center gap-[11px]">
                        <p className="text-[#000] text-[14px] font-light">yourmail@mail.com</p>
                        <a href="#contact"><button style={myInlineStyles} className="px-[22px] text-[#004E98] py-[10px] font-bold text-[12px]">Accept payments today!</button></a>
                    </div>
                </div>
                <div className="text-center max-w-[933px] mx-auto  px-4">
                    <p className="text-[#004E98] font-light text-center mx-auto w-[210px] md:w-full">To All Business Owners Proccesesing Credit Cards:</p>
                    <h1 className="text-[#272932] text-[25px] font-bold md:text-[46px] py-[10px] leading-none px-4 md:px-0">Your current payment processor may be a ticking time bomb for your business! </h1>
                    <p className="text-[#000] font-light text-[12px] max-w-[544px] mx-auto">Watch the video below to find out why billion dollar companies around the world use North Summit Payments to empower their payment systems and protect their businesses.</p>
                </div>
                <div className="flex items-center px-4 justify-center pt-3 md:pt-[50px]">
                    <img className="md:w-[768px] md:h-[432px] rounded-2xl" src={banner} alt="" />
                </div>
                <div className=" md:flex justify-center items-center pt-6 md:py-12">
                    <div className="flex justify-center">
                        <a href="#contact"><button style={shadow} className="bg-[#1E4FFD] px-5 py-3 md:px-[30px] md:py-[18px] text-white rounded-full font-bold text-[16px] md:ml-[142px]">Talk to our team now!</button></a>
                    </div>
                    <div className="flex justify-center pt-4 md:pt-0">
                        <button className="text-[#1E4FFD] md:ml-4 underline">(Instant support)</button>
                    </div>
                </div>
                <div className="md:py-20 py-10 lg:px-6">
                    <Marquee gradient="true" gradientWidth={60} speed={30}>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={microsoft} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={sunwing} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={tommy} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={stateFarm} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={vans} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={beyond} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={swar} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={microsoft} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={sunwing} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={tommy} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={stateFarm} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={vans} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={beyond} alt="" />
                        </div>
                        <div className="md:pr-[100px] pr-[30px]">
                            <img src={swar} alt="" />
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default Banner;