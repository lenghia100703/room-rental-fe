import { USER_API } from '@/constants/api'
import http from '@/services/http'

export const getCurrentUser = async () => {
    return (await http.get(USER_API.GET_CURRENT_USER)).data
}

export const getUserById = async (id: string) => {
    return (await http.get(USER_API.USER_BY_ID(id))).data
}

export const getMarkedRooms = async (params: any) => {
    return (await http.get(USER_API.GET_MARKED_ROOM(params))).data
}

export const checkRoom = async (id: any) => {
    return (await http.get(USER_API.CHECK_ROOM(id))).data
}

export const updateUser = async (id: any, payload: any) => {
    return (await http.put(USER_API.UPDATE_USER(id), payload)).data
}