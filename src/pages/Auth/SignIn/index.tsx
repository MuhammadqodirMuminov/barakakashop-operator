// import {signIn} from '@/store';
import { Typography } from "antd"
import { EmailField, PasswordField } from "../Fields"
import { AuthForm } from "../Form"
import { authLoadings } from "../constants"
import { authDictionary } from "../dictionary"
import { IValues } from "./sign-in.interface"

export const SignIn = () => {
  // const dispatch = useDispatch()
  const login = { email: "barakashop@gmail.com", password: "123456789" }

  const handleFinish = (values: IValues) => {
    console.log(values)
  }

  return (
    <AuthForm login loader={authLoadings.sign} text={authDictionary.signIn} onFinish={handleFinish}>
      <Typography.Title style={{ textAlign: "center", marginBottom: "50px" }}>
        {authDictionary.logintitle}
      </Typography.Title>

      <EmailField
        value={login.email}
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
