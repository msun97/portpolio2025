import React, { useState } from 'react';
import { ProjectWrap } from './style';

const Project: React.FC = () => {
  const projectList = [
    {
      id: 1,
      title: 'CLIO Cosmetic 개편',
      videoLink: 'https://www.youtube.com/embed/MHjbMCCVN08',
      githubLink:
        'https://github.com/msun97/project1--react-master?tab=readme-ov-file',
      link: 'https://project1-react-master.vercel.app/',
      skills: ['JS', 'React', 'GSAP'],
    },
    // {
    //   id: 2,
    //   title: '감정 분석 일기장',
    //   videoLink: 'https://www.youtube.com/embed/jWQx2f-CErU',
    //   githubLink: 'https://cliocosmetic.com',
    //   link: 'https://github.com/',
    //   skills: ['Next.js', 'TS', 'React', 'Redux', 'GSAP'],
    // },
    {
      id: 2,
      title: 'OTT Viewee', 
      // videoLink: 'https://www.youtube.com/embed/jWQx2f-CErU',
      githubLink: 'https://github.com/zio-s/project-viewee',
      link: 'https://viewee.vercel.app/',
      skills: ['JS', 'React', 'Redux'],
    },
    {
      id: 3,
      title: 'Van Cleef 쇼핑몰 개편',
      // videoLink: 'https://www.youtube.com/embed/jWQx2f-CErU',
      githubLink: 'https://github.com/msun97/project-vancleef',
      link: 'https://project-vancleef.vercel.app/',
      skills: ['JS', 'React', 'Redux', 'Gsap','tailwindCSS'],
    },
  ];
  const [isActive, setIsActive] = useState(1);
  const handleClick = id => {
    setIsActive(id);
  };
  return (
    <ProjectWrap>
      <div className="wrap" id='project'>
        <div className="top">
          <div className="top-right"></div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="category">
              <ul>
                {projectList.map(project => (
                  <li
                    key={project.id}
                    className={`${isActive === project.id ? 'active' : ''}`}
                    onClick={() => handleClick(project.id)}
                  >
                    <div className="icon">
                      <img src="/rightArrow.svg" />
                    </div>
                    {project.title}
                    <ul>
                      <h2>SKILLS</h2>
                      <div className="list">
                        {project.skills.map(skill => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </div>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="video">
              {
                projectList[isActive - 1].videoLink?              <iframe
                src={projectList[isActive - 1].videoLink}
                title={projectList[isActive - 1].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe> : <div className='no-results'></div>
              }

            </div>
            {projectList.map(
              project =>
                project.id === isActive && (
                  <div className="link">
                    <div className="github">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {' '}
                        <img src="/Github-Dark.png" />
                      </a>
                    </div>
                    <div className="site">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {' '}
                        <img src="/window-restore.svg" />
                      </a>
                    </div>
                  </div>
                ),
            )}
            <div className="link">
              <div className="github"></div>
              <div className="site"></div>
            </div>
          </div>
        </div>
      </div>
    </ProjectWrap>
  );
};

export default Project;
