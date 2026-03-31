export const animeCatalog = [
  {
    id: 1,
    title: 'Naruto',
    description:
      'A young ninja with dreams of becoming the strongest ninja and village leader.',
    genres: ['Action', 'Adventure', 'Fantasy'],
    studio: 'Pierrot',
    year: 2002,
    rating: 8.3,
    episodes: 220,
    status: 'Completed',
    image: '/images/naruto.jpg'
  },
  {
    id: 2,
    title: 'Attack on Titan',
    description:
      'Humanity fights against giant Titans while uncovering secrets about their world.',
    genres: ['Action', 'Drama', 'Dark Fantasy'],
    studio: 'MAPPA',
    year: 2013,
    rating: 9.0,
    episodes: 87,
    status: 'Completed',
    image: '/images/aot.jpg'
  },
  {
    id: 3,
    title: 'Demon Slayer',
    description:
      'A youth becomes a demon slayer to avenge his family and save his sister.',
    genres: ['Action', 'Supernatural', 'Adventure'],
    studio: 'Ufotable',
    year: 2019,
    rating: 8.7,
    episodes: 44,
    status: 'Ongoing',
    image: '/images/demonslayer.jpg'
  },
  {
    id: 4,
    title: 'Jujutsu Kaisen',
    description: 'A high school student joins sorcerers to battle deadly curses.',
    genres: ['Action', 'Supernatural'],
    studio: 'MAPPA',
    year: 2020,
    rating: 8.6,
    episodes: 47,
    status: 'Ongoing',
    image: null
  },
  {
    id: 5,
    title: 'One Piece',
    description: 'Pirates chase dreams on the Grand Line in an endless adventure.',
    genres: ['Action', 'Adventure', 'Comedy'],
    studio: 'Toei Animation',
    year: 1999,
    rating: 8.9,
    episodes: 1100,
    status: 'Ongoing',
    image: null
  },
  {
    id: 6,
    title: 'Hell\'s Paradise',
    description: 'Convicts pursue a mythical elixir on a dangerous island.',
    genres: ['Action', 'Dark Fantasy'],
    studio: 'MAPPA',
    year: 2023,
    rating: 8.1,
    episodes: 13,
    status: 'Ongoing',
    image: null
  }
];

export const spotlightItems = animeCatalog.slice(0, 3).map((anime, index) => ({
  id: anime.id,
  label: ['Trending', 'Featured', 'Popular'][index] || 'Spotlight',
  title: anime.title,
  description: anime.description,
  genres: anime.genres,
  image: anime.image
}));

export const seasonEpisodes = {
  1: {
    1: Array.from({ length: 12 }, (_, i) => ({ id: i + 1, title: `Episode ${i + 1}` })),
    2: Array.from({ length: 12 }, (_, i) => ({ id: i + 13, title: `Episode ${i + 13}` }))
  },
  2: {
    1: Array.from({ length: 10 }, (_, i) => ({ id: i + 1, title: `Episode ${i + 1}` }))
  },
  3: {
    1: Array.from({ length: 11 }, (_, i) => ({ id: i + 1, title: `Episode ${i + 1}` }))
  }
};

export const airingSchedule = [
  { day: 'Monday', anime: 'One Piece', time: '8:00 PM' },
  { day: 'Tuesday', anime: 'Demon Slayer', time: '9:00 PM' },
  { day: 'Wednesday', anime: 'Jujutsu Kaisen', time: '7:30 PM' },
  { day: 'Thursday', anime: 'Hell\'s Paradise', time: '8:30 PM' },
  { day: 'Friday', anime: 'Attack on Titan (Rewatch Event)', time: '7:00 PM' }
];
