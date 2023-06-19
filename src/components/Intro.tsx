import { Notification } from 'my-react-component'
import { useNavigate } from 'react-router-dom'
import NextPageButton from './common/NextPageButton'
import './styles/Intro.scss'

const Intro = () => {
  const navigate = useNavigate()
  return (
    <div className="intro-wrapper">
      <h2>
        안녕하세요 <br />
        원성호 입니다.
      </h2>
      {/* <Notification text="준비중 입니다" height="300px" /> */}
      <p>
        React, Vue 를 이용하여 프론트엔드 개발을 하고 있습니다. <br />
        서비스 제품에 고객에게 편리한 기능이 많고, 획기적이여도 고객이 서비스 제품을 사용하는 것이
        불편하고 복잡하다고 느낀 다면 고객에게 좋은 서비스를 하고 있다고 생각하지 않습니다.
      </p>
      <p>
        UI, UX 는 디자이너 뿐 만이 아니라 프론트엔드 개발자라면 함께 고민해봐야 하는 주제라고
        생각합니다.
        <br /> 제품의 기능 만큼 중요한 것이 UI, UX 라고 생각하고 더 좋고 편한 UI, UX 가 제품의
        완성도와 질을 올린다고 생각합니다.
      </p>
      <NextPageButton text="About Me" click={() => navigate('/about')} />
    </div>
  )
}

export default Intro
