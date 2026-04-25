import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import { ImagePlus } from 'lucide-react';
import { motion } from 'motion/react';

export default function Step3Photos() {
  const [photoCount, setPhotoCount] = useState(0);
  const navigate = useNavigate();

  const handleAddPhoto = () => {
    if (photoCount < 6) {
      setPhotoCount(photoCount + 1);
    }
  };

  const handleContinue = () => {
    navigate('/onboarding/interests');
  };

  const handleBack = () => {
    navigate('/onboarding/age');
  };

  return (
    <div className="h-full flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="mb-6">
            <div className="flex gap-2 mb-6">
              <div className="flex-1 h-1 bg-pink-500 rounded-full" />
              <div className="flex-1 h-1 bg-pink-500 rounded-full" />
              <div className="flex-1 h-1 bg-pink-500 rounded-full" />
              <div className="flex-1 h-1 bg-gray-200 rounded-full" />
            </div>
            <p className="text-sm text-gray-500 mb-2">Step 3 of 4</p>
            <h2 className="text-2xl mb-2">Add your photos</h2>
            <p className="text-gray-600 text-sm mb-6">Add at least 2 photos to continue</p>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={i === photoCount ? handleAddPhoto : undefined}
                  className={`aspect-square rounded-2xl flex items-center justify-center cursor-pointer transition-all ${
                    i < photoCount
                      ? 'bg-gradient-to-br from-pink-500 to-purple-600'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {i < photoCount ? (
                    <span className="text-white text-2xl">{i + 1}</span>
                  ) : i === photoCount ? (
                    <ImagePlus className="w-8 h-8 text-gray-400" />
                  ) : (
                    <span className="text-gray-300 text-2xl">{i + 1}</span>
                  )}
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500">
              {photoCount}/6 photos added
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleBack}
              variant="outline"
              className="w-1/3 h-14 text-lg"
            >
              Back
            </Button>
            <Button
              onClick={handleContinue}
              disabled={photoCount < 2}
              className="flex-1 h-14 text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              Continue
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
