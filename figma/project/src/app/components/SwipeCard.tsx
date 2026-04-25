import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { User } from '../data/mockUsers';
import { MapPin } from 'lucide-react';

interface SwipeCardProps {
  user: User;
  onSwipe: (direction: 'left' | 'right') => void;
  isTop: boolean;
}

export function SwipeCard({ user, onSwipe, isTop }: SwipeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const rotate = useTransform(x, [-300, 0, 300], [-20, 0, 20]);
  const opacity = useTransform(x, [-300, -150, 0, 150, 300], [0, 1, 1, 1, 0]);

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = x.get();
    
    if (Math.abs(currentX) > 150) {
      onSwipe(currentX > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="absolute w-full max-w-sm cursor-grab active:cursor-grabbing"
      style={{
        x,
        rotate,
        opacity,
        zIndex: isTop ? 2 : 1,
      }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      animate={
        !isDragging && {
          x: 0,
          rotate: 0,
          transition: { type: 'spring', stiffness: 300, damping: 20 }
        }
      }
    >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative h-[500px] overflow-hidden">
          <img
            src={user.photos[0]}
            alt={user.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Like/Nope indicators */}
          <motion.div
            className="absolute top-8 left-8"
            style={{
              opacity: useTransform(x, [0, 150], [0, 1]),
              scale: useTransform(x, [0, 150], [0.8, 1]),
            }}
          >
            <div className="px-6 py-3 border-4 border-green-500 text-green-500 rounded-xl rotate-12 text-2xl">
              LIKE
            </div>
          </motion.div>
          
          <motion.div
            className="absolute top-8 right-8"
            style={{
              opacity: useTransform(x, [-150, 0], [1, 0]),
              scale: useTransform(x, [-150, 0], [1, 0.8]),
            }}
          >
            <div className="px-6 py-3 border-4 border-red-500 text-red-500 rounded-xl -rotate-12 text-2xl">
              NOPE
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-3xl">{user.name}, {user.age}</h2>
            </div>
            <div className="flex items-center gap-1 text-sm mb-3 opacity-90">
              <MapPin className="w-4 h-4" />
              <span>{user.distance} miles away</span>
            </div>
            <p className="text-sm mb-3 opacity-90">{user.bio}</p>
            <div className="flex flex-wrap gap-2">
              {user.interests.slice(0, 4).map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
