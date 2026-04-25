import { motion } from 'motion/react';
import { Heart, X } from 'lucide-react';
import { Button } from './ui/button';

interface MatchModalProps {
  userName: string;
  userPhoto: string;
  onClose: () => void;
  onKeepSwiping: () => void;
}

export function MatchModal({ userName, userPhoto, onClose, onKeepSwiping }: MatchModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-6"
          >
            <Heart className="w-10 h-10 text-white" fill="white" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl mb-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
          >
            It's a Match!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-6"
          >
            You and {userName} liked each other
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto">
              <img
                src={userPhoto}
                alt={userName}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <Button
              onClick={onClose}
              className="w-full h-14 text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              Send a Message
            </Button>
            <Button
              onClick={onKeepSwiping}
              variant="outline"
              className="w-full h-14 text-lg"
            >
              Keep Swiping
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
