import SectionCarousel from './ui/section-carousel.jsx';
import { animeCatalog } from '../data/mock-anime.js';

const TrendingAnime = () => {
  return <SectionCarousel title="Trending" items={animeCatalog.slice(0, 6)} viewAllTo="/browse" />;
};

export default TrendingAnime;
