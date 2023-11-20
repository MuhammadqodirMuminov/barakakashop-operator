// import {signIn} from '@/store';
import { useActions } from "@/hooks"
import { addNotification } from "@/utils"
import { Typography } from "antd"
import { PasswordField, UsernameField } from "../Fields"
import { AuthForm } from "../Form"
import { authLoadings } from "../constants"
import { authDictionary } from "../dictionary"
import { IValues } from "./sign-in.interface"

export const SignIn = () => {
  const { SignIn } = useActions()
  const login = { username: "barakashop", password: "123456789" }

  const handleFinish = async (values: IValues) => {
    SignIn({
      username: values.username,
      password: values.password,
      callback: () => {
        addNotification("Successfully logged In")
      }
    })
  }

  return (
    <AuthForm login loader={authLoadings.sign} text={authDictionary.signIn} onFinish={handleFinish}>
      <Typography.Title style={{ textAlign: "center", marginBottom: "50px" }}>
        {authDictionary.logintitle}
      </Typography.Title>

      <UsernameField
        value={login.username}
        label={authDictionary.loginEmail}
        placeholder={authDictionary.loginPlaceholder}
      />

      <PasswordField
        name="password"
        value={login.password}
        label={authDictionary.password}
        placeholder={authDictionary.passwordPlaceholder}
      />
    </AuthForm>
  )
}
