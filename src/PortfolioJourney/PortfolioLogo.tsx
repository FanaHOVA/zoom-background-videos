import { Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface logoProps {
  name: string;
}

export default function PortfolioLogo({name}:logoProps) {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const left = interpolate(frame, [0, 200], [width * 0.9, 0]);
  const top = interpolate(frame, [0, 200], [0, height]);
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
