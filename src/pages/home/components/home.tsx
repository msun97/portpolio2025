import React from 'react';
import { HomeWrap } from './style';

const Home: React.FC = () => {
  return (
    <HomeWrap id="home">
      <h1>
        <p className="frontend">FRONTEND </p>
        <p className="portfolio">PORTFOLIO</p>
      </h1>
      <div className="summary">
        <p>✉ miseong827@gmail.com</p>
        <p>📞 010-2948-0052</p>
        <p>📩 이력서 다운로드 받기</p>
      </div>
    </HomeWrap>
  );
};

export default Home;
