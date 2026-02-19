import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import { motion } from 'motion/react';

const availableInterests = [
  'Travel', 'Photography', 'Hiking', 'Coffee', 'Cooking', 'Music',
  'Wine', 'Art', 'Yoga', 'Fitness', 'Reading', 'Movies',
  'Rock Climbing', 'Technology', 'Gaming', 'Plants', 'Museums',
  'Dancing', 'Beach', 'Architecture', 'Beer', 'Concerts'
];

export default function Step4Interests() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleContinue = () => {
    localStorage.setItem('userInterests', JSON.stringify(selectedInterests));
    navigate('/swipe');
  };

  const handleBack = () => {
    navigate('/onboarding/photos');
  };

  return (
    <div className="h-full flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl p-8 shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="mb-6">
            <div className="flex gap-2 mb-6">
              <div className="flex-1 h-1 bg-pink-500 rounded-full" />
              <div className="flex-1 h-1 bg-pink-500 rounded-full" />
              <div className="flex-1 h-1 bg-pink-500 rounded-full" />
              <div className="flex-1 h-1 bg-pink-500 rounded-full" />
            </div>
            <p className="text-sm text-gray-500 mb-2">Step 4 of 4</p>
            <h2 className="text-2xl mb-2">Your interests</h2>
            <p className="text-gray-600 text-sm mb-6">
              Select at least 3 interests (max 5)
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {availableInterests.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <motion.button
                    key={interest}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {interest}
                  </motion.button>
                );
              })}
            </div>
            <p className="text-center text-sm text-gray-500">
              {selectedInterests.length}/5 interests selected
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
              disabled={selectedInterests.length < 3}
              className="flex-1 h-14 text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              Start Swiping
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
