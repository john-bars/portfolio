import Image from "next/image";
import React from "react";
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

const ProjectInfo = ({ title, onClick, isVisible, info, images }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <button
        onClick={() => onClick(title)}
        className={`${isVisible ? "border-b-neutral-400" : "border-b-neutral-700 text-neutral-400"} flex w-full cursor-pointer justify-between border-b-2  pb-2 text-4xl font-medium md:text-5xl`}
      >
        <span> {title}</span>
        {isVisible ? <RiSubtractFill className="" /> : <MdAdd />}
      </button>
      {isVisible && (
        <>
          <p className="mb-5">{info}</p>
          {images && (
            <div className="custom-scrollbar flex h-[350px] w-full gap-5 overflow-x-auto">
              {images.web.map((image) => (
                <div className="image-container" key={image}>
                  <Image
                    src={image}
                    alt="web-screenshot"
                    width={600}
                    height={300}
                    className="image-mobile md:image-tablet-web"
                  />
                </div>
              ))}
              {images.mobile.map((image) => (
                <div className="image-container" key={image}>
                  <Image
                    src={image}
                    alt="mobile-screenshot"
                    width={600}
                    height={300}
                    className="image-tablet-web"
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
