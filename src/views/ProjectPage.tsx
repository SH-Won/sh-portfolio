import detailPopupConfig from '@/components/popup/detail/detailPopupConfig'
import Project from '@/components/Project'
import { usePopup } from '@/hooks'
import React from 'react'

const ProjectPage = () => {
  const { PopupDrawerRouter: ProjectDrawerRouter, push: openDrawer } = usePopup(detailPopupConfig)
  return (
    <div className="project-page-container">
      <Project openDrawer={openDrawer} />
      {ProjectDrawerRouter}
    </div>
  )
}

export default ProjectPage
