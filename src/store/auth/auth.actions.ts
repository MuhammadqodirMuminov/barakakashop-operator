import { errorCatch } from "@/helpers"
import { AuthService } from "@/services"
import { addNotification } from "@/utils"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { IAuthResponse, IAuthSignIn } from "./auth.interface"

export const SignIn = createAsyncThunk<IAuthResponse, IAuthSignIn>(
  "auth/signIn",
  async ({ username, password }, thunkApi) => {
    try {
      const response = await AuthService.signIn(username, password)
      return response
    } catch (error) {
      addNotification(error)
      return thunkApi.rejectWithValue(errorCatch(error))
    }
  }
)
