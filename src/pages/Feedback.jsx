import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import avatar from "../assets/image 3.png"
import icon from "../assets/”.svg"
const Feedback = () => {

    return (
        <div className="py-[100px] max-w-[1120px] mx-auto font-Space_Grotesk">
            <div className="flex gap-20">
                <div>
                    <p className="text-[#1E4FFD] text-[20px]">Clients feedback</p>
                    <h1 className="text-4xl font-bold text-[#272932] pt-5 pb-11 max-w-[350px]">Still don’t believe us? Believe our clients!</h1>
                    <a href="#contact"><button style={{ boxShadow: '0px 8px 22px 0px rgba(20, 77, 138, 0.30)' }} className="bg-[#1E4FFD] px-[30px] py-[18px] text-white rounded-full font-bold text-[16px]">Ready to get started?</button></a>
                </div>
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="flex-1"
                >
                    <SwiperSlide className=' rounded-2xl'>
                        <div className='mx-[65px] px-[50px] py-[50px] bg-[#F4F2F2] rounded-2xl relative'>
                            <div className='absolute top-6 right-6'>
                                <img className='' src={icon} alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img className=' rounded-full' src={avatar} alt="" />
                            </div>
                            <p className='text-[#272932] py-10 max-w-[380px] mx-auto text-center'>“Secure a lowest-in-industry processing fee through our private merchant network. Stop being bled dry from overpriced processing fees and put more profit back in your pocket.”</p>
                            <h4 className='font-medium text-center'>- JOHN SNOW</h4>
                            <p className='font-light text-center'>CEO, Founder, ABC Business</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mx-[65px] px-[50px] py-[50px] bg-[#F4F2F2] rounded-2xl relative'>
                            <div className='absolute top-6 right-6'>
                                <img className='' src={icon} alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img className=' rounded-full' src={avatar} alt="" />
                            </div>
                            <p className='text-[#272932] py-10 max-w-[380px] mx-auto text-center'>“Secure a lowest-in-industry processing fee through our private merchant network. Stop being bled dry from overpriced processing fees and put more profit back in your pocket.”</p>
                            <h4 className='font-medium text-center'>- JOHN SNOW</h4>
                            <p className='font-light text-center'>CEO, Founder, ABC Business</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mx-[65px] px-[50px] py-[50px] bg-[#F4F2F2] rounded-2xl relative'>
                            <div className='absolute top-6 right-6'>
                                <img className='' src={icon} alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img className=' rounded-full' src={avatar} alt="" />
                            </div>
                            <p className='text-[#272932] py-10 max-w-[380px] mx-auto text-center'>“Secure a lowest-in-industry processing fee through our private merchant network. Stop being bled dry from overpriced processing fees and put more profit back in your pocket.”</p>
                            <h4 className='font-medium text-center'>- JOHN SNOW</h4>
                            <p className='font-light text-center'>CEO, Founder, ABC Business</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Feedback;