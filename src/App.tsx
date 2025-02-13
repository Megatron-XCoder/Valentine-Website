import {useState, useEffect, useRef} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, PauseCircle, Gift, Calendar, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const memories = [
  {
    image: "IMG_20241210_065314_691.WEBP",
    caption: "Me Blushing looking at You 😍😍",
    date: "June 14, 2024"
  },
  {
    image: "SCREENSHOT_20250214-040024.INSTAGRAM.PNG",
    caption: "My Sweetheart ~ Cool, Gorgeous 🤩🤩🤩",
    date: "June 26, 2024"
  },
  {
    image: "SCREENSHOT_20250214-040052.INSTAGRAM.PNG",
    caption: "Us Being So weirdly Comfy with Each Other 😁😁",
    date: "June 30, 2024"
  },{
    image: "SNAPCHAT-1437946278.JPG",
    caption: "Me Blushing looking at You 😍😍",
    date: "October 14, 2024"
  },
  {
    image: "IMG_20250129_115233_778.JPG",
    caption: "My Coochiebear ~ Beautiful, Seggsyy 🤩🤩🤩",
    date: "June 12, 2025"
  },
  {
    image: "IMG_20250129_115446_694.JPG",
    caption: "My Darling is SOOO PRETTTYYYY 💋💋💖",
    date: "Jan 30, 2025"
  }
];

const timelineEvents = [
  {
    date: "June 14, 2024",
    title: "When We First Texted on Instagram",
    description: "I still remember it 😭😭😭.. HEHEHEH I was SOOOO ANNOYINNG nahh 😆😆😘😘"
  },
  {
    date: "June 26, 2024",
    title: "Our First Seggs",
    description: "HEHEHE.. It was so unexpected nahh 😍😍😍"
  },
  {
    date: "July 14, 2024",
    title: "Accepted To Be My Girlfriend",
    description: "OHHH.. Babyy you don't know how muchh effort I did that week 💖💖 Remember that Challenge??"
  },{
    date: "July 23, 2024",
    title: "Our First Ovulation",
    description: "HEHEHE.. AWW Babyy I loved it nahh 😁😁😁 as I get to see my babies.."
  },
  {
    date: "July 25, 2024",
    title: "Our First VC",
    description: "Babyy.. I still remember it nahh.. How muchh motivation,😭😭 comfortable I made you for VC nahh 😍😍😍"
  }, {
    title: "Still Many More....",
    description: "Mwuahh Mwuahh.. 💋💋💋 I Loveeee Youuu "
  }
];

