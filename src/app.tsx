import { Colors, Navigation } from 'my-react-component'
import { Outlet, useNavigate } from 'react-router-dom'
import { useBreakPoints } from './hooks'
import '@/styles/app.scss'
import '@/components/common/styles/common.scss'
import { useEffect, useMemo } from 'react'

const App = () => {
  const { breakPointsClass } = useBreakPoints()
  const navigate = useNavigate()
  const isNotHome = useMemo(() => {
    return location.pathname !== '/'
  }, [location.pathname])

  const goBack = (isMain: boolean) => {
    if (isMain) {
      navigate('/')
    } else {
      navigate(-1)
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={`main-container ${breakPointsClass}`}>
      <Navigation
        fixed={isNotHome ? false : true}
        back={isNotHome ? goBack : undefined}
        isMobile={breakPointsClass === 'mobile'}
        title="SH Portfolio"
        backgroundColor="transparent"
        iconColor={Colors.white}
      >
        <span style={{ cursor: 'pointer', padding: '16px' }} onClick={() => navigate('/about')}>
          About
        </span>
        <span style={{ cursor: 'pointer', padding: '16px' }} onClick={() => navigate('/project')}>
          Project
        </span>
      </Navigation>
      <Outlet />
    </div>
  )
}

// intro skill project QnA
// + detail project ??
// + filter ??

export default App
