import { BASE_URL } from "@/constants"
import { getFromLocalstorage } from "@/helpers"
import axios from "axios"

const $axios = axios.create({
  baseURL: BASE_URL
})

const token = getFromLocalstorage("refreshToken")

$axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default $axios
