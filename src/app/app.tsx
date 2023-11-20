import { Loader } from "@/components"
import { Router } from "@/router"
import { store } from "@/store/store"
import { GlobalStyles } from "@/styles"
import { history } from "@/utils/history"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import { HistoryRouter } from "./history-router"

export const App = () => {
  return (
    <HistoryRouter history={history}>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <GlobalStyles />
          <Toaster />
          <Router />
        </Suspense>
      </Provider>
    </HistoryRouter>
  )
}
