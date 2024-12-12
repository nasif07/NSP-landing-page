import avatar from "../assets/image 3.png";
import icon from "../assets/”.svg"
const BiosCard = ({ image, desc, name, role, tel, email }) => {
  const truncatedDesc =
    desc.length > 30 ? desc.substring(0, 100) + "..." : desc;
  return (
    <div data-aos="zoom-in"
    data-aos-duration="600" className="p-4 md:p-5 lg:p-8 bg-[#F4F2F2] rounded-3xl space-y-10 flex flex-col relative">
      <div className="flex items-center gap-2">
        <img className=" rounded-full w-20" src={avatar} alt="" />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <h5 className="text-xs">{role}</h5>
          <span>tel: {tel}</span>
        </div>
      </div>
      <p className="text-sm">{desc}</p>
      <div className="hidden lg:show absolute bottom-6 right-6">
        <img className="w-[40px]" src={icon} alt="" />
      </div>
    </div>
  );
};

export default BiosCard;
