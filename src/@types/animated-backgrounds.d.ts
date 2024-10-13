declare module 'animated-backgrounds' {
  interface AnimatedBackgroundProps {
    animationName: string;
    style?: React.CSSProperties;
  }

  export const AnimatedBackground: React.FC<AnimatedBackgroundProps>;
}