import img1 from "../assets/Top up credit-bro 1.png"
import img2 from "../assets/Online transactions-rafiki 1.png"
import aeroIcon from "../assets/.png"
import animation1 from '../assets/animation/Animation 1 (1).json';
import animation2 from '../assets/animation/Animation 2 (2).json';
import Lottie from "lottie-react";

const About = () => {

    return (
        <div className="bg-[#F4F2F2] font-Space_Grotesk md:px-10 px-4 ">
            <div className="max-w-[1160px] mx-auto py-[50px] md:py-[100px]">
                <div className="flex flex-col-reverse md:flex-row  items-center md:gap-5 lg:gap-[132px]">
                    <div   data-aos="fade-up" data-aos-duration="1000" className="flex-1 my-[50px] md:my-[50px]">
                        <h1 className="text-[#272932] font-bold text-2xl md:text-[30px] lg:text-[36px] md:leading-tight">Seamless Payment Processing: No Freezes, Low Fees, Pro Support</h1>
                        <div className="flex gap-3 items-center pt-[30px] pb-[15px]">
                            <img className="w-5" src={aeroIcon} alt="" />
                            <h4 className="text-[#272932] text-[16px] font-medium">3-Day Approval & Setup:</h4>
                        </div>
                        <p className="text-[12px]">Get Set Up in 3 Days: Hassle-Free & Lightning Fast! Time is money, so we speed up your setup process. Start transacting in no time and keep your business flowing smoothly!</p>
                        <div className="flex gap-3 items-center pt-[30px] pb-[15px]">
                            <img className="w-5" src={aeroIcon} alt="" />
                            <h4 className="text-[#272932] text-[16px] font-medium">Lowest In Industry Fees:</h4>
                        </div>
                        <p className="text-[12px]">Secure a lowest-in-industry processing fee through our private merchant network. Stop being bled dry from overpriced processing fees and put more profit back in your pocket.</p>
                        <div className="flex gap-3 items-center pt-[30px] pb-[15px]">
                            <img className="w-5" src={aeroIcon} alt="" />
                            <h4 className="text-[#272932] text-[16px] font-medium">24/hr POS Payouts:</h4>
                        </div>
                        <p className="text-[12px]">Say goodbye to holding your breath over frozen funds! With our lightning-fast 12-24 hour payouts, your cash flow stays flowing, hassle-free!</p>
                    </div>
                    <div   data-aos="fade-up" data-aos-duration="1000" className="lg:w-[445px] lg:h-[445px] md:w-[400px] bg-white p-14 rounded-[36px]  md:my-0">
                    <Lottie animationData={animation1} autoplay={true} loop={true}></Lottie>
                    </div>
                </div>
                <div className="md:flex items-center md:gap-8 lg:gap-[132px] md:pt-[150px] md:pb-[100px]">
                    <div data-aos="fade-up" data-aos-duration="1000" className=" bg-white rounded-[36px]">
                    <Lottie animationData={animation2} autoplay={true} loop={true}></Lottie>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="flex-1 my-[50px] md:my-0">
                        <h1 className="text-[#272932] font-bold text-2xl md:text-[30px] lg:text-[36px] md:leading-tight">Say hello to real support! Get a dedicated account rep for direct, anytime assistance.</h1>
                        <div className="flex gap-3 items-center pt-[30px] pb-[15px]">
                            <img className="w-5" src={aeroIcon} alt="" />
                            <h4 className="text-[#272932] text-[16px] font-medium">Personal Account Rep:</h4>
                        </div>
                        <p className="text-[12px]">Tired of reaching out to your current processors “Support Team” and getting the cold shoulder? Want to actually be able to talk to the people in control of your money? Get a dedicated account rep that you can call directly at anytime to resolve issues, or answer your questions.</p>
                        <div className="flex gap-3 items-center pt-[30px] pb-[15px]">
                            <img className="w-5" src={aeroIcon} alt="" />
                            <h4 className="text-[#272932] text-[16px] font-medium">Chargeback Protection:</h4>
                        </div>
                        <p className="text-[12px]">Secure a lowest-in-industry processing fee through our private merchant network. Stop being bled dry from overpriced processing fees and put more profit back in your pocket.</p>
                        <div className="flex gap-3 items-center pt-[30px] pb-[15px]">
                            <img className="w-5" src={aeroIcon} alt="" />
                            <h4 className="text-[#272932] text-[16px] font-medium">Stable Accounts:</h4>
                        </div>
                        <p className="text-[12px]">Say goodbye to holding your breath over frozen funds! With our lightning-fast 12-24 hour payouts, your cash flow stays flowing, hassle-free!</p>
                    </div>

                </div>
                <div className="relative flex w-full max-w-[506px] mx-auto">
                    <input style={{boxShadow: " 0px 8px 22px 0px rgba(20, 77, 138, 0.12)", outline: 'none'}} className="rounded-full w-[506px] md:h-[56px] py-4 md:py-0 pl-[15px] md:pl-6" placeholder="Your mail address...." type="email" />
                    <button className="!absolute right-1 top-1 rounded-full px-3 py-3 text-white md:py-3 md:px-8 bg-[#1E4FFD]  font-bold">Connect now!</button>
                </div>
            </div>
        </div>
    );
};

export default About;