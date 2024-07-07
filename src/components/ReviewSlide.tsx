"use client";
import { reviews } from "@/data/reviewData";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "@/styles/review.scss";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/scss/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

const ReviewSlide = () => {
  return (
    <Swiper
      className="!pb-10 !overflow-visible"
      spaceBetween={10}
      slidesPerView={1}
      modules={[Autoplay, Pagination, Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}      pagination={{ dynamicBullets: true }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      }}
    >
      {reviews.map((review, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col">
            <div className="px-8 py-6 bg-white mb-4 rounded-tl-[60px] rounded-tr-[60px] rounded-br-[60px] w-full h-fit">
              <p className="mt-4 mb-7 text-gray-600 text-[15px]">
                {review.text}
              </p>
            </div>
            <div className="flex items-center">
              <div className="size-20 rounded-full mr-3 overflow-hidden border-4 border-primary-100">
                <Image
                  src={review.image}
                  alt="review-img"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-base font-semibold text-blue">
                  {review.author.name}
                </p>
                <p className="font-medium text-sm text-primary-500 leading-none">
                  {review.author.role}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next hover:!bg-primary-400 hover:!text-white !hidden lg:!flex">
        <ArrowRightIcon className="!size-6" />
      </div>
      <div className="swiper-button-prev hover:!bg-primary-400 hover:!text-white !hidden lg:!flex">
        <ArrowLeftIcon className="!size-6" />
      </div>
    </Swiper>
  );
};

export default ReviewSlide;
