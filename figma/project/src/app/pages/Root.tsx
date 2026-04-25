import { Outlet } from 'react-router';

export default function Root() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Outlet />
    </div>
  );
}
