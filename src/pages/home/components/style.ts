import styled from 'styled-components';

export const ContactWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 900px;
  var(--background-primary); 
  .wrap {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 900;
    height: 100%;
    max-height: 900px;
      padding: 120px 160px;
          h1{
    font-family: 'LOTTERIACHAB';
    font-size: 128px;
    margin-bottom: 35px;
    }
    .contact{
    font-family: 'pretendard';
    font-size: 40px;
    display: flex;
    gap: 24px 450px;
    flex-wrap: wrap;
    }
}
`

export const IntroWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 900px;
  var(--background-primary); 
  .wrap {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 900;
    height: 100%;
    max-height: 900px;
      padding: 120px 160px;
    h1{
    font-family: 'LOTTERIACHAB';
    font-size: 64px;
    }
    .content{
    margin-top: 60px;
    font-size: 20px;
    font-weight: 300;
    font-family: 'pretendard';
    margin-bottom: 80px;
    }
    .skills{
    display: flex;
    gap: 200px;
    width: 100%;
    justify-content: center;
    div{
    width: 220px;
    height: 270px;
    border-radius: 20px;
    border: 1px solid #AEAEAE;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
    svg{
    width: 65px;
    height: 65px;
    }
    p{
    font-size: 20px;
    font-family: 'pretendard'
    }
    }
    }
  }`

export const ProjectWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding:0   80px;
  width: 100%;  
  max-height: 900px;
  var(--background-primary); 
  .wrap {
    // background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 900;
    height: 100%;
    max-height: 900px;
    padding: 30px 80px;
  }
  .top {
    width: 100%;
    border-top: 1px solid white;
    box-sizing: border-box;
    padding: 0 80px;
    margin-top: 120px;
    position: relative;
    .top-right {
      width: calc(20% + 1px);
      border-right: 1px solid white;
      height: 120px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .bottom {
    display: flex;
    height: 100%;
    .left {
      width: 20%;
      height: 100%;
      .category {
        margin-top: 30px;
        align-items: center;
        ul {
          display: flex;
          flex-direction: column;
          position: relative;
          gap: 25px;
          li {
            display: flex;
            gap: 24px;
            font-size: 20px;
            align-items: center;
            color: #555555;
            cursor: pointer;
            .icon {
              width: 48px;
              height: 48px;
              img {
                display: none;
              }
            }
            ul {
              display: none;
            }
          }
          .active {
            display: flex;
            gap: 24px;
            font-size: 20px;
            align-items: center;
            color: white;
            .icon {
              width: 48px;
              height: 48px;
              img {
                display: block;
              }
            }
            ul {
              display: flex;
              gap: 20px;
              position: absolute;
              top: 100%;
              left: 0;
              margin-top: 32px;
              border-top: 1px solid white;
              width: 100%;
              padding: 30px 10%;
              h2 {
                font-size: 20px;
              }
              .list {
                display: flex;
                gap: 16px;
                flex-wrap: wrap;
                li {
                  padding: 4px 12px;
                  color: white;
                  border-radius: 20px;
                  border: 1px solid white;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
    .right {
      border-left: 1px solid white;
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .video {
        height: 100%;
        max-height: 500px;
        padding: 32px 16px;
        iframe {
          width: 100%;
          height: 100%;
        }
          .no-results {
          background-color: gray;
          width: 100%;
          height: 100%;
          }
      }
      .link {
        display: flex;
        gap: 16px;
        padding: 0 16px;
        margin-top: 13px;
        img {
          width: 50px;
          height: 50px;
        }
          
        .site {
          width: 50px;
          hieght: 50px;
          border-radius: 999px;
          background-color: #333333;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 32px;
            hieght: 32px;
            filter: invert(98%) sepia(0%) saturate(20%) hue-rotate(190deg)
              brightness(88%) contrast(95%);
          }
        }
      }
    }
  }
`;
export const StackWrap = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  max-width: 1600px;
  align-items: center;
  gap: 10px;
  span {
    font-family: 'LOTTERIADDAG';
    font-size: 48px;
    padding: 20px;
    border-radius: 100px;
    z-index: 889;
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
    font-size: 24px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin-left: 80px;
  }
`;
