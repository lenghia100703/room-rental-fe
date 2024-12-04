import http from '@/services/http'
import { AUTH_API } from '@/constants/API'
import { putLocalStorage } from '@/helpers/localStorageHelper'
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorageKey'

export const login = async (payload: any) => {
    const response = await http.post(AUTH_API.LOGIN, payload)
    putLocalStorage(LOCAL_STORAGE_KEYS.AUTHENTICATION_TOKEN, response.data.accessToken)
    return response
}

export const logout = async () => {
    return await http.post(AUTH_API.LOGOUT)
}

export const register = async (payload: any) => {
    return await http.post(AUTH_API.REGISTER, payload)
}