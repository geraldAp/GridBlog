import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#444] flex justify-between items-center p-4">
      <div>
        <Image src="/logo_light.png" alt="" width={90} height={40} />
      </div>

      <p className="text-white font-medium">
        Copyright © 2023, All Rights Reserved
      </p>
      <div className="flex text-white gap-4">
        <Link className="" href="#">
          <FaInstagram />
        </Link>
        <Link className="" href="#">
          <FaFacebook />
        </Link>
        <Link className="" href="#">
          <FaTwitter />
        </Link>
        <Link className="" href="#">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
