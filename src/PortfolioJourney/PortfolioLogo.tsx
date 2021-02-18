import { Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface logoProps {
  name: string;
  itemNumber: number;
}

export default function PortfolioLogo({name, itemNumber}:logoProps) {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig(); 
  let left, top = 0;

  if (itemNumber % 2) {
    left = interpolate(frame, [150, 300], [width * 0.6, 0]);
    top = interpolate(frame, [50, 300], [0, height]);
  } else {
    left = interpolate(frame, [width * 0.6, 0], [150, 300]);
    top = interpolate(frame, [50, 300], [0, height]);
  }

  const logoWidth = interpolate(frame, [0, 200], [50, 300]);
  const logo = require(`./images/${name}.png`)

  return (
    <>
      <Img
        src={logo}
        width={logoWidth}
        style={{
          zIndex: 5,
          position: 'absolute',
          top: `${top}px`,
          left: `${left}px`,
        }}
      />
    </>
  );
}
