import { Colors, Navigation } from 'my-react-component'
import { Outlet, useNavigate } from 'react-router-dom'
import { useBreakPoints } from './hooks'
import '@/styles/app.scss'
import '@/components/common/styles/common.scss'
import { useEffect, useMemo } from 'react'

const fontStyle = {
  cursor: 'pointer',
  //paddig : '4px 10px'
  padding: '10px 20px',
  fontSize: '13px',
  fontWeight: '600',
}
const ROUTER_NAME = {
  HOME: '/',
  ABOUT: '/about',
  PROJECT: '/project',
}
const routerMapper = {
  [ROUTER_NAME.HOME]: {
    text: 'About Me',
    goNextRouter: ROUTER_NAME.ABOUT,
  },
  [ROUTER_NAME.ABOUT]: {
    text: 'Go Project',
    goNextRouter: ROUTER_NAME.PROJECT,
  },
}
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
        title="SH"
        backgroundColor="transparent"
        iconColor={Colors.white}
      >
        <span style={fontStyle} onClick={() => navigate('/about')}>
          ABOUT
        </span>
        <span style={fontStyle} onClick={() => navigate('/project')}>
          PROJECT
        </span>
      </Navigation>
      <Outlet />
    </div>
  )
}

export default App
