import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <nav className="  flex justify-between items-center p-4 shadow-gray-300 shadow-sm mb-14">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="" width={100} height={50} />
          </Link>
        </div>
        <div className="flex gap-4">
          <Link className="text-gray-400 " href="#">
            <FaInstagram />
          </Link>
          <Link className="text-gray-400" href="#">
            <FaFacebook />
          </Link>
          <Link className="text-gray-400" href="#">
            <FaTwitter />
          </Link>
          <Link className="text-gray-400" href="#">
            <FaLinkedin />
          </Link>
        </div>
        <div className="flex gap-4">
          <Link className=" font-medium text-red-700 hover:text-gray-600 hover:border-b-2 hover:border-red-700" href="/">Home</Link>
          <Link className=" font-medium text-red-700 hover:text-gray-600 hover:border-b-2 hover:border-red-700" href="/about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
