import Image from "next/image";
import Logo from "@/assets/logos/Black White Real Estate Logo (4).png";

export default function Loading() {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center relative">
      <div className="h-[100px] animate-pulse">
        <Image
          src={Logo}
          alt="logo"
          width={150}
          height={80}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
