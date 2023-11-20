import { errorCatch } from "@/helpers"
import { AuthService } from "@/services"
import { addNotification } from "@/utils"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { IAuthResponse, IAuthSignIn } from "./auth.interface"

type AsyncThunkConfig = {
  rejectValue: {
    error: string
  }
}

export const SignIn = createAsyncThunk<IAuthResponse, IAuthSignIn, AsyncThunkConfig>(
  "auth/signIn",
  async ({ username, password, callback }, thunkApi) => {
    try {
      const response = await AuthService.signIn(username, password)
      if (response.data) {
        callback()
      }
      return response.data // Assuming AuthService.signIn returns AxiosResponse<IAuthResponse>
    } catch (error) {
      addNotification(error)
      return thunkApi.rejectWithValue({ error: errorCatch(error) })
    }
  }
)
