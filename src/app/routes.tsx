import { createBrowserRouter } from 'react-router';
import Root from './pages/Root';
import Step1Name from './pages/onboarding/Step1Name';
import Step2Age from './pages/onboarding/Step2Age';
import Step3Photos from './pages/onboarding/Step3Photos';
import Step4Interests from './pages/onboarding/Step4Interests';
import Swipe from './pages/Swipe';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Step1Name />,
      },
      {
        path: 'onboarding/name',
        element: <Step1Name />,
      },
      {
        path: 'onboarding/age',
        element: <Step2Age />,
      },
      {
        path: 'onboarding/photos',
        element: <Step3Photos />,
      },
      {
        path: 'onboarding/interests',
        element: <Step4Interests />,
      },
      {
        path: 'swipe',
        element: <Swipe />,
      },
    ],
  },
]);