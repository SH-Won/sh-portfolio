import { LoadingSpinner } from 'my-react-component'
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
        const percent = (window.scrollY - height * 0.8 - 100) / explainHeight
        // const percent = (window.scrollY - height - 100) / explainHeight
        if (percent <= 0) return
        if (percent >= 1) {
          explain.current!.style.opacity = '1'
          return
        }
        explain.current!.style.opacity = `${percent * 2}`
        // explain.current!.style.opacity = `${percent - 1.5}`
        // return
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
            src="https://res.cloudinary.com/dhjegsbqv/image/upload/v1687196992/post/background_bvb0rd.jpg"
            className="background"
            onLoad={() => setLoading(false)}
          ></img>
          <div className="intro-explain">
            <span>Quest</span>
            {/* <br /> */}
            <span>더 좋은 제품을 만들기 위해</span>
            {/* <br /> */}
            <span>할 수 있는 것이</span>
            {/* <br /> */}
            <span>무엇이 있을까요?</span>
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
