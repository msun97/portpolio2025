import React from 'react';
import { ContactWrap } from './style';

const Contact: React.FC = () => {
  return (
    <ContactWrap id="contact">
      <div className='wrap'>
        <h1>Contact<br/>Me</h1>
        <div className='contact'>
          <a href='tel:010-2948-0052'>
            <span>H.P</span> 010-2948-0052
          </a>
          <a href='mailto:miseong827@gmail.com'>
            <span>MAIL</span> miseong827@gmail.com
          </a>
          <a href="https://hollypp.tistory.com/">
            <span>BLOG</span> https://hollypp.tistory.com/
          </a>
        </div>
      </div>
    </ContactWrap>
  );
};

export default Contact;
