import { airingSchedule } from '../data/mock-anime.js';

const EstimatedSchedule = () => {
  return (
    <section className="rounded-xl border border-white/10 bg-black/30 p-4">
      <h3 className="mb-3 text-xl font-bold text-red-700">Estimated Airing Schedule</h3>
      <div className="space-y-2">
        {airingSchedule.map((item) => (
          <div
            key={`${item.day}-${item.anime}`}
            className="grid grid-cols-[100px_1fr_90px] items-center gap-3 rounded-lg bg-gray-900/70 px-3 py-2 text-sm"
          >
            <span className="text-red-300">{item.day}</span>
            <span className="text-gray-100">{item.anime}</span>
            <span className="text-right text-gray-400">{item.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EstimatedSchedule;
