import "swiper/css";
import "swiper/css/navigation";

import BiosCard from "../components/BiosCard";
const Bios = () => {
  const array = [
    {
      image: "https://example.com/image1.jpg",
      desc: "Craig Brockie brings 15 years of business development/relationship expertise to North Summit Payments.  With his resources, Mr. Brockie provides merchants access to the payment industries leading solutions with the lowest rates. If you are looking to grow your business and maximize profits, the North Summit Payments team is here to help.",
      name: "Craig Brockie",
      role: "Partner & Co-Founder",
      tel: "+123 456 7890",
      email: "Mirela@NSPPay.com",
    },
    {
      image: "https://example.com/image1.jpg",
      desc: "Darren Brockie has over 15 years experience in the payment processing industry and for the last 10 years has been vital to the growth of the world’s largest payment acquirer. Darren’s experience includes working with regional, national and global-sized merchants. Whether you are a single location business or a fortune 500 company looking to accept credit, debit or other forms of electronic payment, Darren has the skills and expertise to service you.",
      name: "Darren Brockic",
      role: "Managing Director & Co-Founder",
      tel: "+123 456 7890",
      email: "Mirela@NSPPay.com",
    },
    {
      image: "https://example.com/image1.jpg",
      desc: "Driven by a commitment to excellence, Mirela prioritizes delivering quality service in every aspect of her work. She understands the importance of meeting deadlines and goes above and beyond to ensure that all tasks are completed accurately and on time. Client satisfaction is at the forefront of her priorities, and she consistently strives to exceed expectations and build strong relationships with those she serves.",
      name: "Mirela Georgieva",
      role: "Quebec Division",
      tel: "+123 456 7890",
      email: "Mirela@NSPPay.com",
    },
    {
      image: "https://example.com/image2.jpg",
      desc: "With over a decade in finance, I've dedicated myself to merchant services consulting. My focus is on crafting tailored strategies to optimize payment processes while delivering top-notch service. As your financial ally, I thrive on simplifying your life by helping businesses navigate the complexities of the financial landscape, ensuring they stay competitive and customer-focused. Let's connect and take your business to the next level.",
      name: "Maxime Mariani",
      role: "Quebec Division",
      tel: "514-836-4833",
      email: "Max@NSPPay.com",
    },
    {
      image: "https://example.com/image3.jpg",
      desc: "With over 5 years of dedicated experience in the payments industry, Eoin brings a wealth of knowledge and expertise to the table. Eoin's passion lies in delivering unparalleled customer service, ensuring that each client's needs are not only met but exceeded. Specializing in Clover equipment, Eoin has honed his skills to provide seamless solutions tailored to businesses of all sizes. From consultation to implementation, he is committed to helping businesses thrive in today's ever-evolving payment landscape",
      name: "Eoin Keating",
      role: "Business Development",
      tel: "647-226-7025",
      email: "eoin@NSPPay.com",
    },
    {
      image: "https://example.com/image4.jpg",
      desc: "Spencer Guglietti is equipped with a passion for building and maintaining valuable connections. With 5 years of experience in the industry, Spencer brings a wealth of knowledge and expertise to the table. Spencer specializes in understanding the unique needs of merchants and providing tailored solutions to assist them in achieving their goals. Whether you're a local business or a global enterprise, Spencer has the skills and know-how to help you navigate the ever-evolving landscape of electronic payment solutions.",
      name: "Spencer Guglietti",
      role: "Strategic Partnership Manager",
      tel: "647-921-7933",
      email: "Spencer@NSPPay.com",
    },
    {
      image: "https://example.com/image5.jpg",
      desc: "For the past eight years, I've dedicated myself to the dynamic realm of the payment industry. Serving as the Vice President of North Summit Payments, I oversee our esteemed US and Canadian referral partner channels, fostering strategic relationships for mutual success. My responsibilities extend to the meticulous management of our expansive 3000-strong merchant customer base, ensuring their satisfaction and loyalty. Collaborating seamlessly with our sales onboarding and tech teams, I am deeply committed to driving business growth through innovative solutions and unwavering support.",
      name: "Shayne Christie",
      role: "Vice President",
      tel: "647-409-9895",
      email: "Shayne@NSPPay.com",
    },
  ];

  return (
    <div className="py-[50px] bg-white md:py-[100px] max-w-[1160px] mx-auto px-4 md:px-10  font-Space_Grotesk">
      <div>
        <p className="text-[#1E4FFD] text-[20px]">The Faces of Innovation</p>
        <h1 className="text-4xl font-bold text-[#272932] pt-5 pb-11 lg:max-w-[500px]">
          Meet Our Experts
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
        {array.map((data, index) => (
          <BiosCard key={index} {...data}></BiosCard>
        ))}
      </div>
    </div>
  );
};

export default Bios;
