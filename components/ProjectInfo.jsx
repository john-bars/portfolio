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
        <div>
          <div className="mb-5">{info}</div>
          <div className="relative flex gap-5 overflow-x-auto">
            <Image
              src={images.web}
              alt="desktop-screenshot"
              width={640}
              height={400}
              className="z-10 h-auto w-[50vw]"
            />
            <Image
              src={images.tablet}
              alt="desktop-screenshot"
              width={640}
              height={200}
              className="z-10 h-auto w-3/4"
            />
            <Image
              src={images.mobile}
              alt="desktop-screenshot"
              width={640}
              height={200}
              className="z-10 h-auto w-3/4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;
