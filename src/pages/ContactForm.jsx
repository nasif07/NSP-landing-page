
const ContactForm = () => {
    const inputStyle = {
        outline: 'none'
    }
    return (
        <div style={{ border: "1px solid #1E4FFD" }} className=" max-w-[1120px] mx-auto font-Space_Grotesk rounded-2xl py-[100px] px-[50px] mb-[150px]">
            <div className="flex gap-8">
                <div>
                    <p className="text-[#1E4FFD] text-[20px]">Your info</p>
                    <h1 className="text-5xl font-bold text-[#272932] pt-5 pb-11 max-w-[410px]">Get started to accept payments now!</h1>
                </div>
                <div className="flex-auto">
                    <form className="space-y-8" action="">
                        <div className="flex gap-8">
                            <input style={inputStyle} type="text" placeholder="First name..." className="input rounded-full w-full  h-[55px] bg-[#F4F2F2]" />
                            <input style={inputStyle} type="text" placeholder="Last name..." className="input rounded-full w-full  h-[55px] bg-[#F4F2F2]" />
                        </div>
                        <div>
                            <input style={inputStyle} type="email" placeholder="Company email address..." className="input rounded-full w-full  h-[55px] bg-[#F4F2F2]" />
                        </div>
                        <div className="flex gap-8">
                            <input style={inputStyle} type="number" placeholder="Phone number..." className="input rounded-full w-full h-[55px] bg-[#F4F2F2]" />
                            <input style={inputStyle} type="text" placeholder="Business name..." className="input rounded-full w-full h-[55px] bg-[#F4F2F2]" />
                        </div>
                        <div>
                            <input style={inputStyle} type="text" placeholder="Website URL..." className="input rounded-full w-full  h-[55px] bg-[#F4F2F2]" />
                        </div>
                        <button style={{ boxShadow: '0px 8px 22px 0px rgba(20, 77, 138, 0.30)' }} className="bg-[#1E4FFD] w-full py-[18px] text-white rounded-full font-bold text-[16px]">Get started now!</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;