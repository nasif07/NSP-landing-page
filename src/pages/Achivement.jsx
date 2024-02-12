import SectionCard from "../components/sectionCard";
import bgImg from "../assets/bg.svg"

const Achivement = () => {
    return (
        <div style={{
            backgroundImage: `url(${bgImg})`
          }} className="bg-[#1E4FFD] bg-left-bottom md:bg-left bg-no-repeat font-Space_Grotesk px-5 md:px-12">
            <div className="max-w-[980px] mx-auto md:flex items-center py-[50px] gap-[151px]">
                <div data-aos="fade-up" data-aos-duration="1000" className="flex-1">
                    <h2 className="text-4xl text-white font-bold">Secure and lighting fast payments starts here!</h2>
                    <p className="text-white font-light text-[12px] pt-4 pb-[50px]">Ask us how we can help your business go further.</p>
                    <a href="#contact"><button style={{boxShadow: "0px 8px 22px 0px rgba(20, 77, 138, 0.30)"}} className="text-[#1E4FFD] font-bold bg-white px-[30px] py-[18px] rounded-full mb-12 md:mb-0   hover:scale-105 duration-300">Get connected now!</button></a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="flex gap-5 md:gap-8">
                        <SectionCard heading={"2500+"} subHeading={"Business"}></SectionCard>
                        <div className="pt-10">
                            <SectionCard heading={"$15B+"} subHeading={"Processed"}></SectionCard>
                        </div>
                    </div>
                    <div className="flex gap-5 md:gap-8 pt-5">
                        <div className="-mt-10">
                            <SectionCard heading={"1B+"} subHeading={"Transactions"}></SectionCard>
                        </div>
                        <SectionCard heading={"12+"} subHeading={"Years of experience"}></SectionCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivement;