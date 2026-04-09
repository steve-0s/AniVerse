export const mangaCatalog = [
  {
    id: 1,
    title: 'Berserk',
    description: 'A battle-scarred swordsman walks through a brutal world shaped by betrayal, war, and fate.',
    genres: ['Dark Fantasy', 'Action', 'Drama'],
    rating: 9.7,
    year: 1989,
    status: 'Ongoing',
    author: 'Kentaro Miura',
    chapters: 376,
    volumes: 42,
    image: ''
  },
  {
    id: 2,
    title: 'Vagabond',
    description: 'Musashi seeks purpose and mastery while every duel forces him to confront who he is becoming.',
    genres: ['Historical', 'Drama', 'Action'],
    rating: 9.5,
    year: 1998,
    status: 'Hiatus',
    author: 'Takehiko Inoue',
    chapters: 327,
    volumes: 37,
    image: ''
  },
  {
    id: 3,
    title: 'Monster',
    description: 'A doctor saves a child and unknowingly unleashes a terrifying chain of consequences across Europe.',
    genres: ['Mystery', 'Psychological', 'Thriller'],
    rating: 9.3,
    year: 1994,
    status: 'Completed',
    author: 'Naoki Urasawa',
    chapters: 162,
    volumes: 18,
    image: ''
  },
  {
    id: 4,
    title: '20th Century Boys',
    description: 'A symbol from childhood returns as a global cult rises around an apocalyptic prophecy.',
    genres: ['Mystery', 'Sci-Fi', 'Drama'],
    rating: 9.1,
    year: 1999,
    status: 'Completed',
    author: 'Naoki Urasawa',
    chapters: 249,
    volumes: 22,
    image: ''
  },
  {
    id: 5,
    title: 'Oyasumi Punpun',
    description: 'An intimate and devastating coming-of-age story about growing up with loneliness and trauma.',
    genres: ['Drama', 'Psychological', 'Slice of Life'],
    rating: 9.0,
    year: 2007,
    status: 'Completed',
    author: 'Inio Asano',
    chapters: 147,
    volumes: 13,
    image: ''
  },
  {
    id: 6,
    title: 'Kingdom',
    description: 'A war orphan dreams of becoming a great general as the states of China clash for supremacy.',
    genres: ['Historical', 'Action', 'Military'],
    rating: 9.2,
    year: 2006,
    status: 'Ongoing',
    author: 'Yasuhisa Hara',
    chapters: 830,
    volumes: 74,
    image: ''
  }
];

export const spotlightItems = mangaCatalog.slice(0, 3).map((manga, index) => ({
  id: manga.id,
  title: manga.title,
  description: manga.description,
  genres: manga.genres,
  image: manga.image,
  label: ['Editor Pick', 'Must Read', 'Critic Favorite'][index] || 'Featured'
}));

export const volumeChapters = {
  1: {
    1: Array.from({ length: 9 }, (_, index) => ({ id: index + 1, title: `Black Swordsman ${index + 1}` })),
    2: Array.from({ length: 8 }, (_, index) => ({ id: index + 10, title: `Golden Age ${index + 10}` }))
  },
  2: {
    1: Array.from({ length: 8 }, (_, index) => ({ id: index + 1, title: `Takezo ${index + 1}` })),
    2: Array.from({ length: 8 }, (_, index) => ({ id: index + 9, title: `Wanderer ${index + 9}` }))
  },
  3: {
    1: Array.from({ length: 7 }, (_, index) => ({ id: index + 1, title: `Investigation ${index + 1}` })),
    2: Array.from({ length: 7 }, (_, index) => ({ id: index + 8, title: `The Chase ${index + 8}` }))
  },
  4: {
    1: Array.from({ length: 8 }, (_, index) => ({ id: index + 1, title: `Friend ${index + 1}` })),
    2: Array.from({ length: 8 }, (_, index) => ({ id: index + 9, title: `The Symbol ${index + 9}` }))
  },
  5: {
    1: Array.from({ length: 7 }, (_, index) => ({ id: index + 1, title: `Punpun ${index + 1}` })),
    2: Array.from({ length: 7 }, (_, index) => ({ id: index + 8, title: `Aiko ${index + 8}` }))
  },
  6: {
    1: Array.from({ length: 10 }, (_, index) => ({ id: index + 1, title: `War Arc ${index + 1}` })),
    2: Array.from({ length: 10 }, (_, index) => ({ id: index + 11, title: `Campaign ${index + 11}` }))
  }
};

export const releaseSchedule = [
  { day: 'Monday', manga: 'Kingdom', time: '09:00 PM' },
  { day: 'Wednesday', manga: 'Berserk', time: '08:30 PM' },
  { day: 'Friday', manga: 'Vagabond', time: '07:00 PM' },
  { day: 'Saturday', manga: 'New One-Shots', time: '05:00 PM' }
];
