import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/Rooty.png';
import cryptoImg from '../public/assets/projects/Lento.png'
import netflixImg from '../public/assets/projects/VIO.png'
import snip from '../public/assets/projects/snip2.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Rooty'
            backgroundImg={propertyImg}
            projectUrl='/rooty'
            tech='Next.js'
          />
          <ProjectItem
            title='Lento Dating'
            backgroundImg={cryptoImg}
            projectUrl='/lento'
            tech='Express.js with Ejs pages'

          />
          <ProjectItem
            title='VIO Sustainability'
            backgroundImg={netflixImg}
            projectUrl='/vio'
            tech='Next.js'

          />
          <ProjectItem
            title='Code Snippets'
            backgroundImg={snip}
            projectUrl='/codeSnip'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
