import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/Rooty.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Rooty</h2>
          <h3>Next JS / Styled components / Prisma with postgresql</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Rooty is a freelance mobile marketplace for BCIT students to offer
            their interdisciplinary skillset to each other. The app is designed
            and developed by Full-Stack Web developers in collaboration with D3.
            Rooty provides BCIT students with a safe space to make extra income,
            barter for each other’s services, gain experience, and network
            within BCIT community.
          </p>
          <a
            href="https://github.com/BCIT-Rooty/rootyBCIT"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://rooty-bcit-iota.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> postgresql
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Prisma
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Styled Components
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
      <div className="w-screen flex justify-center items-center">
        <ReactPlayer url="https://www.youtube.com/watch?v=3ycRPYrkLTA" controls={true}/>
      </div>
    </div>
  );
};

export default property;
