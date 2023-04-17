import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about3.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As a Full-Stack Web Developer, I bring a wealth of knowledge and
            expertise in developing responsive web applications that deliver
            exceptional user experience. My proficiency in Next.js, React.js,
            Express, Javascript, C#, .Net, Python, web sockets, vercel,
            Serverless applications, AWS, Lambda functions, s3 buckets, HTML,
            css, tailwind css, and Agile methodologies, allows me to deliver
            solutions that are not only aesthetically pleasing but also meet the
            most complex business requirements.
          </p>
          <p className="py-2 text-gray-600">
            I am passionate about staying up-to-date with the latest
            technologies and trends, including everything you think is hype, to
            ensure that my clients receive the most innovative and reliable
            solutions. My commitment to excellence, attention to detail, and
            collaborative approach ensures that I consistently deliver projects
            on time and to the highest standard.
          </p>
          <p className="py-2 text-gray-600">
            If you are looking for a Full-Stack Web Developer who can help you
            take your web application to the next level, look no further. I am
            eager to bring my skills and experience to your team and help you
            achieve your business goals.
          </p>
          <Link href="/#skills">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of skills.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
