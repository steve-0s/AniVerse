import SectionCarousel from './ui/section-carousel.jsx';
import { animeCatalog } from '../data/mock-anime.js';

const LatestEpisodes = () => {
  return (
    <SectionCarousel
      title="Latest Episodes"
      items={[...animeCatalog].sort((a, b) => b.year - a.year).slice(0, 6)}
      viewAllTo="/schedule"
    />
  );
};

export default LatestEpisodes;
