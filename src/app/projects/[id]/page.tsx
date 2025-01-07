import VirtualTour from "@/components/property/VirtualTour";
import { projectsData } from "@/data/projectsData";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full font-kufam overflow-x-hidden">
      <section className="w-full relative bg-projects-bg pt-20 lg:pt-48 pb-4 bg-no-repeat bg-center bg-cover hero">
        <div className="container mx-auto px-2 py-20 pb-4 grid grid-cols-1 lg:grid-cols-4 gap-16 ">
          <div className="flex flex-col w-full z-[1] col-span-1 lg:col-span-3">
            <Link href="/projects">
              <div className="flex items-end text-black bg-hero-bg w-fit px-3 py-2">
                <span>
                  <ArrowLeftCircleIcon className="size-4 mr-1" />
                </span>
                <p className="uppercase text-sm leading-none">Go back</p>
              </div>
            </Link>

            <h1 className="text-white font-bold text-[28px] md:text-[33px] leading-normal my-9">
              {project?.name}
            </h1>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </section>

      <section className="w-full relative">
        <div className="container mx-auto px-2 py-20 pb-4 grid grid-cols-1 lg:grid-cols-4 gap-12 ">
          <div className="flex flex-col w-full col-span-1 lg:col-span-3">
            {/* gallery images */}
            <div>
              <div className="mb-4">
                <Image
                  src={project?.images[0]}
                  alt={project?.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300 ease-in-out"
                />
              </div>

              <div className="grid grid-cols-5 gap-4">
                {project?.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={project?.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300 ease-in-out"
                  />
                ))}
              </div>
            </div>

            {/* description */}
            <section className="mt-16">
              <h3 className="mb-4 font-bold text-lg text-primary">
                Description
              </h3>

              <div className="space-y-4">
                <p>
                  Sector Douvaine (74140), for sale apartment located 5 minutes’
                  walk from the town center, 30 minutes from Geneva and 20
                  minutes from Thonon-les-Bains. Come and discover this
                  magnificent atypical luxury type 5 apartment, surface area 104
                  m² carrez, (114 m² usable), large south-facing terrace with
                  breathtaking views of the Voirons mountain range, secure
                  garage and private parking space.
                </p>
                <p>
                  Comprising: 1 entrance hall (11 m²), 1 living
                  room/lounge/dining room (41.25 m²), 1 bathroom (4.50 m²), 1
                  shower room (2 m²), 2 WCs (1.10 m² and 1.90 m²), 4 bedrooms
                  (12 -11 -10.50-10.50 m²), 1 terrace (45 m²), 1 garage (13 m²),
                  1 private parking space.
                </p>

                <p>
                  Find all our properties (houses, villas, apartments,
                  commercial walls, businesses and buildings) for sale in Ain,
                  Jura, Côte d’or, Saône-et-Loire, Savoie and Haute-Savoie on
                  our website www.3Dimmobilier.fr. If you’re looking to sell a
                  property in the DOUVAINE area, we can offer you a free
                  valuation. To do so, contact us directly from our website on
                  the “For sale” page.
                </p>
              </div>
            </section>

            {/* virtual tour */}
            <section className="mt-16">
              <h3 className="mb-4 font-bold text-lg text-primary">
                Virtual tour
              </h3>

              <div>
                <VirtualTour data={project} />
              </div>
            </section>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
