import React, { useState } from 'react';
import { ProjectWrap } from './style';

const Project: React.FC = () => {
  const projectList = [
    {
      id: 1,
      title: 'CLIO Cosmetic 개편',
      videoLink: 'https://www.youtube.com/embed/jWQx2f-CErU',
      githubLink:
        'https://github.com/msun97/project1--react-master?tab=readme-ov-file',
      link: 'https://project1-react-master.vercel.app/',
      skills: ['JS', 'React', 'GSAP'],
    },
    {
      id: 2,
      title: '반려인 커뮤니티 앱',
      videoLink: 'https://www.youtube.com/embed/jWQx2f-CErU',
      githubLink: 'https://cliocosmetic.com',
      link: 'https://github.com/',
      skills: ['JS', 'React', 'GSAP'],
    },
    {
      id: 3,
      title: 'OTT Viewee',
      videoLink: 'https://www.youtube.com/embed/jWQx2f-CErU',
      githubLink: 'https://github.com/zio-s/project-viewee',
      link: 'https://viewee.vercel.app/',
      skills: ['JS', 'React', 'Redux'],
    },
    {
      id: 4,
      title: 'Van Cleef 쇼핑몰 개편',
      videoLink: 'https://www.youtube.com/embed/jWQx2f-CErU',
      githubLink: 'https://cliocosmetic.com',
      link: 'https://github.com/',
      skills: ['Next.js', 'React', 'Redux', 'Gsap'],
    },
  ];
  const [isActive, setIsActive] = useState(1);
  const handleClick = id => {
    setIsActive(id);
  };
  return (
    <ProjectWrap>
      <div className="wrap">
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
              <iframe
                src="https://www.youtube.com/embed/jWQx2f-CErU"
                title="aespa 에스파 &#39;Whiplash&#39; MV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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
