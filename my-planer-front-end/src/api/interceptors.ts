import axios ,{ type CreateAxiosDefaults} from "axios";
import { getAccessToken, removeAccessToken } from "@/services/auth-token.service";
import { errorCatch} from "@/api/error";
import { authService} from "@/services/auth.service";

const options : CreateAxiosDefaults = {
    baseURL: '/api',
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
}

const axiosClassic = axios.create({
  // baseURL: process.env.APP_SERVER_URL || 'http://localhost:4200/api',
  // baseURL: import.meta.env.PROD
  //   ? 'https://1planer.stage-dream.tech/api'
  //   : 'http://localhost:4200/api',
  // withCredentials: true,
})

const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
    const accessToken = getAccessToken()

    if(config?.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

axiosWithAuth.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config

        if (
            (error?.response?.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                await authService.getNewTokens()
                return axiosWithAuth.request(originalRequest)
            } catch (error) {
                if (errorCatch(error) === 'jwt expired') removeAccessToken()
            }
        }

        throw error
    }
)

export { axiosClassic, axiosWithAuth }