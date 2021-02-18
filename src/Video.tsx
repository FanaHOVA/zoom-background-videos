import { Composition } from 'remotion';
import PortfolioJourney from './PortfolioJourney';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="PortfolioJourney"
        component={PortfolioJourney}
        width={1280}
        height={720}
        fps={30}
        durationInFrames={2000}
      />
    </>
  );
};
