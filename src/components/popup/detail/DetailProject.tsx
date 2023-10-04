import { IProject } from '@/const/project'
import { PopupComponentProps } from '@/types/popup/RouterTypes'
import { AutoCarousel, Button, Colors, RatioCardImage } from 'my-react-component'
import './styles/DetailProject.scss'

interface DetailProjectProps extends PopupComponentProps {
  project: IProject | undefined
}
const DetailProject = ({ project, close }: DetailProjectProps) => {
  if (!project) return null

  return (
    <div className="popup-detail-project-container">
      <div className="title">
        <span className="heading">{project.heading}</span>
        <span className="description">{project.description}</span>
      </div>
      <AutoCarousel<(typeof project.imageUrls)[0]>
        items={project.imageUrls}
        time={3000}
        renderItems={(imageUrl, index) => (
          <RatioCardImage key={index + '_' + project._id} ratio={0.7} imageUrl={imageUrl} />
        )}
      />
      <div className="project-detail-description">
        <div className="main">
          <span className="sub-title">Tech</span>
          <div className="tool">
            {project.tools.map((tool) => (
              <span key={tool} className="tool-item indigo">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="information">
          <span className="sub-title">About</span>
          <ul className="list">
            {project.information.map((info, index) => (
              <li key={index + '_' + index}>{info}</li>
            ))}
          </ul>
        </div>
        <div className="information">
          <span className="sub-title">GitHub</span>
          <a href={project.github} target="_blank" rel="noreferrer">
            {project.github}
          </a>
          {project.link && (
            <>
              <span className="sub-title">Website</span>
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.link}
              </a>
            </>
          )}
        </div>
      </div>
      <Button
        fontColor={Colors.white}
        border={Colors.grey_bbb}
        color={Colors.grey_111}
        click={() => close?.()}
      >
        닫기
      </Button>
    </div>
  )
}

export default DetailProject
