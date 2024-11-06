import http from '@/services/http'
import { AUTH_API } from '@/constants/API'

export const login = async (payload: any) => {
    return await http.post(AUTH_API.LOGIN, payload)
}

export const logout = async () => {
    return await http.post(AUTH_API.LOGOUT)
}

export const register = async (payload: any) => {
    return await http.post(AUTH_API.REGISTER, payload)
}