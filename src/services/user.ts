import { USER_API } from '@/constants/api.ts'
import http from '@/services/http.ts'

export const getCurrentUser = async () => {
    return (await http.get(USER_API.GET_CURRENT_USER)).data
}