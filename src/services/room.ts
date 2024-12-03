import http from '@/services/http'
import { ROOM_API } from '@/constants/api'

export const room = {
    getListRoom: async (params: any) => {
        return (await http.get(ROOM_API.LIST_ROOM(params))).data
    },

    getRoomById: async (id: any) => {
        return (await http.get(ROOM_API.ROOM_BY_ID(id))).data
    },

    createRoom: async (payload: any) => {
        return (await http.post(ROOM_API.CREATE_ROOM, payload)).data
    },

    updateRoom: async (id: any, payload: any) => {
        return (await http.put(ROOM_API.UPDATE_ROOM(id), payload)).data
    },

    deleteRoom: async (id: any) => {
        return (await http.delete(ROOM_API.DELETE_ROOM(id))).data
    },

    markRoom: async (id: any) => {
        return (await http.post(ROOM_API.MARK_ROOM(id))).data
    },

    getRoomByOwner: async (params: any) => {
        return (await http.get(ROOM_API.GET_ROOM_BY_OWNER(params))).data
    },
}