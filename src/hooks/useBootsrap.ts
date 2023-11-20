import { getFromLocalstorage, getTokens } from "@/helpers"
import { addNotification } from "@/utils"
import { useEffect, useState } from "react"
import { useActions, useTypedSelector } from "."

export default function useBootstrap() {
  const { setAuth, setToken, logout } = useActions()
  const { isAuth } = useTypedSelector((state) => state.auth)
  const [isInitiated, setIsInitiated] = useState(true)

  const user = getFromLocalstorage("user")
  const accessToken = getTokens().accessToken

  const setApp = () => {
    if (accessToken && user) {
      setAuth(true)
      setToken(accessToken)
    } else {
      logout()
    }
  }

  useEffect(() => {
    const appConfig = () => {
      try {
        setApp()
        setIsInitiated(false)
      } catch (error) {
        addNotification(error)
      }
    }

    appConfig()
  })

  return { isAuth, isInitiated }
}
