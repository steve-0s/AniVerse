import { Send } from 'react-feather';
import { Link } from 'react-router-dom';

const FEED_COMMENT_LIMIT = 2;
const COMMUNITY_CATEGORIES = [
  'Discussion',
  'Recommendations',
  'Hot Takes',
  'Episode Reactions',
  'Chapter Reactions',
  'Theories',
  'Character Talk',
  'Worldbuilding',
  'Seasonal Watch',
  'Help Me Find'
];

const createPost = ({ type, id, author, time, title, body, category, votes, comments }) => ({
  id: `${type}-${id}`,
  author,
  handle: `u/${author}`,
  time,
  community: type === 'anime' ? 'r/AniVerseAnime' : 'r/AniVerseManga',
  title,
  body,
  category,
  votes,
  comments: comments.map((comment, index) => ({
    id: `${type}-${id}-comment-${index + 1}`,
    ...comment
  }))
});

const animePosts = [
  createPost({
    type: 'anime',
    id: 1,
    author: 'sakuga_watch',
    time: '1h ago',
    title: 'What anime had the strongest first three episodes for you?',
    body: 'Not necessarily your favorite overall series, just something that immediately sold you on the world, tone, and characters without wasting time.',
    category: 'Discussion',
    votes: 162,
    comments: [
      { author: 'framecut', time: '58m ago', votes: 40, text: 'Attack on Titan is still one of the fastest hooks I have seen.' },
      { author: 'ep3ruinedme', time: '44m ago', votes: 29, text: 'Oshi no Ko episode 1 felt like a full event by itself.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 2,
    author: 'weekendbinger',
    time: '4h ago',
    title: 'Best anime to recommend to someone who says they do not like anime?',
    body: 'I need suggestions that feel easy to get into and do not lean too hard on insider tropes right away.',
    category: 'Recommendations',
    votes: 117,
    comments: [
      { author: 'starterpack', time: '3h ago', votes: 27, text: 'Death Note is still one of the easiest entry points if they like thrillers.' },
      { author: 'quietframes', time: '2h ago', votes: 15, text: 'Depends on their taste, but Vinland Saga works well for drama fans.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 3,
    author: 'creditsskipper',
    time: '9h ago',
    title: 'Which ongoing show are you most nervous will fumble the ending?',
    body: 'I am fully invested in a couple of seasonals right now and trying not to get my expectations too high.',
    category: 'Hot Takes',
    votes: 89,
    comments: [
      { author: 'copeengine', time: '8h ago', votes: 13, text: 'The bigger the mystery box gets, the more worried I become.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 4,
    author: 'nightcour',
    time: '11h ago',
    title: 'Which anime soundtrack instantly tells you what scene is coming next?',
    body: 'Some OST cues are so iconic that my brain starts playing the whole moment before the scene even lands.',
    category: 'Discussion',
    votes: 73,
    comments: [
      { author: 'leitmotiflover', time: '10h ago', votes: 12, text: 'The first few notes of You Say Run still trigger pure adrenaline.' },
      { author: 'vinylending', time: '9h ago', votes: 9, text: 'Made in Abyss has tracks that feel like emotional spoilers.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 5,
    author: 'romcomrotation',
    time: '14h ago',
    title: 'Need romance anime where the relationship actually progresses',
    body: 'I am in the mood for a show where the leads do not spend two full seasons trapped in misunderstandings.',
    category: 'Recommendations',
    votes: 104,
    comments: [
      { author: 'slowburnsurvivor', time: '13h ago', votes: 18, text: 'Horimiya gets to the point much faster than most school romances.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 6,
    author: 'openingloop',
    time: '18h ago',
    title: 'Hot take: more anime should commit to shorter runtimes',
    body: 'I would rather watch a tightly written 10-episode season than a 24-episode run padded with momentum killers.',
    category: 'Hot Takes',
    votes: 66,
    comments: [
      { author: 'courdefender', time: '17h ago', votes: 14, text: 'Agreed if the material supports it. Not everything needs to be stretched.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 7,
    author: 'weeklywatcher',
    time: '21h ago',
    title: 'Which seasonal surprised you the most after looking generic at first?',
    body: 'I almost skipped a few shows this season because the posters did nothing for me, and now one of them might end up top three.',
    category: 'Seasonal Watch',
    votes: 91,
    comments: [
      { author: 'coverlies', time: '20h ago', votes: 16, text: 'This happens to me every season with at least one sleeper hit.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 8,
    author: 'lostinfillers',
    time: '1d ago',
    title: 'Help me find an anime with a train station scene and time travel vibes',
    body: 'I remember a blue evening palette, a platform announcement, and characters acting like they had met before in another timeline.',
    category: 'Help Me Find',
    votes: 58,
    comments: [
      { author: 'memoryfragments', time: '22h ago', votes: 11, text: 'That sounds like it could be Erased or something spiritually close to it.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 9,
    author: 'villainfolder',
    time: '1d ago',
    title: 'Best anime antagonists who stayed interesting even after the reveal?',
    body: 'A lot of villains get weaker once the mystery is gone. Who actually got more compelling after you learned what they wanted?',
    category: 'Character Talk',
    votes: 122,
    comments: [
      { author: 'motivationreader', time: '23h ago', votes: 20, text: 'Makishima is still one of my favorites for exactly this reason.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 10,
    author: 'silentframe',
    time: '1d ago',
    title: 'Which anime world would be the worst place to casually live in?',
    body: 'Not the coolest world to visit. I mean the one where even ordinary background citizens are probably having a terrible week.',
    category: 'Worldbuilding',
    votes: 84,
    comments: [
      { author: 'npcfear', time: '1d ago', votes: 17, text: 'Anything with random giant monster attacks every other episode.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 11,
    author: 'endingcredits',
    time: '1d ago',
    title: 'Episode reaction thread: that finale really changed how I see the protagonist',
    body: 'I thought the writing was building to a safer emotional landing, but the last ten minutes completely recontextualized the whole season.',
    category: 'Episode Reactions',
    votes: 95,
    comments: [
      { author: 'rewatchincoming', time: '1d ago', votes: 24, text: 'That ending absolutely forces a rewatch with different eyes.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 12,
    author: 'mechacoffee',
    time: '2d ago',
    title: 'Recommend me anime with elite team dynamics like sports or squad-based shows',
    body: 'I am chasing that feeling where every member brings a distinct skill set and the chemistry matters as much as the action.',
    category: 'Recommendations',
    votes: 78,
    comments: [
      { author: 'lineupbuilder', time: '2d ago', votes: 14, text: 'World Trigger should be mandatory if you like tactical team compositions.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 13,
    author: 'subornot',
    time: '2d ago',
    title: 'Hot take: some dubs handle comedy timing better than subs',
    body: 'Not saying this is true across the board, but there are definitely comedies where the dub cast lands punchlines more naturally for me.',
    category: 'Hot Takes',
    votes: 61,
    comments: [
      { author: 'timingmatters', time: '2d ago', votes: 13, text: 'Ghost Stories is the extreme example, but you are not wrong in general.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 14,
    author: 'cryingopening',
    time: '2d ago',
    title: 'Which anime opening did you underestimate until it suddenly hit?',
    body: 'I mean the kind you skipped for three episodes and then one day realized it was secretly perfect.',
    category: 'Discussion',
    votes: 70,
    comments: [
      { author: 'noskipnow', time: '2d ago', votes: 10, text: 'This was me with 99. It sounded chaotic until it completely clicked.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 15,
    author: 'foggymemory',
    time: '2d ago',
    title: 'Help me find an anime where the heroine wore a red scarf and lived near the sea',
    body: 'I only remember a lot of pale blue backgrounds and a melancholy atmosphere, maybe early 2000s.',
    category: 'Help Me Find',
    votes: 42,
    comments: [
      { author: 'archivebrain', time: '2d ago', votes: 8, text: 'Could be a stretch, but try checking Air or similar Kyoto Animation titles.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 16,
    author: 'archiveotaku',
    time: '3d ago',
    title: 'Character talk: who had the best redemption arc without feeling forced?',
    body: 'I like redemption stories when they still leave room for consequences and not everyone forgives instantly.',
    category: 'Character Talk',
    votes: 87,
    comments: [
      { author: 'earnedgrowth', time: '3d ago', votes: 19, text: 'Endeavor is messy, but the writing commits to the discomfort in a way I respect.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 17,
    author: 'worldmapbrain',
    time: '3d ago',
    title: 'Which fantasy anime had the most coherent worldbuilding to you?',
    body: 'Not just lore dumps, but a world where politics, geography, religion, and everyday life all felt connected.',
    category: 'Worldbuilding',
    votes: 93,
    comments: [
      { author: 'maproom', time: '3d ago', votes: 15, text: 'Twelve Kingdoms still feels unusually complete in that regard.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 18,
    author: 'thursdayqueue',
    time: '3d ago',
    title: 'Seasonal watch check-in: what are you still following and what did you drop?',
    body: 'Halfway through the season feels like the perfect time to admit which shows survived the weekly rotation.',
    category: 'Seasonal Watch',
    votes: 74,
    comments: [
      { author: 'honesttracker', time: '3d ago', votes: 12, text: 'I started with ten and somehow I am down to four already.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 19,
    author: 'scenecomposer',
    time: '4d ago',
    title: 'Episode reactions: what was your favorite single scene cut this week?',
    body: 'Not the whole episode, just one scene where the directing, music, and animation aligned perfectly.',
    category: 'Episode Reactions',
    votes: 55,
    comments: [
      { author: 'sakugaspotter', time: '4d ago', votes: 9, text: 'That stairwell shot in this week’s episode was absurdly polished.' }
    ]
  }),
  createPost({
    type: 'anime',
    id: 20,
    author: 'nightshiftviewer',
    time: '4d ago',
    title: 'Recommend anime for late-night watching that feel atmospheric instead of loud',
    body: 'I want shows that feel immersive at 1 AM, more mood and tension than nonstop shouting or chaos.',
    category: 'Recommendations',
    votes: 81,
    comments: [
      { author: 'dimlights', time: '4d ago', votes: 16, text: 'Mushishi is the obvious pick, but it is obvious for a reason.' }
    ]
  })
];

const mangaPosts = [
  createPost({
    type: 'manga',
    id: 1,
    author: 'panelhunter',
    time: '3h ago',
    title: 'Best slow-burn manga arcs you had to sit with for a while?',
    body: 'I just caught up on Monster and now I want more series that reward patience. Looking for arcs that hit harder the more you think about them after reading.',
    category: 'Recommendations',
    votes: 128,
    comments: [
      { author: 'urasawa-core', time: '2h ago', votes: 33, text: '20th Century Boys is the obvious next stop if you want that creeping tension.' },
      { author: 'inkreader', time: '1h ago', votes: 21, text: 'Vagabond is quieter, but some chapters stay in your head for days.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 2,
    author: 'midnightreader',
    time: '7h ago',
    title: 'Do you prefer binge-reading completed manga or following weekly releases?',
    body: 'I keep telling myself I should wait until arcs are finished, but then I end up reading chapter to chapter anyway. Curious how everyone else handles pacing.',
    category: 'Discussion',
    votes: 94,
    comments: [
      { author: 'framebyframe', time: '6h ago', votes: 18, text: 'Weekly for hype, binge for anything psychological or mystery-heavy.' },
      { author: 'shelfstack', time: '5h ago', votes: 25, text: 'Completed. Cliffhangers are not good for my health.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 3,
    author: 'graytones',
    time: '12h ago',
    title: 'Favorite single manga chapter this year?',
    body: 'Not whole series, just one chapter that felt perfectly paced from the first page to the last.',
    category: 'Chapter Reactions',
    votes: 76,
    comments: [
      { author: 'lineweight', time: '10h ago', votes: 11, text: 'The latest Kingdom chapter had such a strong final spread.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 4,
    author: 'sundayscan',
    time: '15h ago',
    title: 'Recommendations for manga with incredible panel flow?',
    body: 'I want series where your eye naturally glides through the page and every transition feels intentional.',
    category: 'Recommendations',
    votes: 88,
    comments: [
      { author: 'pagecomposer', time: '14h ago', votes: 17, text: 'Witch Hat Atelier is unbelievable when it comes to panel flow.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 5,
    author: 'inkandfog',
    time: '18h ago',
    title: 'Hot take: monthly manga pacing often hits harder than weekly',
    body: 'The wait is brutal, but some monthly chapters feel so dense and deliberate that they land with way more impact.',
    category: 'Hot Takes',
    votes: 69,
    comments: [
      { author: 'delayedgratification', time: '17h ago', votes: 14, text: 'When a monthly chapter is good, it feels like a full meal.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 6,
    author: 'shelfwhisperer',
    time: '20h ago',
    title: 'Character talk: which rival in manga outgrew the protagonist for you?',
    body: 'Not in power level, but in sheer screen presence whenever they showed up on the page.',
    category: 'Character Talk',
    votes: 82,
    comments: [
      { author: 'secondleadtruth', time: '19h ago', votes: 15, text: 'Yuno gets overshadowed in jokes, but I have other answers depending on the series.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 7,
    author: 'theorybinder',
    time: '22h ago',
    title: 'What manga theory are you most convinced about right now?',
    body: 'I need the fun unhinged theories and the well-supported ones. Either way I want to read people connecting dots.',
    category: 'Theories',
    votes: 91,
    comments: [
      { author: 'redstring', time: '21h ago', votes: 18, text: 'I am fully aboard one conspiracy train right now and I cannot get off.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 8,
    author: 'lostoneshot',
    time: '1d ago',
    title: 'Help me find a manga about siblings running a flower shop',
    body: 'I remember soft art, a lot of empty white space, and chapter covers that looked almost watercolor.',
    category: 'Help Me Find',
    votes: 37,
    comments: [
      { author: 'papertrail', time: '23h ago', votes: 7, text: 'Not sure yet, but josei tags might narrow this down a lot.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 9,
    author: 'chapterclock',
    time: '1d ago',
    title: 'Chapter reaction: that final page absolutely changed the whole arc',
    body: 'I thought the chapter was just setup until the reveal on the last spread completely shifted the tension.',
    category: 'Chapter Reactions',
    votes: 97,
    comments: [
      { author: 'spreadshock', time: '1d ago', votes: 22, text: 'The final page was one of those stop-reading-and-stare moments.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 10,
    author: 'mapmargin',
    time: '1d ago',
    title: 'Which manga has the most lived-in worldbuilding?',
    body: 'I love when background details, fashion, signage, and city layouts all make a place feel genuinely inhabited.',
    category: 'Worldbuilding',
    votes: 79,
    comments: [
      { author: 'streetdetails', time: '1d ago', votes: 13, text: 'Dorohedoro is chaos, but it feels incredibly lived in.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 11,
    author: 'latevolumes',
    time: '1d ago',
    title: 'Discussion: do you annotate or highlight anything while reading manga digitally?',
    body: 'I have started screenshotting panels and notes because some callbacks are too easy to lose track of over long runs.',
    category: 'Discussion',
    votes: 53,
    comments: [
      { author: 'bookmarkbrain', time: '1d ago', votes: 9, text: 'I keep a notes app open for mysteries and family trees.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 12,
    author: 'papermoon',
    time: '2d ago',
    title: 'Recommendations for completed manga under 100 chapters?',
    body: 'I want something satisfying that I can finish in a few nights without committing to a giant backlog project.',
    category: 'Recommendations',
    votes: 101,
    comments: [
      { author: 'weekendstack', time: '2d ago', votes: 16, text: 'Spirit Circle is such a strong pick for this exact mood.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 13,
    author: 'pencilmotion',
    time: '2d ago',
    title: 'Hot take: some manga should never get anime adaptations',
    body: 'A few series feel so dependent on page composition and reading rhythm that an anime version would flatten what makes them special.',
    category: 'Hot Takes',
    votes: 72,
    comments: [
      { author: 'panelpurist', time: '2d ago', votes: 12, text: 'There are definitely works where the page turn is part of the storytelling itself.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 14,
    author: 'rereadroute',
    time: '2d ago',
    title: 'Which manga gets better every time you reread it?',
    body: 'I am looking for series packed with foreshadowing, visual callbacks, or hidden emotional context.',
    category: 'Discussion',
    votes: 86,
    comments: [
      { author: 'secondpass', time: '2d ago', votes: 14, text: 'Houseki no Kuni kept opening up for me on reread.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 15,
    author: 'forgottenpanel',
    time: '2d ago',
    title: 'Help me find a horror manga with a staircase and a missing shoe',
    body: 'That single image is burned into my memory and I cannot remember the series name at all.',
    category: 'Help Me Find',
    votes: 44,
    comments: [
      { author: 'nightpages', time: '2d ago', votes: 8, text: 'Junji Ito is the first place I would search, even if that is broad.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 16,
    author: 'turningpages',
    time: '3d ago',
    title: 'Character talk: which manga protagonist feels the most believable under pressure?',
    body: 'I mean someone whose internal reactions feel messy, human, and specific rather than perfectly cool all the time.',
    category: 'Character Talk',
    votes: 67,
    comments: [
      { author: 'humanflaws', time: '3d ago', votes: 10, text: 'Punpun is a rough answer, but believable is definitely the word.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 17,
    author: 'magazinewatch',
    time: '3d ago',
    title: 'Which currently running manga feels like it is in its absolute peak arc?',
    body: 'I want that feeling of catching up right when a series is firing on every cylinder.',
    category: 'Chapter Reactions',
    votes: 93,
    comments: [
      { author: 'peakchapter', time: '3d ago', votes: 15, text: 'Blue Box has been absurdly consistent lately for me.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 18,
    author: 'paneldetective',
    time: '3d ago',
    title: 'Theory thread: what tiny background detail do you think will matter later?',
    body: 'Some authors love planting clues in posters, crowd shots, or throwaway props. Which one is living rent-free in your head?',
    category: 'Theories',
    votes: 58,
    comments: [
      { author: 'backgroundreader', time: '3d ago', votes: 11, text: 'There is one recurring symbol I swear is going to break the entire story open.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 19,
    author: 'saturdaystack',
    time: '4d ago',
    title: 'Recommendations for manga with a cozy but melancholy tone',
    body: 'I want something gentle and reflective, maybe a little lonely, but not completely bleak.',
    category: 'Recommendations',
    votes: 74,
    comments: [
      { author: 'quietshelves', time: '4d ago', votes: 13, text: 'Yokohama Kaidashi Kikou is exactly that emotional weather.' }
    ]
  }),
  createPost({
    type: 'manga',
    id: 20,
    author: 'bookspine',
    time: '4d ago',
    title: 'Worldbuilding thread: what manga city would you most want a guidebook for?',
    body: 'Not necessarily to live there, but to flip through maps, districts, customs, and little background details for hours.',
    category: 'Worldbuilding',
    votes: 63,
    comments: [
      { author: 'urbanmargins', time: '4d ago', votes: 10, text: 'The city design in BLAME! would make for the wildest guidebook imaginable.' }
    ]
  })
];

const buildCommunityPosts = (theme) => {
  if (theme === 'manga') return mangaPosts;
  if (theme === 'shared') return [...animePosts, ...mangaPosts];
  return animePosts;
};

const getCommunityPostById = (theme, postId) =>
  buildCommunityPosts(theme).find((post) => String(post.id) === String(postId));

const VoteRail = ({ votes, mode = 'shared', compact = false }) => {
  const isManga = mode === 'manga';
  const isShared = mode === 'shared';
  const shellClass = isShared ? 'bg-gradient-to-b from-zinc-950 to-black' : isManga ? 'bg-black' : 'bg-gray-900/70';
  const textClass = isShared ? 'text-rose-200' : isManga ? 'text-white' : 'text-red-200';
  const hoverClass = isShared ? 'text-gray-300 hover:text-rose-200' : isManga ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-red-300';

  return (
  <div
    className={`flex shrink-0 flex-col items-center rounded-2xl border border-white/10 ${
      compact ? 'gap-1 px-2 py-2 text-xs' : 'gap-2 px-3 py-3 text-sm'
    } ${shellClass}`}
  >
    <button
      type="button"
      aria-label="Upvote"
      className={`cursor-pointer transition ${hoverClass}`}
    >
      ▲
    </button>
    <span className={`font-semibold ${textClass}`}>{votes}</span>
    <button
      type="button"
      aria-label="Downvote"
      className={`cursor-pointer transition ${hoverClass}`}
    >
      ▼
    </button>
  </div>
  );
};

const CommentThread = ({ comments, mode, isManga, placeholder, limit, showViewAllLink, threadPath }) => {
  const visibleComments = typeof limit === 'number' ? comments.slice(0, limit) : comments;
  const hasHiddenComments = typeof limit === 'number' && comments.length > limit;
  const isShared = mode === 'shared';
  const commentShellClass = isShared ? 'bg-gradient-to-br from-black to-zinc-950' : isManga ? 'bg-black' : 'bg-gray-900/70';
  const fieldClass = isShared
    ? 'bg-black/80 focus:border-rose-300'
    : isManga
      ? 'bg-black focus:border-white'
      : 'bg-gray-900 focus:border-red-700';
  const actionButtonClass = isShared
    ? 'bg-rose-300 text-black hover:bg-rose-200'
    : isManga
      ? 'bg-white text-black hover:bg-gray-200'
      : 'bg-red-700 text-white hover:bg-red-600';
  const accentLinkClass = isShared ? 'text-rose-200 hover:text-rose-100' : isManga ? 'text-gray-200 hover:text-white' : 'text-red-200 hover:text-red-300';
  const activeVoteClass = isShared ? 'text-rose-200' : isManga ? 'text-white' : 'text-red-300';
  const idleVoteClass = 'text-gray-400 hover:text-white';

  return (
    <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
      <h4 className={`text-sm font-semibold ${isManga ? 'text-white' : 'text-red-200'}`}>Comments</h4>
      <div className="space-y-2">
        {visibleComments.map((comment) => (
          <article key={comment.id} className={`min-w-0 rounded-xl border border-white/8 p-3 ${commentShellClass}`}>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className={`font-semibold ${isManga ? 'text-white' : 'text-red-200'}`}>{comment.author}</span>
                <span>{comment.time}</span>
              </div>
              <p className="mt-2 text-sm text-gray-200">{comment.text}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/10 pt-3 text-xs">
                <button
                  type="button"
                  aria-label="Upvote comment"
                  className={`group relative inline-flex items-center justify-center transition ${comment.userVote === 'up' ? activeVoteClass : idleVoteClass}`}
                >
                  <span>▲</span>
                  <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
                    Upvote
                  </span>
                </button>
                <span className={`font-semibold ${isShared ? 'text-rose-200' : isManga ? 'text-white' : 'text-red-200'}`}>
                  {comment.votes ?? 0}
                </span>
                <button
                  type="button"
                  aria-label="Downvote comment"
                  className={`group relative inline-flex items-center justify-center transition ${comment.userVote === 'down' ? activeVoteClass : idleVoteClass}`}
                >
                  <span>▼</span>
                  <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
                    Downvote
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {showViewAllLink && hasHiddenComments && (
        <Link
          to={threadPath}
          className={`inline-flex text-sm font-semibold transition ${accentLinkClass}`}
        >
          View all {comments.length} comments
        </Link>
      )}

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full rounded-xl border border-white/15 p-3 text-sm text-white outline-none ${fieldClass}`}
        />
        <button
          type="button"
          aria-label="Send comment"
          className={`inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${actionButtonClass}`}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

const CommunityFeed = ({
  theme = 'shared',
  title,
  subtitle,
}) => {
  const isManga = theme === 'manga';
  const isShared = theme === 'shared';
  const posts = buildCommunityPosts(theme);
  const communityBasePath = isShared ? '/community' : isManga ? '/manga/community' : '/community';
  const accentTitleClass = isShared ? 'text-rose-300' : isManga ? 'text-white' : 'text-red-700';
  const accentTextClass = isShared ? 'text-rose-200' : isManga ? 'text-white' : 'text-red-200';
  const shellClass = isShared ? 'bg-gradient-to-br from-zinc-950 via-black to-rose-950/20' : isManga ? 'bg-zinc-950/80' : 'bg-black/30';
  const fieldClass = isShared
    ? 'bg-black/80 focus:border-rose-300'
    : isManga
      ? 'bg-black focus:border-white'
      : 'bg-gray-900 focus:border-red-700';
  const actionButtonClass = isShared
    ? 'bg-rose-300 text-black hover:bg-rose-200'
    : isManga
      ? 'bg-white text-black hover:bg-gray-200'
      : 'bg-red-700 text-white hover:bg-red-600';

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
      <div className="space-y-4">
        <section className={`rounded-2xl border border-white/10 p-5 ${shellClass}`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className={`text-3xl font-bold ${accentTitleClass}`}>{title}</h2>
              <p className="mt-2 text-sm text-gray-400">{subtitle}</p>
            </div>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-gray-300">
              Forum Feed
            </span>
          </div>
        </section>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.7fr)]">
          <section className={`rounded-2xl border border-white/10 p-5 ${shellClass}`}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className={`text-xl font-bold ${accentTextClass}`}>Create Post</h3>
                <span className="text-xs text-gray-400">Text posts only</span>
              </div>
              <input
                type="text"
                placeholder="Post title"
                className={`w-full rounded-xl border border-white/15 p-3 text-sm text-white outline-none ${fieldClass}`}
              />
              <select
                defaultValue="Discussion"
                className={`w-full rounded-xl border border-white/15 p-3 text-sm text-white outline-none ${fieldClass}`}
              >
                {COMMUNITY_CATEGORIES.map((category) => (
                  <option key={category} value={category} className="bg-black text-white">
                    {category}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Write what's on your mind..."
                className={`min-h-40 w-full rounded-xl border border-white/15 p-3 text-sm text-white outline-none ${fieldClass}`}
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${actionButtonClass}`}
                >
                  Post Thread
                </button>
              </div>
            </div>
          </section>

          <aside className={`rounded-2xl border border-white/10 p-5 ${shellClass}`}>
            <h3 className={`text-lg font-bold ${accentTextClass}`}>About This Community</h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              A combined anime and manga discussion space for recommendations, reactions, theories, deep dives, and community takes. Threads stay focused on conversation rather than media posts.
            </p>
            <h4 className={`mt-5 text-sm font-semibold uppercase tracking-[0.2em] ${isShared ? 'text-rose-200' : isManga ? 'text-gray-300' : 'text-red-200'}`}>
              Community Rules
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Keep spoilers clearly labeled.</li>
              <li>Debate the take, not the person.</li>
              <li>Stay on topic and use the right category.</li>
            </ul>
          </aside>
        </div>

        <section className="space-y-4">
          {posts.map((post) => {
            const threadPath = `${communityBasePath}/${post.id}`;

            return (
              <article key={post.id} className={`rounded-2xl border border-white/10 p-5 ${shellClass}`}>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
                    <span className={`font-semibold ${accentTextClass}`}>{post.community}</span>
                    <span>{post.handle}</span>
                    <span>{post.time}</span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5">{post.category}</span>
                  </div>

                  <Link to={threadPath} className="mt-3 block text-2xl font-bold text-white transition hover:opacity-85">
                    {post.title}
                  </Link>
                  <p className="mt-3 text-sm leading-7 text-gray-200">{post.body}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span>Posted by {post.author}</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Upvote"
                        className={`cursor-pointer transition ${isShared ? 'text-gray-300 hover:text-rose-200' : isManga ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-red-300'}`}
                      >
                        ▲
                      </button>
                      <span className={`font-semibold ${accentTextClass}`}>{post.votes ?? 0}</span>
                      <button
                        type="button"
                        aria-label="Downvote"
                        className={`cursor-pointer transition ${isShared ? 'text-gray-300 hover:text-rose-200' : isManga ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-red-300'}`}
                      >
                        ▼
                      </button>
                    </div>
                    <span>{post.comments.length} comments</span>
                    <Link
                      to={threadPath}
                      className={`font-semibold transition ${isShared ? 'text-rose-200 hover:text-rose-100' : isManga ? 'text-gray-200 hover:text-white' : 'text-red-200 hover:text-red-300'}`}
                    >
                      Open thread
                    </Link>
                  </div>

                  <CommentThread
                    comments={post.comments}
                    mode={theme}
                    isManga={isManga}
                    placeholder="Write a reply to this post..."
                    limit={FEED_COMMENT_LIMIT}
                    showViewAllLink
                    threadPath={threadPath}
                  />
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export { COMMUNITY_CATEGORIES, buildCommunityPosts, getCommunityPostById };
export default CommunityFeed;
