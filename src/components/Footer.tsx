import Image from "next/image";
import React from "react";
import Logo from "@/assets/logos/logo-white-2.png";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import {
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";
import Link from "next/link";

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-primary-600 font-kufam">
      <div className="container mx-auto px-2 w-full divide-y text-white">
        <div className="grid grid-cols-1 lg:gap-12 py-16 pb-20 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex items-start col-span-1 flex-col gap-6 mt-10 md:mt-0">
              <Image src={Logo} alt="logo" width={220} height={80} />

              <div className="flex items-center gap-4">
                <a
                  href=""
                  target="_blank"
                  className="size-9 rounded-full bg-primary-500 text-lg flex items-center justify-center hover:text-primary-200 hover:bg-blue transition-colors duration-300"
                  aria-label="twitter"
                >
                  <BsTwitterX />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="size-9 rounded-full bg-primary-500 text-lg flex items-center justify-center hover:text-primary-200 hover:bg-blue transition-colors duration-300"
                  aria-label="facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="size-9 rounded-full bg-primary-500 text-lg flex items-center justify-center hover:text-primary-200 hover:bg-blue transition-colors duration-300"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="size-9 rounded-full bg-primary-500 text-lg flex items-center justify-center hover:text-primary-200 hover:bg-blue transition-colors duration-300"
                  aria-label="instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="lg:py-8">
              {/* <h4 className="mb-3 lg:mb-5 font-semibold text-xl">Company</h4> */}
              <ul className="space-y-2">
                <li className="">
                  <Link href="/about-us" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="">
                  <Link href="/contact-us" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="">
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:bg-primary-500 rounded lg:px-6 lg:py-8">
              <h4 className="mb-3 lg:mb-5 font-semibold text-xl">Contact Us</h4>
              <ul className="space-y-2">
                <li className="grid grid-cols-[24px_auto] gap-2">
                  <EnvelopeIcon className="size-5" />
                  <span>info@mantabaylimited.com</span>
                </li>
                <li className="grid grid-cols-[24px_auto] gap-2">
                  <PhoneIcon className="size-5" />
                  <span>+234 812 696 5999</span>
                </li>
                <li className="grid grid-cols-[24px_auto] gap-2">
                  <MapPinIcon className="size-5" />
                  <span>
                    67 Tombia Ext., GRA Phase II, Port Harcourt, Rivers State,
                    Nigeria.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-8 flex w-full justify-center lg:items-center text-sm gap-2">
          <p>&copy; MantaBay Limited {getYear}</p>
          {/* <div className="">|</div>
          <p>
            Built by{" "}
            <a
              href="https://linkedin.com/in/mason10396"
              target="_blank"
              className="hover:underline"
            >
              Onidev
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
