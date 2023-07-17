export interface RegisterRouter {
  // type?: 'basic' | 'drawer'
  type?: string
  name: string
  title?: string
  maxProgress?: number
  progress?: number
  backgroundColor?: string
  fontColor?: string
  component: any
}
export interface RouterPushParams {
  name: string
  props?: Record<string, any>
  events?: Record<string, any>
}

export interface RouteHistory {
  // type?: 'basic' | 'drawer'
  type?: string
  name: string
  component: any
  title: string
  progress?: number
  maxProgress?: number
  backgroundColor?: string
  fontColor?: string
  props?: Record<string, any>
  events?: Record<string, any>
}
export interface PopupComponentProps {
  close?: () => void
  push?: (route: RouterPushParams) => void
}
