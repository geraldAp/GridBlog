import React from "react";
import Image from "next/image";

const CaContact = () => {
  const top = () =>{
    window.scrollTo({
      top: "50px",
      behavior: "smooth"
    })
  }
  return (
    <div>
      <div className="grid bg-[#333] p-5 md:grid-cols-3 justify-center text-white  mt-9">
        <div className="p-4 border-b-2 border-gray-600 md:border-b-0 ">
          <img
            src="/logo_light.png"
            alt=""
            className=" text-center md:text-left  mb-5 w-36 "
          />
          <p className="text-sm  md:text-base">
            News Grid is a trusted source of diverse and engaging news stories
            that are both credible and informative. This organization is
            committed to delivering accurate and impartial news coverage on a
            wide range of topics, from politics and business to science and
            technology. With a team of experienced journalists and experts, News
            Grid provides insightful and well-researched content that helps
            readers stay informed and engaged. By prioritizing transparency and
            accountability, News Grid strives to set the standard for excellence
            in modern journalism and contribute to a more informed and
            knowledgeable society.
          </p>
        </div>
        <div className="p-4 border-b-2 border-gray-600 md:border-b-0 ">
          <h3 className="text-center  font-bold text-xl md:text-2xl lg:text-3xl text-white  mb-5">
            {" "}
            Join Our Club
          </h3>
          <p className="mb-3 text-sm  md:text-base">
            Join our club to get fantastic perks and stuff. You will likely not
            regret it.
          </p>
          <button className="w-full py-1 text-sm md:text-base bg-red-700 hover:opacity-80">
            Join Now{" "}
          </button>
        </div>
        <div className=" text-center md:text-right p-4">
          <h3 className=" text-center md:text-right  font-bold text-lg md:text-xl lg:text-2xl text-white mb-5">
            Get in touch
          </h3>

          <div className="grid gap-7 ">
            <div>
              <h4 className=" font-semibold font-chivo text-[16px] md:text-lg lg:text-xl">
                Phone
              </h4>
              <p className=" text-sm md:text-[16px]">
                +233549499150 <br />
                +233503588839 <br />
                +233543661573
              </p>
            </div>
            <div>
              <h4 className=" font-semibold font-chivo text-[16px] md:text-lg lg:text-xl">
                Email
              </h4>
              <p className=" text-sm md:text-[16px]">
                trevorjackson16@gmail.comm <br />
                info@newsgrid.com <br />
                justintimb@gmail.com
              </p>
            </div>
            <div>
              <h4 className=" font-semibold font-chivo text-[16px] md:text-lg lg:text-xl">
                Whatsapp
              </h4>
              <p className=" text-sm md:text-[16px]">
                +233549499150 <br />
                +233503588839 <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={top}
        className=" animate-bounce absolute z-20 right-[12rem] "
      >
     <Image  src="/scroll-up.png" alt="" width={35} height={25}/>
        
      </button>
    </div>
  );
};

export default CaContact;
