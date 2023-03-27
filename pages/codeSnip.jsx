import Image from "next/image";
import React from "react";
import snip from "../public/assets/projects/snip.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const twitch = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={snip}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Code snippets</h2>
          <h3>Next JS / Tailwind / Next Auth</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Code Snippets is a convenient and user-friendly app designed for
            programmers and developers to share and access code snippets quickly
            and easily. With this app, users can publish their code snippets on
            the web for others to use, or they can browse through existing
            snippets to find solutions to common programming problems.
          </p>
          <p>
            The app&apos;s interface is simple and intuitive, making it easy for
            users to upload and manage their code snippets. Users can add tags
            and descriptions to their code snippets, making them more searchable
            and accessible to others. Additionally, users can save snippets that
            they find useful, creating a personalized library of code that they
            can refer to later.
          </p>
          <p>
            Code Snippets allows users to share their knowledge and expertise
            with a wider audience, helping to foster a collaborative community
            of programmers and developers. With the ability to easily search for
            and access code snippets, developers can save time and improve their
            coding efficiency, while also gaining exposure to new programming
            concepts and techniques.
          </p>
          <p>
            Whether you&apos;re a beginner looking for examples of how to implement
            certain programming features or an experienced developer looking to
            share your code with others, Code Snippets is the perfect app to
            help you achieve your goals.
          </p>
          {/* <a
            href="https://twitch-nextjs-tailwind.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a> */}
          <a
            href="https://github.com/Endmostcamera32/Code_Examples_Sohrab"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Github Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Auth
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;
