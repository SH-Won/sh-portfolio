import DetailProject from './DetailProject'

export default [
  {
    name: 'project_detail',
    title: '프로젝트',
    type: 'drawer',
    component: () => (props: any) => {
      return <DetailProject {...props} />
    },
  },
]
