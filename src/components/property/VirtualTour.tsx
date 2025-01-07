"use client"
import { IProject } from "@/interfaces/project.interface";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { Pannellum } from "pannellum-react-update";
import { useRef, useState } from "react";

const VirtualTour = ({ data }: { data: IProject }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [currentHfov, setCurrentHfov] = useState(110);
  const thumbnailRefs = useRef<HTMLDivElement[]>([]);

  const scenesArray = [
    {
      sceneName: "Kitchen",
      scenePanoImg: data?.images[0],
      hotSpotsArr: [{ pitch: -9.06119427236566, yaw: -92.7752861238165, transition: 1 }],
    },
    {
      sceneName: "Room 1",
      scenePanoImg: data?.images[1],
      hotSpotsArr: [
        { pitch: -50.943576619160616, yaw: -174.6239076277068, transition: 0 },
        { pitch: -20.48368170929848, yaw: -10.26897749453302, transition: 2 },
      ],
    },
    {
      sceneName: "Poolside",
      scenePanoImg: data?.images[4],
      hotSpotsArr: [{ pitch: -51.354378017934465, yaw: -114.99647316748677, transition: 1 }],
    },
    {
      sceneName: "Kitchen",
      scenePanoImg: data?.images[0],
      hotSpotsArr: [{ pitch: -9.06119427236566, yaw: -92.7752861238165, transition: 1 }],
    },
    {
      sceneName: "Room 1",
      scenePanoImg: data?.images[1],
      hotSpotsArr: [
        { pitch: -50.943576619160616, yaw: -174.6239076277068, transition: 0 },
        { pitch: -20.48368170929848, yaw: -10.26897749453302, transition: 2 },
      ],
    },
    {
      sceneName: "Poolside",
      scenePanoImg: data?.images[4],
      hotSpotsArr: [{ pitch: -51.354378017934465, yaw: -114.99647316748677, transition: 1 }],
    },
    {
      sceneName: "Kitchen",
      scenePanoImg: data?.images[0],
      hotSpotsArr: [{ pitch: -9.06119427236566, yaw: -92.7752861238165, transition: 1 }],
    },
    {
      sceneName: "Room 1",
      scenePanoImg: data?.images[1],
      hotSpotsArr: [
        { pitch: -50.943576619160616, yaw: -174.6239076277068, transition: 0 },
        { pitch: -20.48368170929848, yaw: -10.26897749453302, transition: 2 },
      ],
    },
    {
      sceneName: "Poolside",
      scenePanoImg: data?.images[4],
      hotSpotsArr: [{ pitch: -51.354378017934465, yaw: -114.99647316748677, transition: 1 }],
    },
  ];

  const hotspotIcon = (hotSpotDiv: HTMLElement) => {
    const image = document.createElement("img");
    image.classList.add("image");
    image.setAttribute("width", "30");
    image.setAttribute("height", "30");
    image.setAttribute("src", "https://img.icons8.com/material/4ac144/256/camera.png");
    hotSpotDiv.appendChild(image);
  };

  const handleSceneChange = (newScene: number) => {
    setCurrentScene(newScene);
    // Ensure the active thumbnail is in view
    thumbnailRefs.current[newScene]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  if (!data?.images?.length) {
    return <div>No images available for the virtual tour.</div>;
  }

  const currentSceneData = scenesArray[currentScene];

  return (
    <div className="virtual-tour-container">
      <Pannellum
        width="100%"
        height="500px"
        image={currentSceneData.scenePanoImg}
        title={currentSceneData.sceneName}
        pitch={10}
        yaw={180}
        hfov={currentHfov}
        autoLoad
        compass
        showControls={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        {currentSceneData.hotSpotsArr.map((hotSpot, i) => (
          <Pannellum.Hotspot
            key={i}
            type="custom"
            pitch={hotSpot.pitch}
            yaw={hotSpot.yaw}
            tooltip={hotspotIcon}
            handleClick={() => handleSceneChange(hotSpot.transition)}
          />
        ))}
      </Pannellum>

      <div className="grid lg:grid-cols-9 grid-cols-1 gap-4 p-3 bg-black">
        <div className="col-span-1 lg:col-span-6">
          <div className="w-full flex items-center gap-3 overflow-x-auto scrollbar-none">
            {scenesArray.map((scene, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) thumbnailRefs.current[index] = el;
                }}
                className={`shrink-0 h-14 w-20 border-4 border-transparent hover:border-primary-200 transition duration-300 rounded-sm cursor-pointer ${
                  currentScene === index ? "!border-primary-200" : ""
                }`}
                onClick={() => handleSceneChange(index)}
              >
                <Image
                  src={scene.scenePanoImg}
                  alt={scene.sceneName}
                  width={80}
                  height={80}
                  title={scene.sceneName}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3 flex items-center lg:justify-end justify-around gap-4">
          <button
            className="bg-white rounded-full flex items-center justify-center size-10"
            onClick={() => setCurrentHfov((prev) => Math.max(prev - 10, 30))}
            title="Zoom In"
          >
            <MagnifyingGlassPlusIcon className="size-6" />
          </button>
          <button
            className="bg-white rounded-full flex items-center justify-center size-10"
            onClick={() => setCurrentHfov((prev) => Math.min(prev + 10, 120))}
            title="Zoom Out"
          >
            <MagnifyingGlassMinusIcon className="size-6" />
          </button>
          <button
            className="bg-white rounded-full flex items-center justify-center size-10"
            aria-label="prev"
            title="Previous"
            onClick={() => handleSceneChange(Math.max(currentScene - 1, 0))}
          >
            <ChevronLeftIcon className="size-6" />
          </button>
          <button
            className="bg-white rounded-full flex items-center justify-center size-10"
            aria-label="next"
            title="Next"
            onClick={() =>
              handleSceneChange(Math.min(currentScene + 1, scenesArray.length - 1))
            }
          >
            <ChevronRightIcon className="size-6" />
          </button>
          <button
            className="bg-white rounded-full flex items-center justify-center size-10"
            onClick={() => handleSceneChange(0)}
          >
            <HomeIcon className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
