import React, { Ref, RefObject, useLayoutEffect, useRef, useState } from 'react'
import { skills } from '@/const/images'
import './styles/Skill.scss'
import { Button, RatioCardImage, Colors } from 'my-react-component'
import { RouterPushParams } from '@/types/popup/RouterTypes'
interface SkillProps {
  introRef?: RefObject<HTMLDivElement>
  triggerRef?: RefObject<HTMLDivElement>
  openPopup?: (route: RouterPushParams) => void
}
const Skill = ({ introRef, triggerRef, openPopup }: SkillProps) => {
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
