import { useState, useEffect } from 'react';
import { Heart, X, RotateCcw, Settings, MessageCircle, User as UserIcon } from 'lucide-react';
import { SwipeCard } from '../components/SwipeCard';
import { MatchModal } from '../components/MatchModal';
import { mockUsers, User } from '../data/mockUsers';
import { motion, AnimatePresence } from 'motion/react';

export default function Swipe() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedUser, setMatchedUser] = useState<User | null>(null);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const currentUser = users[currentIndex];
  const nextUser = users[currentIndex + 1];

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    
    // Simulate a match (30% chance on right swipe)
    if (direction === 'right' && Math.random() > 0.7) {
      setMatchedUser(currentUser);
      setTimeout(() => setShowMatch(true), 300);
    }

    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setSwipeDirection(null);
    }, 300);
  };

  const handleLike = () => {
    if (currentUser) handleSwipe('right');
  };

  const handleNope = () => {
    if (currentUser) handleSwipe('left');
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  if (currentIndex >= users.length) {
    return (
      <div className="h-full flex items-center justify-center p-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-6">
            <Heart className="w-10 h-10 text-white" fill="white" />
          </div>
          <h2 className="text-3xl mb-4">No more profiles</h2>
          <p className="text-gray-600 mb-6">Check back later for new people nearby!</p>
          <button
            onClick={() => setCurrentIndex(0)}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-2xl">Spark</span>
        </div>
        <div className="flex gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MessageCircle className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <UserIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Swipe Area */}
      <div className="flex-1 flex items-center justify-center px-6 pb-32 relative">
        <div className="relative w-full max-w-sm h-[550px]">
          <AnimatePresence>
            {nextUser && (
              <div className="absolute inset-0 flex items-center justify-center">
                <SwipeCard
                  user={nextUser}
                  onSwipe={() => {}}
                  isTop={false}
                />
              </div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {currentUser && (
              <motion.div
                key={currentUser.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{
                  x: swipeDirection === 'right' ? 500 : swipeDirection === 'left' ? -500 : 0,
                  opacity: 0,
                  transition: { duration: 0.3 }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <SwipeCard
                  user={currentUser}
                  onSwipe={handleSwipe}
                  isTop={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 px-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleNope}
          className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        >
          <X className="w-8 h-8 text-red-500" />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleUndo}
          disabled={currentIndex === 0}
          className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCcw className="w-6 h-6 text-yellow-500" />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart className="w-8 h-8 text-white" fill="white" />
        </motion.button>
      </div>

      {/* Match Modal */}
      <AnimatePresence>
        {showMatch && matchedUser && (
          <MatchModal
            userName={matchedUser.name}
            userPhoto={matchedUser.photos[0]}
            onClose={() => setShowMatch(false)}
            onKeepSwiping={() => setShowMatch(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
