import { Sequence } from 'remotion';
import StarDestroyerBridge from './StarDestroyerBridge';
import Stars from './Stars';
import PortfolioLogo from './PortfolioLogo';

const LOGO_NAMES = ['oort', 'goldbelly']

export default function PortfolioJourney() {
  return (
    <>
      <Stars />
      {LOGO_NAMES.map((companyName, index) => {
        return (
          <Sequence from={100 + (index * 200)} durationInFrames={300}>
            <PortfolioLogo name={companyName} itemNumber={index} />
          </Sequence>
        )
      })}
      <StarDestroyerBridge />
    </>
  );
}
