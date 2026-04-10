import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { airingSchedule } from '../data/mock-anime.js';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const EstimatedSchedule = () => {
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const defaultDayIndex = today === 0 ? 6 : today - 1; // Adjust to Monday = 0
  const [activeDayIndex, setActiveDayIndex] = useState(defaultDayIndex);

  const activeDay = daysOfWeek[activeDayIndex];
  const filteredSchedule = useMemo(() => {
    return airingSchedule.filter(item => item.day === activeDay);
  }, [activeDay]);

  return (
    <section className="rounded-xl border border-white/10 bg-black/30 p-4">
      <h3 className="mb-3 text-xl font-bold text-red-700">Estimated Airing Schedule</h3>
      <div className="mb-4 flex flex-wrap gap-2">
        {daysOfWeek.map((day, index) => (
          <button
            key={day}
            onClick={() => setActiveDayIndex(index)}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
              index === activeDayIndex
                ? 'bg-red-700 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {filteredSchedule.length > 0 ? (
          filteredSchedule.map((item) => (
            <div
              key={`${item.day}-${item.anime}`}
              className="grid grid-cols-[100px_1fr_90px] items-center gap-3 rounded-lg bg-gray-900/70 px-3 py-2 text-sm"
            >
              <span className="text-red-300">{item.time}</span>
              <Link
                to={`/anime/${item.id}/player?ep=${item.episode}`}
                className="text-gray-100 hover:text-red-300 transition"
              >
                {item.anime} - Ep {item.episode}
              </Link>
              <span className="text-right text-gray-400">{item.day}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-sm">No scheduled anime for {activeDay}.</p>
        )}
      </div>
    </section>
  );
};

export default EstimatedSchedule;
