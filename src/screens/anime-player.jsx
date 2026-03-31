import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/header.jsx';
import AnimeDetails from '../components/sections/anime-details.jsx';
import EpisodeList from '../components/common/episode-list.jsx';
import SeasonTabs from '../components/common/season-tabs.jsx';
import CommentSection from '../components/sections/comments-section.jsx';
import { animeCatalog, seasonEpisodes } from '../data/mock-anime.js';

const AnimePlayer = () => {
  const { id } = useParams();
  const animeId = Number(id);
  const anime = animeCatalog.find((item) => item.id === animeId) || animeCatalog[0];

  const availableSeasons = useMemo(() => {
    return Object.keys(seasonEpisodes[anime.id] || { 1: [] }).map(Number);
  }, [anime.id]);

  const [selectedSeason, setSelectedSeason] = useState(availableSeasons[0] || 1);
  const episodes = seasonEpisodes[anime.id]?.[selectedSeason] || [];
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]?.id || 1);

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    const nextEpisodes = seasonEpisodes[anime.id]?.[season] || [];
    setSelectedEpisode(nextEpisodes[0]?.id || 1);
  };

  return (
    <div className="anime-player no-scrollbar min-h-screen bg-gray-950 text-white">
      <Header />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 p-4 lg:grid-cols-[3fr_1fr]">
        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
          <div className="flex min-h-[500px] items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-gray-900 to-black">
            <p className="text-center text-gray-300">
              Player scaffold for <span className="font-semibold text-red-300">{anime.title}</span> (S
              {selectedSeason}, E{selectedEpisode})
            </p>
          </div>
        </div>

        <aside className="space-y-4 rounded-xl border border-white/10 bg-black/30 p-4">
          <h3 className="text-lg font-bold text-red-700">Seasons</h3>
          <SeasonTabs
            seasons={availableSeasons}
            selectedSeason={selectedSeason}
            onSelect={handleSeasonSelect}
          />

          <h3 className="pt-2 text-lg font-bold text-red-700">Episodes</h3>
          <EpisodeList episodes={episodes} selectedEpisode={selectedEpisode} onSelect={setSelectedEpisode} />
        </aside>
      </div>

      <AnimeDetails />
      <div className="mx-auto w-full max-w-7xl px-6 pb-10">
        <CommentSection />
      </div>
    </div>
  );
};

export default AnimePlayer;
