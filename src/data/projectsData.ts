export interface Project {
  name: string;
  description: string;
  images: string[];
  status: ProjectStatusEnum;
  location: string;
}

export enum ProjectStatusEnum {
  Development = "In Development",
  Construction = "In Construction",
  Completed = "Completed",
}

export const projectsData: Project[] = [
  {
    name: "5-Bedroom Duplex",
    description:
      "Luxury 5-Bedroom Smart Duplex with Swimming Pool and Cinema",
    images: [
      "/images/projects/DP_1 - Photo.jpg",
      "/images/projects/DP_2 - Photo.jpg",
      "/images/projects/DP_3 - Photo.jpg",
      "/images/projects/DP_4 - Photo.jpg",
      "/images/projects/DP_5 - Photo.jpg",
      "/images/projects/DP_6 - Photo.jpg",
      "/images/projects/DP_7 - Photo.jpg",
    ],
    status: ProjectStatusEnum.Construction,
    location: "Port Harcourt",
  },
  {
    name: "5-Bedroom Duplex",
    description:
      "Executive 5-Bedroom Garden Duplex Estate",
    images: [
      "/images/projects/A_2 - Photo.jpg",
      "/images/projects/A_1 - Photo.jpg",
      "/images/projects/A_3 - Photo.jpg",
      "/images/projects/wood_4 - Photo.jpg",
    ],
    status: ProjectStatusEnum.Completed,
    location: "Port Harcourt",
  },
];
