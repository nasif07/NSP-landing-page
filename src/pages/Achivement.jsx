import SectionCard from "../components/sectionCard";

const Achivement = () => {
    return (
        <div className="bg-[#1E4FFD] font-Space_Grotesk">
            <div className="max-w-[930px] mx-auto flex py-[50px] gap-[151px]">
                <div className="flex-1">
                    <h2 className="text-4xl text-white font-bold">Secure and lighting fast payments starts here!</h2>
                    <p className="text-white font-light text-[12px] pt-4 pb-[50px]">Ask us how we can help your business go further.</p>
                    <button style={{boxShadow: "0px 8px 22px 0px rgba(20, 77, 138, 0.30)"}} className="text-[#1E4FFD] font-bold bg-white px-[30px] py-[18px] rounded-full">Get connected now!</button>
                </div>
                <div>
                    <div className="flex gap-8">
                        <SectionCard heading={"2500+"} subHeading={"Business"}></SectionCard>
                        <div className="pt-10">
                            <SectionCard heading={"$15B+"} subHeading={"Processed"}></SectionCard>
                        </div>
                    </div>
                    <div className="flex gap-8 pt-5">
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