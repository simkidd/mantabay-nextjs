import { IProject } from "@/interfaces/project.interface";

export const projectsData: IProject[] = [
  {
    id: "1",
    name: "Magnificent luxury 5-Bedroom Duplex  with breathtaking views, swimming pool and parking space.",
    description:
      "A luxurious 5-bedroom duplex with modern amenities and spacious living areas.",
    images: [
      "/images/projects/DP_1 - Photo.jpg",
      "/images/projects/DP_2 - Photo.jpg",
      "/images/projects/DP_3 - Photo.jpg",
      "/images/projects/DP_4 - Photo.jpg",
      "/images/projects/DP_5 - Photo.jpg",
      "/images/projects/DP_6 - Photo.jpg",
      "/images/projects/DP_7 - Photo.jpg",
    ],
    status: "In Construction",
    location: "Port Harcourt",
    slug: "",
    rooms: [
      {
        name: "Image one",
        url: "/images/projects/DP_1 - Photo.jpg",
      },
      {
        name: "Image two",
        url: "/images/projects/DP_2 - Photo.jpg",
      },
    ],
  },
  {
    id: "2",
    name: "5-Bedroom Duplex",
    description:
      "A luxurious 5-bedroom duplex with modern amenities and spacious living areas",
    images: [
      "/images/projects/A_2 - Photo.jpg",
      "/images/projects/A_1 - Photo.jpg",
      "/images/projects/A_3 - Photo.jpg",
      "/images/projects/wood_4 - Photo.jpg",
    ],
    status: "Completed",
    location: "Port Harcourt",
    slug: "",
    rooms: [],
  },
];
