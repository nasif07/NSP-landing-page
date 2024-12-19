import img8 from "../assets/products/CA_-_Accessories_Devices_Menu.png";
import img4 from "../assets/products/CA_Device_Menu__-_Station_Duo.png";
import img7 from "../assets/products/CA_KDS_-_Device_Menu.png";
import img5 from "../assets/products/CA_Mini_-_Device_Menu.png";
import img3 from "../assets/products/CA_Station_Solo_Device_Menu_.png";
import img2 from "../assets/products/flex_device_menu__1_.png";
import img1 from "../assets/products/flexpocket_device_menu.png";
import img6 from "../assets/products/kiosk-nav__1_.webp";

const Products = () => {
  return (
    <section id="products" className="py-[50px] bg-white md:py-[100px] max-w-[1160px] mx-auto px-4 md:px-10  font-Space_Grotesk">
      <div className="md:flex lg:gap-20">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-[#1E4FFD] text-[20px]">Products</p>
          <h1 className="text-4xl font-bold text-[#272932] pt-5 pb-11 max-w-[350px]">
            Solutions That Deliver
          </h1>
          <a href="#contact">
            <button
              style={{ boxShadow: "0px 8px 22px 0px rgba(20, 77, 138, 0.30)" }}
              className="bg-[#1E4FFD] px-[30px] py-[18px] mb-12  text-white rounded-full font-bold text-[16px]   hover:scale-105 duration-300">
              Ready to get started?
            </button>
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-3 md:gap-5 lg:gap-10 pb-4 md:mb-10">
            <div className="flex flex-col items-center relative group">
              <img
                className="max-w-32 transition duration-300 transform group-hover:scale-110"
                src={img1}
                alt=""
              />
              <h3>Flex</h3>
            </div>
            <div className="flex flex-col items-center relative group">
              <img
                className="max-w-32 transition duration-300 transform group-hover:scale-110"
                src={img2}
                alt=""
              />
              <h3>Flex Pocket</h3>
            </div>
            <div className="flex flex-col items-center relative group">
              <img
                className="max-w-32 transition duration-300 transform group-hover:scale-110"
                src={img3}
                alt=""
              />
              <h3>Station Solo</h3>
            </div>
            <div className="flex flex-col items-center relative group">
              <img
                className="max-w-32 transition duration-300 transform group-hover:scale-110"
                src={img4}
                alt=""
              />
              <h3>Station Duo</h3>
            </div>
          
          <div className="flex flex-col items-center relative group">
            <img
              className="max-w-32 transition duration-300 transform group-hover:scale-110"
              src={img5}
              alt=""
            />
            <h3>Mini</h3>
          </div>
          <div className="flex flex-col items-center relative group">
            <img
              className="max-w-32 transition duration-300 transform group-hover:scale-110"
              src={img6}
              alt=""
            />
            <h3>Kiosk</h3>
          </div>
          <div className="flex flex-col items-center relative group">
            <img
              className="max-w-32 transition duration-300 transform group-hover:scale-110"
              src={img7}
              alt=""
            />
            <h3>Kitchen Display System</h3>
          </div>
          <div className="flex flex-col items-center relative group">
            <img
              className="max-w-32 transition duration-300 transform group-hover:scale-110"
              src={img8}
              alt=""
            />
            <h3>Accessories</h3>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
