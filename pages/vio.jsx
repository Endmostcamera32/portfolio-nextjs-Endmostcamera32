import Image from "next/image";
import React from "react";
import netflixImg from "../public/assets/projects/VIO.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={netflixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">VIO Sustainability</h2>
          <h3>Next.js / Tailwind / postgresql</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mb-5">
            Introducing our Trash Tracking Dashboard - a powerful tool for
            tracking and analyzing waste management data in real-time. Our
            dashboard is designed to help waste management companies,
            municipalities, and other organizations track and manage waste
            disposal activities more efficiently and effectively.
          </p>
          <p className="mb-5">
            With our Trash Tracking Dashboard, you can easily monitor waste
            generation, collection, transportation, and disposal activities in
            real-time. Our dashboard provides you with a comprehensive overview
            of your waste management operations, allowing you to identify areas
            for improvement and optimize your processes for maximum efficiency.
          </p>
          <p className="mb-5">
            Our dashboard offers a range of powerful features, including
            interactive data visualization tools, customizable reports, and
            alerts for important events and activities. You can easily track key
            metrics such as waste volume, disposal costs, recycling rates, and
            more, helping you make informed decisions about your waste
            management strategies.
          </p>
          <p className="mb-5">
            Our dashboard is also highly customizable, allowing you to tailor it
            to your specific needs and requirements. You can choose which data
            to display, create custom reports and graphs, and even integrate the
            dashboard with other systems and applications.
          </p>
          <p className="font-bold">
            No code or demo is available at this time.
          </p>
          {/* <a
            href='https://github.com/fireclint/netflix-react-tailwind'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a> */}
          {/* <a
            href='https://fireclint.github.io/netflix-react-tailwind/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
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

export default netflix;
