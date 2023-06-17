import { Notification } from 'my-react-component'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NextPageButton from './common/NextPageButton'
import './styles/Intro.scss'

const Intro = () => {
  const navigate = useNavigate()
  return (
    <div className="intro-wrapper">
      <h2>Hello! I&#39;m Dev sh</h2>
      <Notification text="준비중 입니다" height="300px" />
      <NextPageButton text="About Me" click={() => navigate('/about')} />
    </div>
  )
}

export default Intro
