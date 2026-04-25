import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { motion } from 'motion/react';

export default function Step2Age() {
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    const ageNum = parseInt(age);
    if (ageNum >= 18 && ageNum <= 99) {
      localStorage.setItem('userAge', age);
      navigate('/onboarding/photos');
    }
  };

  const handleBack = () => {
    navigate('/onboarding/name');
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
              <div className="flex-1 h-1 bg-gray-200 rounded-full" />
              <div className="flex-1 h-1 bg-gray-200 rounded-full" />
            </div>
            <p className="text-sm text-gray-500 mb-2">Step 2 of 4</p>
            <h2 className="text-2xl mb-4">How old are you?</h2>
            <Input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="text-lg h-14"
              min="18"
              max="99"
              onKeyDown={(e) => e.key === 'Enter' && handleContinue()}
              autoFocus
            />
            {age && (parseInt(age) < 18 || parseInt(age) > 99) && (
              <p className="text-sm text-red-500 mt-2">Please enter a valid age (18-99)</p>
            )}
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
              disabled={!age || parseInt(age) < 18 || parseInt(age) > 99}
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
