import { Colors, Element } from 'my-react-component'
import React from 'react'
interface NextPageButtonProps {
  text: string
  click?: () => void
}
const NextPageButton = ({ text, click }: NextPageButtonProps) => {
  return (
    <div className="next-page-btn" onClick={click}>
      <span>{text}</span>
      <div className="icon">
        <Element name="ArrowLeft" size="medium" color={Colors.white} />
      </div>
    </div>
  )
}

export default NextPageButton
