import { createBrowserRouter } from 'react-router-dom'
import App from '@/app'
import LandingPage from '@/views/LandingPage'
import AboutPage from '@/views/AboutPage'
import ProjectPage from '@/views/ProjectPage'

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
          // Component: lazy(() => import('@/views/LandingPage')),
        },
        {
          path: '/about',
          element: <AboutPage />,
          // Component: lazy(() => import('@/views/AboutPage')),
        },
        {
          path: '/project',
          element: <ProjectPage />,
          // Component: lazy(() => import('@/views/ProjectPage')),
        },
      ],
    },
  ],
  {
    basename: '/',
  }
)
