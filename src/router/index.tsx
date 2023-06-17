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
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/project',
          element: <ProjectPage />,
        },
      ],
    },
  ],
  {
    basename: '/',
  }
)
