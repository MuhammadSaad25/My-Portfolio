import Image from "next/image";
import myImage from "@/img/hero/myimage.png";

const Images = () => {
  return (
    <div>
      <div className="flex md:h-[90vh] h-[50vh] lg:w-[50vw] w-[90vw]  lg:p-11 p-3 relative">
        <div className="hero_box1 flex justify-center items-center w-full">
          <div className="w-full h-full flex justify-start items-start ">
            <Image
              src={myImage}
              alt="my-Image"
              className="myImage w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
