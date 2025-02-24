import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavWrap from './style.ts';

const Layout: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => setIsActive(!isActive);

  return (
    <>
      <NavWrap>
        <img
          src={isActive ? '/times.png' : '/hambuger.png'}
          onClick={handleToggle}
          className="hamburger"
          alt="menu"
        />

        <div className={isActive ? 'ulWrap ulWrapOn' : 'ulWrap'}>
          <ul>
            <a href="#home" onClick={handleToggle}>
              <li>Home</li>
            </a>
            <a href="#project" onClick={handleToggle}>
              <li>Project</li>
            </a>
            <a href="#contact" onClick={handleToggle}>
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </NavWrap>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
