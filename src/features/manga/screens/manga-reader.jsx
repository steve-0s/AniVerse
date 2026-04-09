import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../shared/components/header.jsx';
import CommentSection from '../../../shared/components/comments-section.jsx';
import ChapterList from '../components/chapter-list.jsx';
import MangaDetails from '../components/manga-details.jsx';
import VolumeTabs from '../components/volume-tabs.jsx';
import { mangaCatalog, volumeChapters } from '../data/mock-manga.js';

const MangaReader = () => {
  const { id } = useParams();
  const mangaId = Number(id);
  const manga = mangaCatalog.find((item) => item.id === mangaId) || mangaCatalog[0];

  const availableVolumes = useMemo(() => Object.keys(volumeChapters[manga.id] || { 1: [] }).map(Number), [manga.id]);
  const [selectedVolume, setSelectedVolume] = useState(availableVolumes[0] || 1);
  const chapters = volumeChapters[manga.id]?.[selectedVolume] || [];
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]?.id || 1);

  const handleVolumeSelect = (volume) => {
    setSelectedVolume(volume);
    const nextChapters = volumeChapters[manga.id]?.[volume] || [];
    setSelectedChapter(nextChapters[0]?.id || 1);
  };

  return (
    <div className="no-scrollbar min-h-screen bg-black text-white">
      <Header />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 p-4 lg:grid-cols-[3fr_1fr]">
        <div className="rounded-xl border border-white/10 bg-zinc-950/80 p-4">
          <div className="flex min-h-[500px] flex-col justify-between rounded-lg border border-white/10 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Reader Preview</p>
              <h2 className="mt-3 text-3xl font-bold text-white">{manga.title}</h2>
              <p className="mt-2 text-sm text-gray-400">Volume {selectedVolume}, Chapter {selectedChapter}</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center text-gray-300">
                Monochrome page stack placeholder for chapter {selectedChapter}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Reading Mode</p>
                  <p className="mt-2 text-sm text-gray-200">Vertical scroll, grayscale-first presentation</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Progress</p>
                  <p className="mt-2 text-sm text-gray-200">Saved at chapter {selectedChapter}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4 rounded-xl border border-white/10 bg-zinc-950/80 p-4">
          <h3 className="text-lg font-bold text-white">Volumes</h3>
          <VolumeTabs volumes={availableVolumes} selectedVolume={selectedVolume} onSelect={handleVolumeSelect} />

          <h3 className="pt-2 text-lg font-bold text-white">Chapters</h3>
          <ChapterList chapters={chapters} selectedChapter={selectedChapter} onSelect={setSelectedChapter} />
        </aside>
      </div>

      <MangaDetails />
      <div className="mx-auto w-full max-w-7xl px-6 pb-10">
        <CommentSection theme="manga" title="Reader Discussion" placeholder="Share your thoughts on this chapter..." />
      </div>
    </div>
  );
};

export default MangaReader;
