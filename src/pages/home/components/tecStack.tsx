import React, { useEffect, useRef } from 'react';
import { StackWrap } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const TecStack: React.FC = () => {
  const techRef = useRef<HTMLDivElement>(null);
  const deviceHeight = window.innerHeight * 2;
  const rotations = useRef(
    Array.from({ length: 5 }, () => gsap.utils.random(-90, 90)),
  ).current;

  useEffect(() => {
    if (!techRef.current) return;

    const elements = techRef.current.children;

    Array.from(elements).forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          y: 0,
          x: 0,
          rotateZ: 0,
        },
        {
          y: gsap.utils.random(2000, 2500), // 더 아래로 떨어지도록 값 증가
          x: gsap.utils.random(-1000, 1000), // 좌우 랜덤 이동 범위 확장
          rotateZ: rotations[index],
          ease: 'power1.in', // 떨어지는 느낌을 위해 ease 변경
          scrollTrigger: {
            trigger: techRef.current,
            start: 'top 80%',
            end: `+=${deviceHeight}`, // 스크롤 범위가 끝날 때마다 다시 반복
            scrub: 1, // 값을 주면 스크롤과 애니메이션 사이에 지연 효과 추가
            toggleActions: 'play none none reverse', // 스크롤을 내리면 애니메이션이 계속 반복됨
            invalidateOnRefresh: true, // 새로 고침 시 애니메이션 재설정
            markers: true, // ScrollTrigger.getAll()로 모든 ScrollTrigger를 가져�� 수 있음
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
