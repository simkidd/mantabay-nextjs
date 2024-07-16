import { Team } from "@/data/teamData";
import Image from "next/image";
import React from "react";

const TeamCard: React.FC<{
  team: Team;
}> = ({ team }) => {
  return (
    <div className="w-full bg-gray-100 rounded-bl rounded-br group overflow-hidden">
      <div className="w-full h-[400px] md:h-[350px] lg:h-[300px] overflow-hidden">
        <Image
          src={team?.image}
          alt={team?.name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2 py-[25px] group-hover:bg-primary-400 transition-colors duration-300 ease-in-out">
        <p className="text-blue text-lg font-semibold group-hover:text-white">
          {team?.name}
        </p>
        <p className="font-source text-primary-500 group-hover:text-white">
          {team?.role}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
