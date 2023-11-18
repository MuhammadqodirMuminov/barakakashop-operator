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
