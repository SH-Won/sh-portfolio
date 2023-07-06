import './styles/Profile.scss'
import { profile } from '@/const/profile'

const Profile = () => {
  const profileEntries = Object.entries(profile)
  return (
    <div className="profile-container">
      <h2>Contact &amp; Channels</h2>
      {profileEntries.map(([key, value], index) => (
        <div className="sub-container" key={index}>
          <span className="heading">{key}</span>
          <span className="sub-title">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default Profile
