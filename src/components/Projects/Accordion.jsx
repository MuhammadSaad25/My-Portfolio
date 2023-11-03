import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import projectData from "@/data/projects";

const Accordion = ({ isDarkMode }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full flex flex-col gap-5 ">
      <h1 className="text-sky-400 md:text-5xl text-2xl font-bold md:[p-11] p-6 ">
        Projects
      </h1>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        className="carousel1 rounded-2xl"
        responsive={responsive}
        showDots={true}
        swipeable={true}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      >
        {projectData.length > 0 &&
          projectData?.map((item, index) => (
            <div
              key={index}
              className="h-[800px] w-full flex flex-col items-center relative overflow-hidden"
            >
              <Image
                className="h-full w-full"
                width={10000}
                height={10000}
                // src={item?.main_image}
                src={item.previewImg}
                alt=""
              />

              {/* >>>>>>>>>>>>>  uper layer >>>>>>>>>>>>>>>> */}
              <div
                className={`shadow-lg shadow-sky-400 absolute z-50 md:w-[650px] w-[300px] left-[5%] bottom-[60px] flex flex-col justify-end items-start gap-5  p-5 rounded-2xl , ${
                  isDarkMode ? "dark" : "light"
                }`}
              >
                <h1 className="md:text-5xl text-2xl font-bold text-sky-400">
                  {item.title}
                </h1>

                {item && item.sub_image && (
                  <Image
                    src={item.sub_image}
                    alt=""
                    width={10000}
                    height={10000}
                    className="h-[216px] w-[432px]"
                  />
                )}

                <p>{item.description}</p>
                <p className="font-bold">Tech: {item.techUsed}</p>
                <div className="h-[50px] w-full flex justify-center items-center gap-5">
                  <Link
                    target="_blank"
                    href={item.repoLink}
                    className="border border-sky-400 py-3 px-5 rounded-full font-bold"
                  >
                    Repo Link
                  </Link>
                  <Link
                    target="_blank"
                    href={item.hostedLink}
                    className="border border-sky-400 py-3 px-5 rounded-full font-bold"
                  >
                    Visit
                  </Link>
                </div>
              </div>

              {/* >>>>>>>>>>>>>  uper layer ennd>>>>>>>>>>>>>>>> */}
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Accordion;
