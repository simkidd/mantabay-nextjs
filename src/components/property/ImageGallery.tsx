"use client";
import { IProject } from "@/interfaces/project.interface";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useRef, useState } from "react";

const ImageGallery = ({ data }: { data: IProject }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const thumbnailRefs = useRef<HTMLDivElement[]>([]);

  if (!data?.images || data.images.length === 0) {
    return <div>No images available</div>;
  }

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + data.images.length) % data.images.length
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % data.images.length);
    }
  };

  const handleImageChange = (newImage: number) => {
    setSelectedImageIndex(newImage);
    // Ensure the active thumbnail is in view
    thumbnailRefs.current[newImage]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="w-full relative">
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center z-50">
          <div className="w-full h-16">
            <button
              className="absolute top-2 right-2 text-white bg-black p-2 rounded-full"
              onClick={() => setSelectedImageIndex(null)}
            >
              <XMarkIcon className="size-6" />
            </button>
          </div>
          <div className="relative max-w-4xl w-full my-auto">
            <Image
              src={data.images[selectedImageIndex]}
              alt={`Selected Image ${selectedImageIndex + 1}`}
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              loading="lazy"
            />

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all"
              onClick={() =>
                handleImageChange(
                  Math.max(
                    (selectedImageIndex - 1 + data.images.length) %
                      data.images.length
                  )
                )
              }
            >
              <ChevronLeftIcon className="size-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all"
              onClick={() =>
                handleImageChange(
                  Math.max((selectedImageIndex + 1) % data.images.length)
                )
              }
            >
              <ChevronRightIcon className="size-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="w-full flex items-center lg:justify-center gap-2 mt-auto my-8 overflow-x-auto scrollbar-none px-4">
            {data.images.map((image, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) thumbnailRefs.current[index] = el;
                }}
                className={`shrink-0 w-24 cursor-pointer border-4 border-transparent hover:border-primary-200 transition duration-300 rounded-md overflow-hidden ${
                  selectedImageIndex === index ? "border-primary-200" : ""
                }`}
                onClick={() => handleImageChange(index)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Display the main image */}
      <div className="mb-4">
        <Image
          src={data.images[0]}
          alt={data.name || "Main Image"}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer"
          priority
          onClick={() => handleImageChange(0)}
        />
      </div>

      {/* Display the rest of the gallery images */}
      <div className="grid grid-cols-5 gap-4">
        {data.images.slice(1).map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 2}`}
            width={500}
            height={500}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer"
            loading="lazy"
            onClick={() => handleImageChange(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
