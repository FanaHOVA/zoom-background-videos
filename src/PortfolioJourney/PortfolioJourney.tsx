import { Sequence } from 'remotion';
import StarDestroyerBridge from './StarDestroyerBridge';
import Stars from './Stars';
import PortfolioLogo from './PortfolioLogo';

const LOGO_NAMES = ['oort', 'panther']

export default function PortfolioJourney() {
  return (
    <>
      <Stars />
      {LOGO_NAMES.map((companyName, index) => {
        return (
          <Sequence from={100 + (index * 1000)} durationInFrames={200}>
            <PortfolioLogo name={companyName} />
          </Sequence>
        )
      })}
      <StarDestroyerBridge />
    </>
  );
}
