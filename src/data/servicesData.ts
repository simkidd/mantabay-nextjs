import { IconType } from "react-icons";

interface Service {
  title: string;
  detail: string;
  icon?: IconType | any;
}
export const services: Service[] = [
  {
    title: "Rent a Home",
    detail:
      "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
  },
  {
    title: "Sale a Home",
    detail:
      "Frameworks to provide a robust synopsis for high level overviews. approaches lverall, Organically grow the holistic.",
  },
  {
    title: "Buy a Home",
    detail:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition.",
  },
  {
    title: "Experience Agent",
    detail:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition.",
  },
  {
    title: "Member Support",
    detail:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition.",
  },
];
