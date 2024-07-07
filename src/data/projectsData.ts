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
    status: ProjectStatusEnum.Construction,
    location: "Port Harcourt",
  },
  {
    name: "5-Bedroom Duplex",
    description:
      "A luxurious 5-bedroom duplex with modern amenities and spacious living areas",
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
