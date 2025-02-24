import React from 'react';
import { StackWrap } from './style';

const TecStack: React.FC = () => {
  return (
    <StackWrap>
      <span className="html">Html</span>
      <span className="css">CSS</span>
      <span className="js">JavaScript</span>
      <span className="react">React</span>
      <span className="redux">Redux</span>
    </StackWrap>
  );
};

export default TecStack;
