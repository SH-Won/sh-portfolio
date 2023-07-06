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
        '위핀 위젯과 연동',
      ],
    },
    {
      project: 'D\'CENT App WalletConnect Webview',
      explain: [
        '오픈소스 WalletConnect 를 이용하여 Dapp 과 지갑을 연결하는 WalletConnect 서비스 개발 ( V1, V2 WalletConnect를 모두 서비스 )',
        '다이나믹 링크, QR 을 통해 자사 App 과 바로 WalletConnect 하도록 Modal개발',
      ],
    },
    {
      project: '디센트 홈페이지 리뉴얼',
      explain: ['Figma 디자인에 따라 기존 홈페이지를 리뉴얼'],
    },
    {
      project: 'D\'CENT App Swap Service Webview',
      explain: [
        '클레이튼 네트워크의 Dex Aggregator SwapScanner 을 연동 및 서비스',
        'AWS Lambda 를 통한 API handler 구현',
        '서비스에 필요한 Vue 컴포넌트 개발',
      ],
    },
  ],
}
