
import React from 'react';
import motton from '../public/assets/projects/motton.png'
import qwizeen from '../public/assets/projects/qwizeen.png'
import huda from '../public/assets/projects/huda.jpg'
import food from '../public/assets/projects/ffood.jpg'
import eatte from '../public/assets/projects/eatte.jpg'
import netflix from '../public/assets/projects/netflix.jpg'

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
            title='Motton Academy'
            backgroundImg={motton}
            projectUrl='/motton'
            tech='Angular'
          />
          <ProjectItem
            title='Qwizeen'
            backgroundImg={qwizeen}
            projectUrl='/qwizeen'
            tech='Nuxt3'

          />

          <ProjectItem
            title='Food App'
            backgroundImg={netflix}
            projectUrl='/netflix'
            tech='React js'

          />
          <ProjectItem
            title='EATTE'
            backgroundImg={eatte}
            projectUrl='/eatte'
            tech='Nuxt3'

          />
          <ProjectItem
            title='Huda App'
            backgroundImg={huda}
            projectUrl='/huda'
            tech='React native'

          />
          <ProjectItem
            title='Food App'
            backgroundImg={food}
            projectUrl='/twitch'
            tech='React native'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
