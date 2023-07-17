import { skills } from '@/const/images'
import './styles/Skill.scss'
import { RatioCardImage } from 'my-react-component'

const Skill = () => {
  return (
    <>
      <div className="skill-main-container">
        <h2 className="title">TECH</h2>
        <div className="skill-container">
          {skills.map((item, index) => (
            <div key={index} className="skill-image" style={{ opacity: '1' }}>
              <RatioCardImage ratio={1} imageUrl={item.url} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skill
