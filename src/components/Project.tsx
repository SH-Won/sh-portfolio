import './styles/Project.scss'
import { projects } from '@/const/project'
import { RatioCardImage } from 'my-react-component'
import ItemList from './common/ItemList'
import { RouterPushParams } from '@/types/popup/RouterTypes'
interface ProjectProps {
  openDrawer?: (params: RouterPushParams) => void
}
const Project = ({ openDrawer }: ProjectProps) => {
  return (
    <>
      <h1>프로젝트</h1>
      <ItemList
        className="project-container"
        items={projects}
        renderItem={(project) => (
          <div className="project-card" key={project._id}>
            <RatioCardImage
              ratio={0.675}
              imageUrl={project.imageUrls[0]}
              click={() => {
                openDrawer?.({
                  name: 'project_detail',
                  props: {
                    project,
                  },
                })
              }}
            />
            <div className="project-info">
              <span className="heading">{project.heading}</span>
              <p className="description">{project.description}</p>
              <div className="tool">
                {project.tools.map((tool) => (
                  <span key={tool} className="tool-item">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      />
    </>
  )
}

export default Project
