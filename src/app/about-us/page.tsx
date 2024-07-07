import ReviewSlide from "@/components/ReviewSlide";
import { HomeIcon } from "@heroicons/react/16/solid";
import React from "react";
import Line1 from "@/assets/Icon-hero.svg";
import Line2 from "@/assets/Icon-hero2.svg";
import Image from "next/image";
import HeaderImg from "@/assets/images/Photo (5).png";
import IntroImg from "@/assets/images/Photo (6).png";
import IntroIcon1 from "@/assets/images/Icon.png";
import IntroIcon2 from "@/assets/images/Icon (1).png";
import { team } from "@/data/teamData";
import TeamCard from "@/components/TeamCard";
import { mainFocus } from "@/data/mainFocus";

const AboutPage = () => {
  return (
    <div className="w-full font-kufam overflow-x-hidden">
      {/* header section */}
      <section className="w-full relative bg-about-bg pt-20 lg:pt-48 pb-4 bg-no-repeat bg-center bg-cover hero">
        <div className="container mx-auto px-2 py-20 pb-4 grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          <div className="flex flex-col w-full z-[1]">
            <div className="flex items-end text-black bg-hero-bg w-fit px-3 py-2">
              <span>
                <HomeIcon className="size-4 mr-1" />
              </span>
              <p className="uppercase text-sm leading-none">About Us</p>
            </div>

            <h1 className="text-white font-bold text-5xl md:text-[58px] leading-none my-9">
              {/* Why Choose Us */}
            </h1>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </section>

      {/* intro */}
      <section className="w-full divide-y">
        <div className="container mx-auto px-2 py-20">
          <div className="w-full ">
            <p className="flex items-center text-gray-800 border-gray-800 border-l border-r leading-none px-2 w-fit mb-4 uppercase">
              <span className="text-primary-400 mr-2">01</span>
              MantaBay Intro
            </p>

            <h3 className="text-blue font-bold text-3xl lg:text-[45px] leading-tight mb-6">
              Who We Are
            </h3>
            <p className="text-primary mb-2">
              Welcome to Manta Bay Limited, a premier real estate development
              firm dedicated to transforming the property landscape with
              innovation, sustainability, and community-focused projects. Our
              commitment to excellence is evident in every phase of our
              operations, from initial concept to final construction and beyond.
              We pride ourselves on delivering high-quality, aesthetically
              pleasing, and functional properties that cater to the diverse
              needs of our clients. Our team of experienced professionals works
              diligently to ensure that each project not only meets but exceeds
              industry standards and client expectations. Join us on a journey
              to redefine real estate development with integrity, creativity,
              and unparalleled customer service.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-2 lg:px-8 py-6">
              <div className="col-span-1">
                <h4 className="text-blue mb-3 font-semibold text-2xl">
                  Our Vision
                </h4>
                <p className="text-primary-500 leading-tight">
                  To be the leading real estate development company recognized
                  for our innovative, sustainable, and community-centric
                  projects that enhance the quality of life for individuals and
                  families.
                </p>
              </div>

              <div className="col-span-1">
                <h4 className="text-blue mb-3 font-semibold text-2xl">
                  Our Mission
                </h4>
                <p className="text-primary-500 leading-tight">
                  Our mission is to transform the real estate landscape by
                  delivering exceptional properties through a seamless,
                  three-step development process. We prioritize market research
                  and meticulous planning, ensure high-quality construction and
                  timely delivery, and provide unparalleled marketing and
                  customer support to create lasting value for our clients and
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-2 py-20">
          <div className="max-w-2xl mx-auto mb-11">
            <p className="flex items-center text-gray-800 border-gray-800 border-l border-r leading-none px-2 w-fit mb-4 uppercase mx-auto">
              <span className="text-primary-400 mr-2">02</span>
              Process
            </p>

            <h3 className="text-blue font-bold text-3xl lg:text-[45px] leading-tight mb-6 text-center">
              Our Main Focus
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {mainFocus.map((item, i) => (
              <div
                key={i}
                className="w-full px-6 py-10 bg-card-bg-gradient-2 rounded"
              >
                <div className="size-24 rounded-full overflow-hidden flex items-center justify-center text-5xl mb-4 bg-primary-200 text-white font-semibold">
                  {item?.id}
                </div>
                <div>
                  <h4 className="text-blue mb-3 font-semibold text-xl">
                    {item?.title}
                  </h4>
                  <ul className="text-primary-500 leading-tight list-disc pl-4 space-y-2">
                    {item?.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* review section */}
      {/* <section className="w-full relative bg-review-bg-gradient py-20">
        <div className="container mx-auto px-2 mb-8">
          <h3 className="text-blue font-bold text-3xl lg:text-[45px] leading-tight  w-full lg:max-w-lg">
            What our customers say about us
          </h3>
        </div>
        <div className="w-full container mx-auto px-2">
          <ReviewSlide />
        </div>
      </section> */}

      {/* team */}
      <section>
        <div className="container mx-auto px-2 py-20">
          <div className="max-w-2xl mx-auto mb-11">
            <p className="flex items-center text-gray-800 border-gray-800 border-l border-r leading-none px-2 w-fit mb-4 uppercase mx-auto">
              <span className="text-primary-400 mr-2">03</span>
              Experts
            </p>

            <h3 className="text-blue font-bold text-3xl lg:text-[45px] leading-tight mb-6 text-center">
              Our Team
            </h3>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
            {team.map((item, i) => (
              <TeamCard key={i} team={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
