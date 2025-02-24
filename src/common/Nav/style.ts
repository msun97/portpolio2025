import styled from 'styled-components';

const NavWrap = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  background-color: #898989;
  margin: 0;
  padding: 24px 0;
  z-index: 1000;
  .ulWrap {
    position: absolute;
    top: 0;
    left: 100%;
    width: 325px;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 24px;
    font-size: var(--font-title-m-tablet);
    color: var(--gray-80);
    font-weight: bold;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 999;
  }
  .ulWrapOn {
    transform: translateX(0);
    opacity: 1;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 50px;
    li {
      color: var(--gray-90);
    }
  }
  .hamburger {
    cursor: pointer;
    z-index: 1000;
    img {
      width: 100%;
    }
  }
`;

export default NavWrap;
