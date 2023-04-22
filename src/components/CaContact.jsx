import React from "react";
import Image from "next/image";

const CaContact = () => {
  return (
    <div className="grid bg-[#333] p-5 md:grid-cols-3 justify-center text-white  mt-9">
      <div className="p-4">
        <img src="/logo_light.png" alt="" className=" mb-5 w-36 text-center" />
        <p>
          News Grid is a trusted source of diverse and engaging news stories
          that are both credible and informative. This organization is committed
          to delivering accurate and impartial news coverage on a wide range of
          topics, from politics and business to science and technology. With a
          team of experienced journalists and experts, News Grid provides
          insightful and well-researched content that helps readers stay
          informed and engaged. By prioritizing transparency and accountability,
          News Grid strives to set the standard for excellence in modern
          journalism and contribute to a more informed and knowledgeable
          society.
        </p>
      </div>
      <div className="p-4">
        <h3 className="text-center  font-bold text-3xl text-white  mb-5"> Join Our Club</h3>
       <p className="mb-3">
       Join our club to get fantastic perks and stuff. You will likely not regret it.
       </p>
<button className="w-full py-1 bg-red-700 hover:opacity-80">Join Now </button>
      </div>
      <div className="text-right p-4">
        <h3 className="text-right  font-bold text-2xl text-white mb-5">Get in touch</h3>

        <div className="grid gap-7">
          <div>
            <h4 className=" font-semibold font-chivo text-xl">Phone</h4>
            <p>
              +233549499150 <br />
              +233503588839 <br />
              +233543661573
            </p>
          </div>
          <div>
            <h4 className=" font-semibold font-chivo text-xl">Email</h4>
            <p>
              trevorjackson16@gmail.comm <br />
              info@newsgrid.com <br />
              justintimb@gmail.com
            </p>
          </div>
          <div>
            <h4 className=" font-semibold font-chivo text-xl">Whatsapp</h4>
            <p>
              +233549499150 <br />
              +233503588839 <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaContact;
