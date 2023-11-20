import { Loader } from "@/components"
import loadable from "@loadable/component"
const handleCatchChunkError = () => {
  return { default: Loader }
}

export const Home = loadable(
  () => import("@/pages").then(({ Home }) => ({ default: Home })).catch(handleCatchChunkError),
  { fallback: <Loader /> }
)

export const SignIn = loadable(
  () => import("@/pages").then(({ SignIn }) => ({ default: SignIn })).catch(handleCatchChunkError),
  { fallback: <Loader /> }
)

export const Market = loadable(() =>
  import("@/pages").then(({ Market }) => ({ default: Market })).catch(handleCatchChunkError)
)

export const Statistics = loadable(() =>
  import("@/pages").then(({ Statistics }) => ({ default: Statistics })).catch(handleCatchChunkError)
)

export const Payment = loadable(() =>
  import("@/pages").then(({ Payment }) => ({ default: Payment })).catch(handleCatchChunkError)
)
