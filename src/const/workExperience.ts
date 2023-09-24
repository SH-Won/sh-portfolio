export interface IWork {
  compony: string
  job: string
  period: string
  tech: string[]
  description: {
    project: string
    explain: string[]
  }[]
}
export const WorkExperience: IWork = {
  compony: '아이오트러스트',
  job: '프론트엔드 개발자',
  period: '2022. 10 ~ ',
  tech: ['Vue', 'React', 'TypeScript', 'Yarn', 'Vite', 'Webpack', 'Express'],
  description: [
    {
      project: 'Wepin DashBoard',
      explain: [
        'B2B 블록체인 지갑 위핀 대시보드 컴포넌트 및 로직',
        '정렬, 목록편집, 드래그앤드롭, 팝업 개발',
      ],
    },
    {
      project: 'D\'CENT App WalletConnect Webview',
      explain: [
        '오픈소스 WalletConnect 를 이용하여 Dapp 과 지갑을 연결하는 WalletConnect 서비스 개발',
        'Vue3로 마이그레이션 과 구조 변경을 통해 유저가 WalletConnect 하는 속도 개선',
        'Dapp 회사가 자사 WalletConnect 서비스와 연결할 수 있는 QR Modal component npm 배포',
        '유지 보수',
      ],
    },
    {
      project: '디센트 홈페이지 리뉴얼',
      explain: ['Figma 디자인에 따라 기존 홈페이지를 리뉴얼'],
    },
    {
      project: 'D\'CENT App Swap Service Webview',
      explain: [
        '클레이튼 네트워크의 Dex Aggregator SwapScanner 을 연동',
        'AWS Lambda 를 이용하여 SwapScanner API handler 구현',
        '서비스에 필요한 Vue 컴포넌트 및 로직 개발 및 유지보수',
      ],
    },
  ],
}
