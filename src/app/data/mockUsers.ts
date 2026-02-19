export interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  photos: string[];
  distance: number;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah',
    age: 28,
    bio: 'Coffee enthusiast ☕ | Travel addict ✈️ | Dog mom to a golden retriever 🐕',
    interests: ['Travel', 'Photography', 'Hiking', 'Coffee'],
    photos: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800'],
    distance: 3
  },
  {
    id: '2',
    name: 'Alex',
    age: 31,
    bio: 'Foodie exploring the city one restaurant at a time 🍝 Live music lover 🎸',
    interests: ['Cooking', 'Music', 'Wine', 'Art'],
    photos: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'],
    distance: 5
  },
  {
    id: '3',
    name: 'Jamie',
    age: 26,
    bio: 'Yoga instructor by day, Netflix connoisseur by night 🧘‍♀️📺',
    interests: ['Yoga', 'Fitness', 'Reading', 'Movies'],
    photos: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800'],
    distance: 2
  },
  {
    id: '4',
    name: 'Michael',
    age: 29,
    bio: 'Software engineer who actually goes outside 💻🌲 Rock climbing enthusiast',
    interests: ['Rock Climbing', 'Technology', 'Gaming', 'Hiking'],
    photos: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800'],
    distance: 7
  },
  {
    id: '5',
    name: 'Emma',
    age: 27,
    bio: 'Artist and plant parent 🌿🎨 Looking for someone to explore museums with',
    interests: ['Art', 'Plants', 'Museums', 'Painting'],
    photos: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800'],
    distance: 4
  },
  {
    id: '6',
    name: 'Daniel',
    age: 33,
    bio: 'Adventure seeker 🏔️ Trying to visit all national parks. Chef on weekends 👨‍🍳',
    interests: ['Hiking', 'Cooking', 'Photography', 'Travel'],
    photos: ['https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800'],
    distance: 6
  },
  {
    id: '7',
    name: 'Olivia',
    age: 25,
    bio: 'Dance teacher with a passion for salsa 💃 Beach lover and sunset chaser 🌅',
    interests: ['Dancing', 'Beach', 'Music', 'Travel'],
    photos: ['https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800'],
    distance: 3
  },
  {
    id: '8',
    name: 'Chris',
    age: 30,
    bio: 'Architect by profession, musician by passion 🎵 Love a good craft beer 🍺',
    interests: ['Music', 'Architecture', 'Beer', 'Concerts'],
    photos: ['https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800'],
    distance: 5
  }
];
