export type Badge = {
  id: string
  name: string
  visible: boolean
}

export type User = {
  avatarUrl: string
  badges: Badge[]
  email: string
  integrations: {
    github: {
      email: string
    }
    zeit: {
      email: string
      token: string
    }
  }
  name: string
  subscription: {
    amount: number
    since: string
  }
  username: string
}

export type Notification = {
  buttons: string[]
  endTime: number
  id: number
  notificationType: string
  title: string
}

export type State = {
  hasLoadedApp: boolean
  jwt: string
  isAuthenticating: boolean
  userMenuOpen: boolean
  authToken: string
  error: string
  user: User
  connected: boolean
  notifications: Notification[]
  isLoadingCLI: boolean
  isLoadingGithub: boolean
  isLoadingZeit: boolean
  contextMenu: {
    show: boolean
    items: string[]
    x: number
    y: number
  }
  currentModal: string
  isPatron: boolean
  isLoggedIn: boolean
}
