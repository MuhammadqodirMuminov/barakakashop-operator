export interface IAuthResponse {
  status: number
  message: string
  data: IAuthData
  refreshToken: string
  accessToken: string
}

export interface IAuthData {
  id: number
  username: string
  role: string
  phone: string
  email: string
  telegram_chat_id: number
  avatar: string
  created_at: string
}

export interface IAuthSignIn {
  username: string
  password: string
}

export interface InitialState {
  user: IAuthData | null
  token: string | null
  isAuth: boolean
  loading: {
    sign: boolean
  }
  error: null | string | unknown
}
