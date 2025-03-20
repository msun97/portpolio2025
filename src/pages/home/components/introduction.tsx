import React from 'react';
import { IntroWrap } from './style';

const Introduction: React.FC = () => {
  return (
    <IntroWrap>
      <div className="wrap">
        <h1>Introduction</h1>
        <div className="content">
          Hello, World!
          <br />
          안녕하세요. UI/UX 디자인, 웹 퍼블리싱, 프론트엔드 개발을 아우르는
          크리에이티브한 웹 개발자, 김미선입니다.
          <br />
          디자인 감각과 탄탄한 개발 역량을 바탕으로 세련되고 사용성 높은 웹
          경험을 만드는 것을 목표로 합니다.
          <br />
          Figma로 섬세한 UI를 설계하고, HTML & CSS로 완벽한 퍼블리싱을 구현하며,
          React를 활용한 동적인 웹 애플리케이션을 개발할 수 있습니다.
          <br />
          최신 트렌드를 반영한 디자인과 클린한 코드 작성을 중요하게 생각하며,
          사용자 중심의 직관적인 인터페이스를 만들기 위해 항상 고민합니다.
          <br />
          <br />
          🚀 더 나은 개발을 위한 경험과 도전을 멈추지 않겠습니다!
        </div>
        <div className="skills">
          <div className="figma">
            <img src="/figma" />
            <p>UI/UX Designeer</p>
          </div>
          <div className="html">
            <img src="/html" />
            <p>Web Publisher</p>
          </div>
          <div className="react">
            <img src="/react" />
            <p>Front-end Developer</p>
          </div>
        </div>
      </div>
    </IntroWrap>
  );
};

export default Introduction;
