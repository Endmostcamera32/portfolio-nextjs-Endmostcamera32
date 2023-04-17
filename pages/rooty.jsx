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
          <h2>Overview:</h2>
          <p>
            Rooty is a freelance mobile marketplace for BCIT students to offer
            their interdisciplinary skillset to each other. The app is designed
            and developed by Full-Stack Web developers in collaboration with D3.
            Rooty provides BCIT students with a safe space to make extra income,
            barter for each other&#39;s services, gain experience, and network
            within BCIT community.
          </p>
          <h2 className="mt-16 mb-3">Problems and Solutions</h2>
          <h4>Cheating:</h4>
          <p>
            Rooty aimed to provide a fair and equal opportunity for students to
            exchange their skillsets. However, the platform faced the challenge
            of preventing students from exploiting the platform for cheating
            purposes, such as purchasing assignments or hiring someone to
            complete coursework for them. This not only undermined the integrity
            of the platform but also affected the educational experience of
            honest students.
          </p>
          <h4>Cheating Prevention:</h4>
          <p className="mb-16">
            To prevent cheating, the platform implemented a robust verification
            process that includes identity verification and academic background
            checks. The process helps to ensure that only eligible students can
            use the platform and reduces the likelihood of cheating. Moreover, a
            reporting mechanism was also introduced to enable students to report
            any suspected cheating activities. The platform&#39;s moderation team
            regularly reviews these reports and takes appropriate action, such
            as suspending the user&#39;s account, to maintain the integrity of the
            platform.
          </p>
          <h4>Privacy Concerns:</h4>
          <p>
            As a marketplace for exchanging skillsets, Rooty dealt with
            sensitive information, such as students&#39; personal and academic data.
            Ensuring the privacy and security of this information was a
            significant challenge as any data breach or misuse of information
            could harm the reputation of the platform and its users.
          </p>
          <h4>To ensure the privacy</h4>
          <p className="mb-5">
            Data Encryption: All sensitive data, such as personal and academic
            information, is encrypted before it is stored on the platform. This
            ensures that the data is secure and cannot be accessed by
            unauthorized parties.
          </p>
          <p className="mb-5">
            Access Control: The platform implements strict access controls to
            ensure that only authorized parties can access sensitive
            information. For example, personal information is only visible to
            the owner of the account and other users who have been granted
            permission by the owner.
          </p>
          <p className="mb-5">
            Data Retention Policy: The platform has a clear and concise data
            retention policy that outlines the length of time data is stored and
            the conditions under which it is deleted. This helps to ensure that
            sensitive information is not retained for longer than necessary.
          </p>
          <Link href="http://portfolio.renatadzotova.ca/Rooty/">
            <p className="underline cursor-pointer">
              For additional information you can go to my friend&#39;s website
            </p>
          </Link>

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
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-80">
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
        <ReactPlayer
          url="https://www.youtube.com/watch?v=3ycRPYrkLTA"
          controls={true}
        />
      </div>
    </div>
  );
};

export default property;
