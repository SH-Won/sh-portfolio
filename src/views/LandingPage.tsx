import { LoadingSpinner, RatioCardImage } from 'my-react-component'
import { useLayoutEffect, useRef, useState } from 'react'
import '@/styles/LandingPage.scss'
import Intro from '@/components/Intro'

const LandingPage = () => {
  const intro = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLDivElement>(null)
  const background = useRef<HTMLDivElement>(null)
  const explain = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  useLayoutEffect(() => {
    if (loading) return
    const scrollEvent = () => {
      const height = trigger.current?.getBoundingClientRect().height as number
      if (window.scrollY < 200) {
        trigger.current!.style.opacity = '1'
      }
      const percent = window.scrollY / height
      if (percent > 0.8) {
        const explainHeight = explain.current!.getBoundingClientRect().height
        const percent = (window.scrollY - height * 0.8 - 20) / explainHeight
        if (percent >= 1) {
          explain.current!.style.opacity = '1'
          return
        }
        explain.current!.style.opacity = `${percent}`
        return
      }
      trigger.current!.style.opacity = `${1 - percent * 1}`
    }
    const throttling = (func: () => void) => {
      let timer: ReturnType<typeof setTimeout>
      return function () {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          func()
        }, 200)
      }
    }
    const throttleScrollEvent = throttling(scrollEvent)
    window.addEventListener('scroll', scrollEvent)
    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [loading])

  return (
    <>
      <div className="intro-hero" ref={intro}>
        <div className="intro-container" ref={trigger}>
          <img
            src="https://res.cloudinary.com/dhjegsbqv/image/upload/v1687036433/post/leg_rk2ycg.png"
            className="background"
            onLoad={() => setLoading(false)}
          ></img>
          <div className="intro-explain">
            <span>Mission</span>
            <br />
            UI, UX
            <br />
            Front End
            <br />
            Developer
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="background" ref={background}></div>
        <div className="explain">
          <div ref={explain}>
            <Intro />
          </div>
        </div>
      </div>
      {loading && <LoadingSpinner opacity={0.6} />}
    </>
  )
}

export default LandingPage
