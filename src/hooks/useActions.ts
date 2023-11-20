import { AllActions } from "@/store/root.actions"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(AllActions, dispatch), [dispatch])
}
