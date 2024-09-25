import React, { useState, useRef, useEffect } from "react";
import Lottie, { AnimationItem, AnimationConfigWithData } from "lottie-web";

interface LottieComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  isPaused?: boolean;
  isStopped?: boolean;
}

const LottieComponent: React.FC<LottieComponentProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  speed,
  isPaused,
  isStopped,
  ...restProps
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const [animationInstance, setAnimationInstance] = useState<AnimationItem | null>(null);

  // Lottie 애니메이션 로드 및 초기화
  useEffect(() => {
    if (animationContainer.current) {
      const animationOptions: AnimationConfigWithData<'svg'> = {
        container: animationContainer.current,
        renderer: 'svg', // Explicitly set to 'svg' as part of RendererType
        loop: loop !== undefined ? loop : true,
        autoplay: autoplay !== undefined ? autoplay : true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

      const animation = Lottie.loadAnimation(animationOptions);
      setAnimationInstance(animation);

      return () => {
        animation.destroy();
      };
    }
  }, [animationData, loop, autoplay]);

  // Lottie 인터랙션 관리
  useEffect(() => {
    if (animationInstance) {
      if (isPaused) {
        animationInstance.pause();
      } else {
        animationInstance.play();
      }

      if (isStopped) {
        animationInstance.stop();
      }

      if (speed !== undefined) {
        animationInstance.setSpeed(speed);
      }
    }
  }, [isPaused, isStopped, speed, animationInstance]);

  return <div ref={animationContainer} {...restProps} />;
};

export default LottieComponent;
