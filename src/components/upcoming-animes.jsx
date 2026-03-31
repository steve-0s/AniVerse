import SectionCarousel from './ui/section-carousel.jsx';
import { animeCatalog } from '../data/mock-anime.js';

const UpcomingAnime = () => {
  return (
    <SectionCarousel
      title="Upcoming Anime"
      items={[...animeCatalog].sort((a, b) => b.year - a.year).slice(0, 4)}
      viewAllTo="/schedule"
    />
  );
};

export default UpcomingAnime;
