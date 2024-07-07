export interface Team {
  name: string;
  role: string;
  image: string;
  socials?: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

export const team: Team[] = [
  {
    name: "OKOROMA, Jeremiah",
    role: "Director",
    image: "/images/team/WhatsApp Image 2024-07-06 at 19.55.12_dc7b9edb.jpg",
  },
  {
    name: "OYIM, Jonathan",
    role: "Head, Operations",
    image: "/images/team/OYIM, Jonathan.jpg",
  },
  {
    name: "BEKINBO, Samuel",
    role: "Head, Legal Team",
    image: "/images/team/BEKINBO, Samuel.jpg",
  },
  {
    name: "CHUKWUJEKWE, Helen",
    role: "Head, HSE",
    image: "/images/team/WhatsApp Image 2024-07-06 at 20.58.37_874f19b2.jpg",
  },
];
