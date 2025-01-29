import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useTabAnimation(className) {
  const [cardActive, setCardActive] = useState(0);
  const sectionRef = useRef();
  const tlRef = useRef(null);
  const [refresh, setRefresh] = useState(false);

  function initGSAP() {
    const boxes = gsap.utils.toArray(className);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top-=200px",
        end: "+=1500",
        scrub: true,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentBox = Math.floor(progress * boxes.length);
          setCardActive(currentBox);
          // Apply scale down to previous boxes
          boxes.forEach((box, index) => {
            if (index < currentBox) {
              gsap.to(box, {
                scale: 1 - 0.05 * (currentBox - index),
                zIndex: 1,
                duration: 0.2,
              });
            } else if (index === currentBox) {
              gsap.to(box, { scale: 1, zIndex: 10, duration: 0.2 });
            }
          });
        },
      },
    });

    let topPosition = 0;

    boxes.forEach((box, index) => {
      tl.fromTo(
        box,
        { y: window.innerWidth > 768 ? 1000 : 500, scale: 1 },
        {
          y: topPosition,
          scale: 1,
          duration: 0.6,
          delay: index * 0.2,
          ease: "power1.out",
        }
      );
      topPosition += 50;
    });

    tlRef.current = tl;
  }

  useEffect(() => {
    initGSAP();
    return () => {
      // Clean up ScrollTrigger instance
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  function refreshAnimation() {
    ScrollTrigger.refresh();
  }

  function changeAnimationAsPerTabClick(newTabIndex) {
    if (tlRef.current) {
      const totalBoxes = gsap.utils.toArray(className).length;
      const progressValue = newTabIndex / totalBoxes;
      tlRef.current.progress(progressValue);
    }
  }

  return {
    cardActive,
    sectionRef,
    changeAnimationAsPerTabClick,
    refreshAnimation,
  };
}

export default useTabAnimation;
