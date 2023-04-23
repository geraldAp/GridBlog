import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  return (
    <div>
      <nav className="  fixed top-0 left-0 z-[100] w-[100%] bg-[#fff] p-4 shadow-gray-300 shadow-sm mb-14">
        <div className="  justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex  ">
          <div>
            <div className="flex items-center justify-between  md:block">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt=""
                  className=" "
                  width={100}
                  height={50}
                />
              </Link>
              {/* hamburger menu */}
              <div className="md:hidden">
                <button
                  className="p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.png" width={20} height={20} alt="logo" />
                  ) : (
                    <Image
                      src="/menu.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* socials */}
          <div className=" hidden  md:flex gap-4">
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
          {/* nav link */}
          <div
            className={`flex flex-col items-center pb-3  md:block md:pb-0 md:mt-0 ${
              navbar ? "p-6 md:p-0 block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                className={` text-sm md:text-base font-medium text-red-700 
         hover:text-gray-600 hover:border-b-2 hover:border-red-700
         ${router.pathname === "/" ? "border-b-2 border-black " : null}
         `}
                href="/"
                onClick={() => setNavbar(!navbar)}
              >
                Home
              </Link>
              <Link
                className={`text-sm md:text-base font-medium text-red-700 hover:text-gray-600 hover:border-b-2 hover:border-red-700
        ${router.pathname === "/about" ? "border-b-2 border-black " : null}
        `}
                href="/about"
                onClick={() => setNavbar(!navbar)}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
