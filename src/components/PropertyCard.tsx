import { Project, ProjectStatusEnum } from "@/data/projectsData";
import Image from "next/image";
import React from "react";

const PropertyCard: React.FC<{ item: Project }> = ({ item }) => {
  const statusChip = (status: ProjectStatusEnum) => {
    switch (status) {
      case ProjectStatusEnum.Development:
        return "bg-yellow-100 text-yellow-600";
      case ProjectStatusEnum.Construction:
        return "bg-blue-500 text-white";
      case ProjectStatusEnum.Completed:
        return "bg-green-500 text-white";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="w-full group">
      <div className="w-full rounded-tr-2xl rounded-tl-2xl overflow-hidden h-64">
        <Image
          src={item?.images[0]}
          alt={item?.name}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300 ease-in-out"
        />
      </div>
      <div className="px-3 py-4">
        <h4 className="font-bold text-xl mb-2">{item?.name}</h4>
        <p className="text-gray-700 text-base mb-4">{item?.description}</p>

        <p>
          <span
            className={`inline-block text-sm px-2 py-1 rounded-full font-semibold ${statusChip(
              item?.status as ProjectStatusEnum
            )}`}
          >
            {item?.status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
