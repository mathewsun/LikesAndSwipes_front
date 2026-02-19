import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Heart } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { motion } from 'motion/react';

export default function Step1Name() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (name.trim()) {
      localStorage.setItem('userName', name);
      navigate('/onboarding/age');
    }
  };

  return (
    <div className="h-full flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-4">
            <Heart className="w-8 h-8 text-white" fill="white" />
          </div>
          <h1 className="text-3xl mb-2">Welcome to Spark</h1>
          <p className="text-gray-600">Let's create your profile</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="mb-6">
            <div className="flex gap-2 mb-6">
              <div className="flex-1 h-1 bg-pink-500 rounded-full" />
              <div className="flex-1 h-1 bg-gray-200 rounded-full" />
              <div className="flex-1 h-1 bg-gray-200 rounded-full" />
              <div className="flex-1 h-1 bg-gray-200 rounded-full" />
            </div>
            <p className="text-sm text-gray-500 mb-2">Step 1 of 4</p>
            <h2 className="text-2xl mb-4">What's your name?</h2>
            <Input
              type="text"
              placeholder="Enter your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-lg h-14"
              onKeyDown={(e) => e.key === 'Enter' && handleContinue()}
              autoFocus
            />
          </div>

          <Button
            onClick={handleContinue}
            disabled={!name.trim()}
            className="w-full h-14 text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
          >
            Continue
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
