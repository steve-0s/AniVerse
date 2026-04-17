import { releaseSchedule } from '../data/mock-manga.js';

const ReleaseSchedule = () => {
  return (
    <section className="rounded-xl border border-white/10 bg-zinc-950/80 p-4">
      <h3 className="mb-3 text-xl font-bold text-[#F2A7BC]">Release Schedule</h3>
      <div className="space-y-2">
        {releaseSchedule.map((item) => (
          <div
            key={`${item.day}-${item.manga}`}
            className="grid grid-cols-[100px_1fr_90px] items-center gap-3 rounded-lg bg-black px-3 py-2 text-sm"
          >
            <span className="text-gray-300">{item.day}</span>
            <span className="text-gray-100">{item.manga}</span>
            <span className="text-right text-[#F2A7BC]">{item.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReleaseSchedule;
