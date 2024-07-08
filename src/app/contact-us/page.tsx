import Button from "@/components/Button";
import {
  ArrowRightCircleIcon,
  EnvelopeIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Line1 from "@/assets/Icon-hero.svg";
import Line2 from "@/assets/Icon-hero2.svg";
import Accordion from "@/components/Accordion";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

const pageTitle = "Contact Us";

export const metadata: Metadata = {
  title: pageTitle,
};

const ContactUsPage = () => {
  return (
    <div className="w-full font-kufam overflow-x-hidden">
      {/* header section */}
      <section className="w-full relative bg-about-bg pt-20 lg:pt-48 pb-4 bg-no-repeat bg-center bg-cover hero">
        <div className="container mx-auto px-2 py-20 pb-4 grid grid-cols-1 lg:grid-cols-4 gap-16 ">
          <div className="flex flex-col w-full z-[1] col-span-1 lg:col-span-3">
            <div className="flex items-end text-black bg-hero-bg w-fit px-3 py-2">
              <span>
                <HomeIcon className="size-4 mr-1" />
              </span>
              <p className="uppercase text-sm leading-none">Contact Us</p>
            </div>

            <h1 className="text-white font-bold text-[45px] md:text-[58px] leading-none my-9">
              Request Information
            </h1>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </section>

      <section className="w-full relative pt-20 pb-8 bg-about-section-gradient">
        <div className="container mx-auto px-2 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          <div className="flex flex-col w-full z-[1]">
            <div className="bg-white grid grid-cols-[24px_auto] gap-2 lg:w-fit px-[30px] py-6 text-primary border-0 rounded mb-5">
              <EnvelopeIcon className="size-5" />
              info@mantabaylimited.com
            </div>

            <div className="bg-white grid grid-cols-[24px_auto] gap-2 lg:w-fit px-[30px] py-6 text-primary border-0 rounded mb-5">
              <PhoneIcon className="size-5" />
              +234 812 696 5999
            </div>

            <div className="bg-white grid grid-cols-[24px_auto] gap-2 lg:w-fit px-[30px] py-6 text-primary border-0 rounded">
              <MapPinIcon className="size-5" />
              67 Tombia Ext., GRA Phase II, Port Harcourt, Rivers State,
              Nigeria.
            </div>
            <Map />
          </div>
          <div className="w-full z-[1]">
            <div className="bg-white shadow-md rounded px-4 md:px-8 lg:px-10 py-16">
              <h4 className="mb-3 font-semibold text-[30px] text-blue">
                Quick Contact
              </h4>
              <p className="mb-8 text-gray-500"></p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}
      {/* <section className="w-full">
        <div className="container mx-auto px-2 lg:py-40 py-16">
          <p className="flex items-center text-gray-800 border-gray-800 border-l border-r leading-none px-2 w-fit mb-4 uppercase mx-auto">
            <span className="text-primary-400 mr-2">03</span>
            Help
          </p>
          <h3 className="text-blue font-bold text-3xl lg:text-[45px] leading-tight mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div>
            <Accordion />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactUsPage;
