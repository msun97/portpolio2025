import styled from 'styled-components';

export const ProjectWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  padding-top: 100px;
  background-color: var(--background-primary);
`;
export const StackWrap = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  span {
    font-family: 'LOTTERIADDAG';
    font-size: 64px;
    padding: 50px;
    border-radius: 100px;
  }
  .html {
    border: 5px solid #b7b1f2;
    color: #b7b1f2;
  }
  .css {
    border: 5px solid #fdb7ea;
    color: #fdb7ea;
  }
  .js {
    border: 5px solid #ffdccc;
    color: #ffdccc;
  }
  .react {
    border: 5px solid #fbf3b9;
    color: #fbf3b9;
  }
  .redux {
    border: 5px solid #c0f6ff;
    color: #c0f6ff;
  }
`;

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
  h1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 120px;
    box-sizing: border-box;
    font-size: 128px;
    font-family: 'LOTTERIACHAB';
    p {
      overflow-y: hidden;
    }
    .frontend {
      padding: 0 255px;
    }
  }
  .summary {
    margin-top: 50px;
    font-size: 36px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin-left: 80px;
  }
`;
