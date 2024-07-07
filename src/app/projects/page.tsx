/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import HeaderImg from "@/assets/images/image 54.png";
import Line1 from "@/assets/Icon-hero.svg";
import Line2 from "@/assets/Icon-hero2.svg";
import { HomeIcon } from "@heroicons/react/24/solid";
import IntroImg from "@/assets/images/Image (7).png";
import { services } from "@/data/servicesData";
import ServicePattern from "@/assets/service-pattern.svg";
import PropertyCard from "@/components/PropertyCard";
import { projectsData } from "@/data/projectsData";

const ServicesPage = () => {
  return (
    <div className="w-full font-kufam overflow-x-hidden">
      {/* header section */}
      <section className="w-full relative bg-projects-bg pt-20 lg:pt-48 pb-4 bg-no-repeat bg-center bg-cover hero">
        <div className="container mx-auto px-2 py-20 pb-4 grid grid-cols-1 lg:grid-cols-4 gap-16 ">
          <div className="flex flex-col w-full z-[1] col-span-1 lg:col-span-3">
            <div className="flex items-end text-black bg-hero-bg w-fit px-3 py-2">
              <span>
                <HomeIcon className="size-4 mr-1" />
              </span>
              <p className="uppercase text-sm leading-none">Projects</p>
            </div>

            <h1 className="text-white font-bold text-[45px] md:text-[58px] leading-none my-9">
              Pioneering Developments: Building Tomorrow, Today
            </h1>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </section>

      {/* intro */}
      <section className="w-full">
        <div className="container mx-auto px-2 lg:py-40 py-16">
          <div className="max-w-2xl mx-auto mb-11 ">
            <p className="flex items-center text-gray-800 border-gray-800 border-l border-r leading-none px-2 w-fit mb-4 uppercase mx-auto">
              {/* <span className="text-primary-400 mr-2"></span> */}
              Projects
            </p>

            <h3 className="text-blue font-bold text-3xl lg:text-[45px] leading-tight mb-6 text-center">
              Our Recent and on-going Projects
            </h3>
          </div>
          <div className="container mx-auto px-2 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {projectsData.map((item, i) => (
              <PropertyCard item={item} key={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container mx-auto px-2"></div>
      </section>
    </div>
  );
};

export default ServicesPage;