const Sparkles = () => {
  const sparkles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2
  }));

  return (
    <div className="fixed inset-0 pointer-events-none">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: `${sparkle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

const FallingEmojis = () => {
  const [emojis, setEmojis] = useState<{ id: number; left: string; duration: number; emoji: string }[]>([]);
  const emojiList = ['❤️', '😍', '🐱', '💖'];

  useEffect(() => {
    const interval = setInterval(() => {
      const newEmoji = {
        id: Date.now(),
        left: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 4,
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)]
      };
      setEmojis(prev => [...prev, newEmoji]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setEmojis(prev => prev.filter(emoji => Date.now() - emoji.id < 5000));
    }, 1000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {emojis.map(emoji => (
        <div
          key={emoji.id}
          className="heart"
          style={{
            left: emoji.left,
            animation: `fall ${emoji.duration}s linear forwards`
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
};

const WelcomePage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="min-h-screen flex items-center justify-center"
  >
    <div className="text-center">
      <motion.h1 
        className="romantic-title text-7xl text-pink-600 mb-8 animate-float glow-text"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        Happy Valentine's Day, My Love! 💖
      </motion.h1>
      <motion.p 
        className="text-2xl text-pink-700 mb-8 romantic-title glow-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        You are my forever Valentine! 💕
      </motion.p>
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="text-pink-500 mx-auto" size={48} />
      </motion.div>
    </div>
  </motion.div>
);

const LoveStoryPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen py-16 px-4"
  >
    <h2 className="romantic-title text-4xl text-pink-600 text-center mb-12 glow-text">
      Our Love Story 💑
    </h2>
    <VerticalTimeline>
      {timelineEvents.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element"
          date={event.date}
          iconStyle={{ background: 'rgb(236, 72, 153)', color: '#fff' }}
          icon={<Heart />}
        >
          <h3 className="romantic-title text-2xl text-pink-600">{event.title}</h3>
          <p className="text-gray-700">{event.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </motion.div>
);

const LoveLetterPage = ({ isLetterOpen, setIsLetterOpen }: { isLetterOpen: boolean, setIsLetterOpen: (open: boolean) => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="min-h-screen flex items-center justify-center"
  >
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 pulse-glow"
        whileHover={{ scale: 1.02, rotate: 1 }}
      >
        <button
          onClick={() => setIsLetterOpen(!isLetterOpen)}
          className="w-full text-center text-pink-600 hover:text-pink-700 transition-all duration-300"
        >
          <Gift size={40} className="mx-auto mb-2" />
          <span className="romantic-title text-2xl glow-text">
            {isLetterOpen ? "Close Love Letter" : "Open Love Letter"}
          </span>
        </button>
        
        <AnimatePresence>
          {isLetterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 text-rose-500 romantic-title text-xl leading-relaxed overflow-hidden"
            >
              My Dearest Gihigugma Kong Pinangga 🐱,
              <br /><br />
              Every moment with you feels like a beautiful dream come true.💖 Your smile, Babies, Kisses 💋💋, Huggies lights up my world, and your love makes every day special.
              You're not just my girlfriend - you're my wife, my obsession, and my greatest motivation.
              <br /><br />
              Ang matag higayon nga naa ko nimo mura'g usa ka matahum nga damgo nga natuman. Ang imong pahiyom nagadan-ag sa akong kinabuhi, 😘😘
              ug ang imong gugma nagapahimuot sa matag adlaw. Dili lang ikaw ang akong uyab – ikaw usab ang akong suod nga higala,
              akong inspirasyon, ug akong labing dako nga panaw.
              <br /><br />
              Forever Yours - Aking Sinta Mahal Ka Babyy 😍😍💋💋

            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  </motion.div>
);

const PlaylistPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="min-h-screen flex items-center justify-center"
  >
    <div className="container mx-auto px-4 text-center">
      <h2 className="romantic-title text-4xl text-pink-600 mb-4 glow-text">
        Our Love Playlist 🎵
      </h2>
      <p className="text-xl text-rose-700 mb-4 romantic-title">
        Our Favorite Love Songs 💝
      </p>
      <div className="max-w-xl mx-auto spotify-player">
        <iframe
          src="https://open.spotify.com/embed/playlist/7rrmhnGUT4K1l7ssmz5RdT"
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          className="rounded-lg shadow-xl"
        ></iframe>
      </div>
    </div>
  </motion.div>
);

const MemoriesPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="min-h-screen flex items-center justify-center"
  >
    <div className="container mx-auto px-4">
      <h2 className="romantic-title text-4xl text-pink-600 text-center mb-12 glow-text">
        Our Beautiful Memories 📸
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className="photo-card"
            whileHover={{ scale: 1.05, rotate: 2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={memory.image}
              alt={memory.caption}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="romantic-title text-xl">{memory.caption}</p>
              <p className="text-sm opacity-80">{memory.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const CountdownPage = ({ countdown }: { countdown: { days: number; hours: number; minutes: number; seconds: number } }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="min-h-screen flex items-center justify-center"
  >
    <div className="container mx-auto px-4 text-center">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-2xl mx-auto pulse-glow">
        <Calendar className="mx-auto text-pink-600 mb-4" size={40} />
        <h2 className="romantic-title text-3xl text-pink-600 mb-4 glow-text">
          Counting Down to Our Next Special Day 💝
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-pink-50 p-4 rounded-lg shadow-inner min-w-[100px]"
          >
            <span className="text-4xl font-bold text-pink-600">{countdown.days}</span>
            <p className="text-pink-500">Days</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-pink-50 p-4 rounded-lg shadow-inner min-w-[100px]"
          >
            <span className="text-4xl font-bold text-pink-600">{countdown.hours}</span>
            <p className="text-pink-500">Hours</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-pink-50 p-4 rounded-lg shadow-inner min-w-[100px]"
          >
            <span className="text-4xl font-bold text-pink-600">{countdown.minutes}</span>
            <p className="text-pink-500">Minutes</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-pink-50 p-4 rounded-lg shadow-inner min-w-[100px]"
          >
            <span className="text-4xl font-bold text-pink-600">{countdown.seconds}</span>
            <p className="text-pink-500">Seconds</p>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

const GoodbyePage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="min-h-screen flex items-center justify-center"
  >
    <div className="text-center">
      <motion.h2 
        className="romantic-title text-5xl text-pink-600 mb-8 glow-text"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        I love you more than words can say! 💖
      </motion.h2>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="inline-block"
      >
        <Heart className="text-pink-500 mx-auto" size={64} />
      </motion.div>
    </div>
  </motion.div>
);

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const [showSurprise, setShowSurprise] = useState(false);

  const pages = [
    <WelcomePage key="welcome" />,
    <LoveStoryPage key="story" />,
    <LoveLetterPage key="letter" isLetterOpen={isLetterOpen} setIsLetterOpen={setIsLetterOpen} />,
    <PlaylistPage key="playlist" />,
    <MemoriesPage key="memories" />,
    <CountdownPage key="countdown" countdown={countdown} />,
    <GoodbyePage key="goodbye" />
  ];

  useEffect(() => {
    const targetDate = new Date('2025-02-14T11:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-red-100 relative overflow-hidden">
        <FallingEmojis />
        <Sparkles />

        {/* Hidden Audio Element */}
        <audio ref={audioRef} src="love.mp3" loop />

        {/* Music Control */}
        <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            onClick={togglePlayback}
            className="fixed top-4 right-4 z-50 text-pink-600 hover:text-pink-700 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg"
        >
          {playing ? (
              <PauseCircle size={32} />
          ) : (
              <Music size={32} />
          )}
        </motion.button>

        {/* Surprise Button */}
        <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowSurprise(true)}
            className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-pink-600 hover:text-pink-700"
        >
          <Star size={32} />
        </motion.button>

        {/* Navigation Controls */}
        <div className="fixed inset-x-0 bottom-8 flex justify-center items-center gap-4 z-50">
          <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-pink-600 hover:text-pink-700 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="flex gap-2">
            {pages.map((_, index) => (
                <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                        currentPage === index ? 'bg-pink-600' : 'bg-pink-300'
                    }`}
                    whileHover={{ scale: 1.2 }}
                />
            ))}
          </div>

          <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className={`p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-pink-600 hover:text-pink-700 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Surprise Modal */}
        <AnimatePresence>
          {showSurprise && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
                  onClick={() => setShowSurprise(false)}
              >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="bg-white rounded-lg p-8 max-w-md text-center"
                    onClick={e => e.stopPropagation()}
                >
                  <h3 className="romantic-title text-2xl text-pink-600 mb-4">
                    A Special Message For You 💝
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Every day with you is like a beautiful dream come true. You make my heart smile! 💖
                  </p>
                  <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setShowSurprise(false)}
                      className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600"
                  >
                    Close ✨
                  </motion.button>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* Page Content */}
        <AnimatePresence mode="wait">
          {pages[currentPage]}
        </AnimatePresence>
      </div>
  );
}


export default App;