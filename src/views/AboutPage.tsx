import NextPageButton from '@/components/common/NextPageButton'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import Work from '@/components/Work'
import '@/styles/AboutPage.scss'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate()
  return (
    <div className="about-container">
      <Profile />
      <Skill />
      <Work />
      <NextPageButton text="Go Project" click={() => navigate('/project')} />
    </div>
  )
}

export default AboutPage
