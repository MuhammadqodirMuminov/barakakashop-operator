import { $axios } from "@/config"
import { saveStorage } from "@/helpers"
import { IAuthResponse, IAuthSignIn } from "@/store/auth/auth.interface"
import { EndPointes } from "../endpoints"

export const AuthService = {
  async signIn(username: string, password: string) {
    const response = await $axios.post<IAuthSignIn, IAuthResponse>(EndPointes.auth.signIn, {
      username,
      password
    })
    if (response.accessToken) {
      saveStorage(response)
    }
    return response
  }
}
