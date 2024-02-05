const Footer = () => {
    return (
        <div className=" bg-[#272932] px-4 md:py-10 font-Space_Grotesk">
            <div className="md:flex justify-center items-center max-w-[1120px] mx-auto py-10 md:py-12 gap-10 lg:gap-32">
                <div>
                    <h1 className="text-4xl font-bold text-white pb-6 md:pb-11 max-w-[350px]">Unlock your payments potential today</h1>
                    <a href="#contact"><button className="bg-[#1E4FFD] px-[30px] py-[18px] mb-10 md:mb-12  text-white rounded-full font-bold text-[16px]">Talk To Our Team</button></a>
                </div>
                <div className="flex-1 space-y-4 md:space-y-6">
                    <p className="text-white font-semibold text-[23px] lg:text-2xl text-center">Make your payment systems empower your business, not burden it.</p>
                    <p className="text-white text-center font-bold underline"><a href="https://northsummitpayments.com/" target="_blank" rel="noreferrer" >northsummitpayments.com</a></p>
                    <p className="text-white text-xs text-center">Pinnacle Payments Inc. Operates under the DBA name of North Summit Payments. North Summit Payments is a registered agent of First Data Canada Ltd and CardConnect (a First Data Company). All trade marks, service marks and trade names used in this material are the property of their respective owners.
                    </p>
                    <p className="text-white text-center">© 2024 North Summit Payments and Consulting</p>
                </div>

            </div>

        </div>
    );
};

export default Footer;