import React, { useEffect, useRef } from 'react';
import { StackWrap } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const TecStack: React.FC = () => {
  const techRef = useRef<HTMLDivElement>(null);
  const rotations = useRef(
    Array.from({ length: 5 }, () => gsap.utils.random(-90, 90)),
  ).current;

  useEffect(() => {
    if (!techRef.current) return;

    const elements = techRef.current.children;

    // 각 요소마다 개별적으로 애니메이션 설정
    Array.from(elements).forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          y: 0,
          x: 0,
          rotateZ: 0,
        },
        {
          y: gsap.utils.random(300, 600), // 더 아래로 떨어지도록 값 증가
          x: gsap.utils.random(-150, 150), // 좌우 랜덤 이동 범위 확장
          rotateZ: rotations[index],
          ease: 'power1.in', // 떨어지는 느낌을 위해 ease 변경
          scrollTrigger: {
            trigger: techRef.current,
            start: 'top 80%',
            end: 'bottom 0%', // 스크롤 범위 확장
            scrub: 1, // 값을 주면 스크롤과 애니메이션 사이에 지연 효과 추가
            invalidateOnRefresh: false,
          },
        },
      );
    });

    return () => {
      // 클린업: 모든 ScrollTrigger 인스턴스 제거
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <StackWrap ref={techRef}>
      <span className="html">Html</span>
      <span className="css">CSS</span>
      <span className="js">JavaScript</span>
      <span className="react">React</span>
      <span className="redux">Redux</span>
    </StackWrap>
  );
};

export default TecStack;
