import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import 'my-react-component/dist/style.css'
import '@/i18n'
import { OverLay, PageLoadingSpinner } from 'my-react-component'
const rootElement = document.querySelector('#root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}
const root = createRoot(rootElement)

root.render(
  <Suspense
    fallback={
      <OverLay isOpen={true} opacity={0.8}>
        <PageLoadingSpinner text="please wait a second" />
      </OverLay>
    }
  >
    <RouterProvider router={router} />
  </Suspense>
)
