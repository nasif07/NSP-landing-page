
const SectionCard = ({heading, subHeading }) => {
    return (
        <div style={{ boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.12)" }} className="h-[160px] w-[160px] bg-[#4A72FD] text-white font-Space_Grotesk rounded-[20px] flex flex-col justify-center items-center">
            <h1 className="font-bold text-[32px]">{heading}</h1>
            <p>{subHeading}</p>
        </div>
    );
};

export default SectionCard;