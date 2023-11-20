import { $axios } from "@/config"
import { saveStorage } from "@/helpers"
import { IAuthResponse, IAuthSignIn } from "@/store/auth/auth.interface"
import { AxiosResponse } from "axios"
import { EndPointes } from "../endpoints"

export const AuthService = {
  async signIn(username: string, password: string) {
    const response = await $axios.post<IAuthSignIn, AxiosResponse<IAuthResponse>>(
      EndPointes.auth.signIn,
      {
        username,
        password
      }
    )

    if (response.data.accessToken) {
      saveStorage(response.data)
    }
    return response
  }
}
