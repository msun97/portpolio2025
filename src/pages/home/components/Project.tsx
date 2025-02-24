import React from 'react';
import { ProjectWrap } from './style';

const Project: React.FC = () => {
  return (
    <ProjectWrap>
      <div className="top"></div>
      <div className="left">
        <div className="category">
          <ul>
            <li>
              CLIO Cosmetic 개편
              <ul>
                <h2>SKILLS</h2>
                <li>JS</li>
                <li>React</li>
                <li>GSAP</li>
              </ul>
            </li>
            <li>
              반려인 커뮤니티 앱
              <ul>
                <h2>SKILLS</h2>
                <li>JS</li>
                <li>React</li>
                <li>GSAP</li>
              </ul>
            </li>
            <li>
              OTT Viewing
              <ul>
                <h2>SKILLS</h2>
                <li>JS</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="video">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/jWQx2f-CErU"
            title="aespa 에스파 &#39;Whiplash&#39; MV"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="link">
          <div className="github">
            <img src="/Github-Dark.png" />
          </div>
          <div className="site">
            <img src="/chrome.png" />
          </div>
        </div>
      </div>
    </ProjectWrap>
  );
};

export default Project;
