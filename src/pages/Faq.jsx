import { useState } from "react";
import {
    Accordion,
    AccordionBody,
} from "@material-tailwind/react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
const Faq = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="py-[50px] md:py-[100px] max-w-[1160px] mx-auto font-Space_Grotesk px-4 md:px-10">
            <div className="md:flex gap-10 lg:gap-20">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-[#1E4FFD] text-[20px]">FAQ</p>
                    <h1 className="text-4xl font-bold text-[#272932] pt-5 pb-11 lg:max-w-[500px]">We imagined some of your questions!</h1>
                    <a href="#contact"><button style={{ boxShadow: "0px 8px 22px 0px rgba(20, 77, 138, 0.30)" }} className="text-[#1E4FFD] font-bold bg-white px-[30px] py-[18px] rounded-full border-[#1E4FFD] border-[1px] mb-12 md:mb-0  hover:scale-105 duration-300">Get connected now!</button></a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Accordion className="bg-[#F4F2F2] rounded-[20px] mb-6" open={open === 1}>
                        <div className="flex items-center justify-between cursor-pointer px-[30px] py-[26px]" onClick={() => handleOpen(1)}>
                            <a className="text-lg font-medium text-[#272932]">What sets North Summit Payments apart from other payment processors?</a>
                            <div>
                                {open === 1 ? <FaAngleUp className="text-2xl" /> : <FaAngleDown className="!text-2xl" />}
                            </div>
                        </div>
                        <AccordionBody className="px-[30px] pb-[30px]">
                            "North Summit Payments stands out with the lowest processing fees in the industry, rapid 24/hr POS payouts, personalized account management, robust chargeback protection, and stable, reliable merchant accounts."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-[20px] mb-6" open={open === 2}>
                        <div className="flex items-center justify-between px-[30px] py-[26px] cursor-pointer" onClick={() => handleOpen(2)}>
                            <h2 className="text-lg font-medium">How quickly can I get approved with North Summit Payments?</h2>
                            <div>
                            {open === 2 ? <FaAngleUp className="text-2xl" /> : <FaAngleDown className="text-2xl" />}
                            </div>
                        </div>
                        <AccordionBody className="px-[30px] pb-[30px]">
                            "We offer a swift 3-day approval process, ensuring you can start processing transactions with minimal delay."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-[20px] mb-6" open={open === 3}>
                        <div open={open === 3} className="flex items-center justify-between cursor-pointer px-[30px] py-[26px]" onClick={() => handleOpen(3)}>
                            <h2 className="text-lg font-medium">Will I get a dedicated representative for my account?</h2>
                            <div>
                            {open === 3 ? <FaAngleUp className="text-2xl" /> : <FaAngleDown className="text-2xl" />}
                            </div>
                        </div>
                        <AccordionBody className="px-[30px] pb-[30px]">
                            "Absolutely! Each client is paired with a personal account representative for tailored, responsive service."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-[20px] mb-6" open={open === 4}>
                        <div open={open === 4} className="flex items-center justify-between px-[30px] py-[26px] cursor-pointer" onClick={() => handleOpen(4)}>
                            <h2 className="text-lg font-medium">Can North Summit Payments help with chargebacks?</h2>
                            <div>
                                {open === 4 ? <FaAngleUp className="text-2xl" /> : <FaAngleDown className="text-2xl" />}
                            </div>
                        </div>
                        <AccordionBody className="px-[30px] pb-[30px]">
                            "Yes, we provide comprehensive chargeback protection to minimize disputes and assist efficiently when they occur."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-[20px] mb-6" open={open === 5}>
                        <div open={open === 5} className="flex items-center justify-between px-[30px] py-[26px] cursor-pointer" onClick={() => handleOpen(5)}>
                            <h2 className="text-lg font-medium pr-2">Are the lower processing fees accompanied by hidden charges?</h2>
                            <div>
                            {open === 5 ? <FaAngleUp className="text-2xl" /> : <FaAngleDown className="text-2xl" />}
                            </div>
                        </div>
                        <AccordionBody className="px-[30px] pb-[30px]">
                            "No, we pride ourselves on transparency. Our low fees are straightforward, with no hidden costs."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-[20px] mb-6" open={open === 6}>
                        <div open={open === 6} className="flex items-center justify-between px-[30px] py-[26px] cursor-pointer" onClick={() => handleOpen(6)}>
                            <h2 className="text-lg font-medium">How reliable are your merchant accounts?</h2>
                            <div>
                            {open === 6 ? <FaAngleUp className="text-2xl" /> : <FaAngleDown className="text-2xl" />}
                            </div>
                        </div>
                        <AccordionBody className="px-[30px] pb-[30px]">
                            "Our accounts are known for their stability, avoiding the common issues of freezes and shutdowns associated with many processors."
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="bg-[#F4F2F2] rounded-[20px] mb-6" open={open === 7}>
                        <div open={open === 7} className="flex items-center justify-between px-[30px] py-[26px] cursor-pointer" onClick={() => handleOpen(7)}>
                            <h2 className="text-lg font-medium">How do I start with North Summit Payments?
                            </h2>
                            <div>
                            {open === 7 ? <FaAngleUp className="text-2xl" /> : <FaAngleDown className="text-2xl" />}
                            </div>
                        </div>
                        <AccordionBody className="px-[30px] pb-[30px]">
                            "Starting is easy! Just click 'Apply Now' to book a call with our team and begin the process."
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;