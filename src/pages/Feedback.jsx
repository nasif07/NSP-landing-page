import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import avatar from "../assets/image 3.png"
import icon from "../assets/”.svg"
const Feedback = () => {

    return (
        <div className="py-[50px] bg-white md:py-[100px] max-w-[1160px] mx-auto px-4 md:px-10  font-Space_Grotesk">
            <div className="md:flex lg:gap-20">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-[#1E4FFD] text-[20px]">Clients feedback</p>
                    <h1 className="text-4xl font-bold text-[#272932] pt-5 pb-11 max-w-[350px]">Still don’t believe us? Believe our clients!</h1>
                    <a href="#contact"><button style={{ boxShadow: '0px 8px 22px 0px rgba(20, 77, 138, 0.30)' }} className="bg-[#1E4FFD] px-[30px] py-[18px] mb-12  text-white rounded-full font-bold text-[16px]   hover:scale-105 duration-300">Ready to get started?</button></a>
                </div>
                <Swiper data-aos="fade-up" data-aos-duration="1000"
                    rewind={true}
                    navigation={true}
                    pagination={true}
                    modules={[Navigation]}
                    className="flex-1"
                >
                    <SwiperSlide className=' rounded-2xl'>
                        <div className='md:mx-[65px] lg:px-[50px] py-6 md:py-[50px] bg-[#F4F2F2] rounded-2xl relative min-h-[405px] md:min-h-[500px]'>
                            <div className='absolute top-6 right-6'>
                                <img className='w-[80px]' src={icon} alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img className=' rounded-full' src={avatar} alt="" />
                            </div>
                            <p className='text-[#272932] py-6 md:py-10 px-12 md:px-5 lg:px-0 max-w-[380px] mx-auto text-center md:text-center text-[14px] leading-tight md:text-base md:leading-[24px]'>“We have been able to save both time and money using North Summit Payments to manage our merchant processing at our facility.  Their expertise and recommendations to credit card processing, payment solutions and point of sale have added value to our business operations.  As well, they have become a valued partner to our organization.”</p>
                            <h4 className='font-medium text-center'>- Elevate The Community</h4>
                            {/* <p className='font-light text-center'></p> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-2xl'>
                        <div className='md:mx-[65px] lg:px-[50px] py-6 md:py-[50px] bg-[#F4F2F2] rounded-2xl relative min-h-[405px] md:min-h-[500px]'>
                            <div className='absolute top-6 right-6'>
                                <img className='w-[80px]' src={icon} alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img className=' rounded-full' src={avatar} alt="" />
                            </div>
                            <p className='text-[#272932] py-6 md:py-10 px-12 md:px-5 lg:px-0 max-w-[380px] mx-auto text-center md:text-center'>“North Summit Payments was able to decrease the rate we were paying our credit card processor by 1.5% (a decrease of 43%) resulting in enormous savings!”</p>
                            <h4 className='font-medium text-center'>- Grove Medical</h4>
                            {/* <p className='font-light text-center'></p> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-2xl'>
                        <div className='md:mx-[65px] lg:px-[50px] py-6 md:py-[50px] bg-[#F4F2F2] rounded-2xl relative  min-h-[405px] md:min-h-[500px]'>
                            <div className='absolute top-6 right-6'>
                                <img className='w-[80px]' src={icon} alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img className=' rounded-full' src={avatar} alt="" />
                            </div>
                            <p className='text-[#272932] py-6 md:py-10 px-12 text-center md:px-5 lg:px-0 max-w-[380px] mx-auto md:text-center text-[14px] leading-tight md:text-base md:leading-[24px]'>“Awesome Experience. North Summit Payments makes the whole credit card payments experience so easy and simple. I never have any doubt as to where I should go for any information I may need and the customer service with NSP is awesome. The savings were much more then we expected as well as we are savings thousands annually not hundreds.</p>
                            <h4 className='font-medium text-center'>-Pandora</h4>
                            {/* <p className='font-light text-center'></p> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-2xl'>
                        <div className='md:mx-[65px] lg:px-[50px] py-6 md:py-[50px] bg-[#F4F2F2] rounded-2xl relative min-h-[405px] md:min-h-[500px]'>
                            <div className='absolute top-6 right-6'>
                                <img className='w-[80px]' src={icon} alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img className=' rounded-full' src={avatar} alt="" />
                            </div>
                            <p className='text-[#272932] py-6 md:py-10 px-12 text-center md:px-5 lg:px-0 max-w-[380px] mx-auto md:text-center text-[14px] md:text-base md:leading-[24px]'>“We have been with North Summit Payments for over 10 years.  We were one of the first businesses to use Clover Flex and we love it.  I would strongly recommend NSP to any business that accepts credit card payments”</p>
                            <h4 className='font-medium text-center'>Smiles in Motion – Dr. Allyson Bourke</h4>
                            <p className='font-light text-center'> – Orthodontist</p>
                        </div>
                    </SwiperSlide>
                
                </Swiper>
            </div>
        </div>
    );
};

export default Feedback;