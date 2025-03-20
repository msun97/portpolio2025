import React from 'react';
import TecStack from './components/tecStack';
import Home from './components/home';
  import { MainWrap } from './style';
import Project from './components/Project';
import Introduction from './components/introduction';
import Contact from './components/contact';

const Index: React.FC = () => {
  return (
    <MainWrap>
      <div className="home">
        <Home />
        <TecStack />
      </div>
      <Introduction/>
      <Project />
      <Contact />
    </MainWrap>
  );
};

export default Index;
