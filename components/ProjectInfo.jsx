/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

const ProjectInfo = ({
  title,
  onClick,
  isVisible,
  info,
  images,
  site,
  code,
  tech,
}) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <button
        onClick={() => onClick(title)}
        className={`${isVisible ? "border-b-neutral-400" : "border-b-neutral-700 text-neutral-400"} flex w-full cursor-pointer justify-between border-b-2  pb-2 text-4xl font-medium md:text-5xl`}
      >
        <span className="truncate"> {title}</span>
        {isVisible ? <RiSubtractFill className="" /> : <MdAdd />}
      </button>
      {isVisible && (
        <>
          <p className="text-neutral-400">{info}</p>
          <div className="flex gap-5">
            <button className="rounded-2xl border-2 border-neutral-600 px-5 py-2 font-semibold uppercase text-neutral-400 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
              <Link href={code} target="_blank">
                code
              </Link>
            </button>
            <button className="rounded-2xl border-2 border-neutral-600 px-5 py-2 font-semibold uppercase text-neutral-400 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
              <Link href={site} target="_blank">
                site
              </Link>
            </button>
          </div>
          {images && (
            <div className="custom-scrollbar flex h-[350px] w-full gap-5 overflow-x-auto">
              {images.web.map((image) => (
                <div className="image-container sm:w-3/4" key={image}>
                  <Image
                    src={image}
                    alt="web-screenshot"
                    width={600}
                    height={300}
                    className="web-screenshot"
                  />
                </div>
              ))}
              {images.mobile.map((image) => (
                <div className="image-container" key={image}>
                  <Image
                    src={image}
                    alt="mobile-screenshot"
                    width={600}
                    height={250}
                    className="mobile-screenshot"
                  />
                </div>
              ))}
            </div>
          )}
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs font-semibold uppercase text-neutral-300">
            {tech.map((item) => (
              <li key={item} className="rounded-xl bg-neutral-700 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
