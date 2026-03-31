import SectionCarousel from './ui/section-carousel.jsx';
import { animeCatalog } from '../data/mock-anime.js';

const Top10ThisSeason = () => {
  return (
    <SectionCarousel
      title="Top 10 This Season"
      items={[...animeCatalog].sort((a, b) => b.rating - a.rating).slice(0, 6)}
      viewAllTo="/browse"
    />
  );
};

export default Top10ThisSeason;
