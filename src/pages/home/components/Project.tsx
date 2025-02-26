import React from 'react';
import { ProjectWrap } from './style';

const Project: React.FC = () => {
  return (
    <ProjectWrap>
      <div className="top">
        <div className="top-right"></div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="category">
            <ul>
              <li className="active">
                <div className="icon">
                  <img src="/rightArrow.svg" />
                </div>
                CLIO Cosmetic 개편
                <ul>
                  <h2>SKILLS</h2>
                  <div className="list">
                    <li>JS</li>
                    <li>React</li>
                    <li>GSAP</li>
                  </div>
                </ul>
              </li>
              <li>
                <div className="icon">
                  <img src="/rightArrow.svg" />
                </div>
                반려인 커뮤니티 앱
                <ul>
                  <h2>SKILLS</h2>
                  <li>JS</li>
                  <li>React</li>
                  <li>GSAP</li>
                </ul>
              </li>
              <li>
                <div className="icon">
                  <img src="/rightArrow.svg" />
                </div>
                OTT Viewee
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
              src="https://www.youtube.com/embed/jWQx2f-CErU"
              title="aespa 에스파 &#39;Whiplash&#39; MV"
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
              <img src="/window-restore.svg" />
            </div>
          </div>
        </div>
      </div>
    </ProjectWrap>
  );
};

export default Project;
