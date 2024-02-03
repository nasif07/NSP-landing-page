import img1 from "../assets/Top up credit-bro 1.png"
import img2 from "../assets/Online transactions-rafiki 1.png"
import aeroIcon from "../assets/.png"
import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

const About = () => {
    const [email, setEmail] = useState("");
    const onChange = ({ target }) => setEmail(target.value);

    return (
        <div className="bg-[#F4F2F2] font-Space_Grotesk">
            <div className="max-w-[1120px] mx-auto py-[100px]">
                <div className="flex items-center gap-[132px]">
                    <div className="flex-1">
                        <h1 className="text-[#272932] font-bold text-[36px]">Seamless Payment Processing: No Freezes, Low Fees, Pro Support</h1>
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
                    <div className="w-[445px] h-[445px] bg-white p-14 rounded-[36px]">
                        <img className="h-[374px] w-[374px]" src={img1} alt="" />
                    </div>
                </div>
                <div className="flex items-center gap-[132px] pt-[150px] pb-[100px]">
                    <div className=" bg-white rounded-[36px]">
                        <img className="h-[458px] w-[458px]" src={img2} alt="" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-[#272932] font-bold text-[36px]">Say hello to real support! Get a dedicated account rep for direct, anytime assistance.</h1>
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
                <div className="relative flex w-full max-w-[24rem] mx-auto">
                    <Input
                        type="email"
                        label="Your mail address...."
                        value={email}
                        onChange={onChange}
                        className="pr-20 rounded-full"
                        containerProps={{
                            className: " rounded-full",
                        }}
                    />
                    <Button
                        size="sm"
                        color={email ? "gray" : "blue-gray"}
                        disabled={!email}
                        className="!absolute right-1 top-1 rounded"
                    >
                        Invite
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default About;