import Line1 from "@/assets/Icon-hero.svg";
import Line2 from "@/assets/Icon-hero2.svg";
import AboutPattern from "@/assets/about-pattern.svg";
import Commission from "@/assets/images/Group 10.png";
import Prime from "@/assets/images/Group 9.png";
import HeroImg from "@/assets/images/Image (1).png";
import Insurance from "@/assets/images/Image (2).png";
import Trusted from "@/assets/images/Mask group (1).png";
import VideoPhoto from "@/assets/images/Photo.jpg";
import Budget from "@/assets/images/freepik--piggy-bank--inject-2.png";
import Plant1 from "@/assets/plant-1.svg";
import Plant2 from "@/assets/plant-2.svg";
import ServicePattern from "@/assets/service-pattern.svg";
import Button from "@/components/Button";
import PropertyCard from "@/components/PropertyCard";
import ReviewSlide from "@/components/ReviewSlide";
import { projectsData } from "@/data/projectsData";
import { services } from "@/data/servicesData";
import {
  ArrowRightCircleIcon,
  HomeIcon,
  PlayIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="w-full font-kufam overflow-x-hidden">
      {/* hero section */}
      <section className="w-full relative bg-home-bg pt-24 lg:pt-64 pb-8 bg-no-repeat bg-right-top bg-cover hero">
        <div className="container mx-auto px-2 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          <div className="flex flex-col w-full z-[1]">
            <div className="flex items-end text-black bg-hero-bg w-fit px-3 py-2">
              <span>
                <HomeIcon className="size-4 mr-1" />
              </span>
              <p className="uppercase text-sm leading-none">
                real estate company
              </p>
            </div>

            <h1 className="text-white font-bold text-[45px] md:text-[58px] leading-none my-9 drop-shadow">
              Explore Our Transformative Developments
            </h1>
            <p className="text-white mb-9 drop-shadow">
              Experience Our Commitment to Excellence in Residential and
              Commercial Developments
            </p>

            <Link href="/projects">
              <Button className="bg-white flex justify-center items-center lg:w-fit px-[30px] py-6 !text-blue hover:!bg-gray-300 border-0">
                Explore
                <span>
                  <ArrowRightCircleIcon className="size-4 ml-2 text-primary" />
                </span>
              </Button>
            </Link>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </section>
      {/* intro */}
      {/* <section className="w-full">
        <div className="container mx-auto px-2 lg:py-28 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-gray-200 py-10 lg:py-16 px-4 lg:px-14 col-span-1 lg:col-span-2">
            <p className="flex items-center text-gray-800 border-gray-800 border-l border-r leading-none px-2 w-fit mb-4 uppercase">
              <span className="text-primary-400 mr-2">01</span>
              MantaBay Intro
            </p>

            <h3 className="text-blue font-bold text-3xl lg:text-[45px] leading-tight mb-6">
              Buying & Selling Property In An Easy Way
            </h3>
            <p className="text-primary">
              Distinctively re-engineer revolutionary meta-services and premium
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi.
            </p>
          </div>
          <div className="col-span-1 relative">
            <div className="aspect-video lg:w-full lg:h-full">
              <Image
                src={VideoPhoto}
                alt="video preview"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-white size-20 flex items-center justify-center rounded-full transition-all duration-300 hover:shadow-md hover:scale-110 cursor-pointer"
              >
                <PlayIcon className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* marquee */}
      {/* <div></div> */}
      {/* why choose */}
      {/* <section className="w-full">
        <div className="container mx-auto px-2 lg:py-40 py-16">
          <div className="max-w-2xl mx-auto mb-11">
            <p className="flex items-center text-gray-800 border-gray-800 border-l border-r leading-none px-2 w-fit mb-4 uppercase mx-auto">
              <span className="text-primary-400 mr-2">02</span>
              why choose
            </p>

            <h3 className="text-blue font-bold text-3xl lg:text-[45px] leading-tight mb-6 text-center">
              Why Choose Our Properties Of Real Estate Industries
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9">
            <div className="col-span-1 bg-card-bg-gradient px-6 py-10 rounded">
              <div className="h-[120px] mb-8">
                <Image
                  className="w-fit h-full object-contain"
                  src={Budget}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h4 className="text-blue mb-3 font-semibold text-xl">
                  Budget Friendly
                </h4>
                <p className="text-primary-500 leading-tight">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 col-span-1 bg-card-bg-gradient px-6 py-10 rounded grid lg:grid-cols-2 grid-cols-1 relative overflow-hidden">
              <div className="h-[120px] lg:h-auto mb-8 lg:mb-0">
                <Image
                  className="w-fit h-full object-contain"
                  src={Insurance}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col lg:py-8 z-[1]">
                <h4 className="text-blue mb-3 font-semibold text-xl">
                  Property Insurance
                </h4>
                <p className="text-primary-500 leading-tight">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
              <Plant1 className="absolute -right-12 -bottom-12 scale-75" />
            </div>
            <div className="col-span-1 bg-card-bg-gradient px-6 py-10 rounded overflow-hidden relative">
              <div className="h-[120px] mb-8">
                <Image
                  className="w-fit h-full object-contain"
                  src={Trusted}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h4 className="text-blue mb-3 font-semibold text-xl">
                  Trusted By Thousands
                </h4>
                <p className="text-primary-500 leading-tight">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
              <Plant2 className="absolute -right-2 top-0 scale-90" />
            </div>
            <div className="col-span-1 bg-card-bg-gradient px-6 py-10 rounded">
              <div className="h-[120px] mb-8">
                <Image
                  className="w-fit h-full object-contain"
                  src={Prime}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h4 className="text-blue mb-3 font-semibold text-xl">
                  Prime Location
                </h4>
                <p className="text-primary-500 leading-tight">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
            </div>
            <div className="col-span-1 bg-card-bg-gradient px-6 py-10 rounded">
              <div className="h-[120px] mb-8">
                <Image
                  className="w-fit h-full object-contain"
                  src={Commission}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h4 className="text-blue mb-3 font-semibold text-xl">
                  Lowest Commission
                </h4>
                <p className="text-primary-500 leading-tight">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* about us */}
      <section className="w-full bg-about-section-bg bg-cover bg-no-repeat md:bg-center bg-left relative overflow-hidden">
        <div className="container mx-auto px-2 py-20 grid md:grid-cols-2 grid-cols-1">
          <div className="z-[1]">
            <p className="flex items-center text-gray-800 border-gray-800 border-l border-r leading-none px-2 w-fit mb-4 uppercase">
              <span className="text-primary-400 mr-2">03</span>
              About Us
            </p>

            <h3 className="text-blue font-bold text-3xl lg:text-[45px] leading-tight mb-6">
              Helping you find the right Properties
            </h3>
            <p className="text-primary mb-9">
              Welcome to Manta Bay Limited, a premier real estate development
              firm dedicated to transforming the property landscape with
              innovation, sustainability, and community-focused projects...
            </p>

            <Link href="/about-us">
              <Button className="bg-primary-500 flex justify-center items-center lg:w-fit px-[30px] py-6 text-white border-0 hover:text-primary-200 hover:!bg-blue transition-colors duration-300">
                Learn More
                <span>
                  <ArrowRightCircleIcon className="size-4 ml-2" />
                </span>
              </Button>
            </Link>
          </div>
          <div className="hidden mg:block"></div>
        </div>
        <AboutPattern className="absolute -bottom-28 -left-48 lg:-left-36 scale-75" />
      </section>

      {/* projects section */}
      <section className="w-full">
        <div className="container mx-auto px-2 lg:py-40 py-16">
          <div className="max-w-2xl mx-auto mb-11">
            <p className="flex items-center text-gray-800 border-gray-800 border-l border-r leading-none px-2 w-fit mb-4 uppercase mx-auto">
              <span className="text-primary-400 mr-2">04</span>
              Projects
            </p>

            <h3 className="text-blue font-bold text-3xl lg:text-[45px] leading-tight mb-6 text-center">
              Our Completed and On-going Projects
            </h3>
          </div>
          <div className="container mx-auto px-2 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {projectsData.slice(0, 2).map((item, i) => (
              <PropertyCard item={item} key={i} />
            ))}
          </div>

          <Link href="/projects">
            <Button className="bg-primary-500 flex justify-center items-center lg:w-fit px-[30px] py-6 text-white border-0 hover:text-primary-200 hover:!bg-blue transition-colors duration-300 mx-auto">
              See All Projects
              <span>
                <ArrowRightCircleIcon className="size-4 ml-2" />
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
