export const AUTH_API = {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESEND_CONFIRMATION: '/auth/resend-confirmation',
    CONFIRM_REGISTRATION: '/auth/confirm-registration',
}

export const USER_API = {
    GET_CURRENT_USER: '/user/me',
    UPDATE_USER: (userId: any) => `/user/${userId}`,
    USER_BY_ID: (userId: any) => `/user/${userId}`,
    GET_MARKED_ROOM: (params: any) => {
        const query = Object.keys(params)
            .filter(key => params[key] !== undefined &&
                params[key] !== null &&
                params[key] !== 0 &&
                params[key] !== '')
            .map(key => `${key}=${params[key]}`)
            .join('&')
        return `/user/marked-rooms?${query}`
    },
    CHECK_ROOM: (id: any) => `/user/check-room/${id}`,
}

export const ROOM_API = {
    LIST_ROOM: (params: any) => {
        const query = Object.keys(params)
            .filter(key => params[key] !== undefined &&
                params[key] !== null &&
                params[key] !== 0 &&
                params[key] !== '')
            .map(key => `${key}=${params[key]}`)
            .join('&')
        return `/room/?${query}`
    },
    CREATE_ROOM: '/room',
    UPDATE_ROOM: (id: any) => `/room/${id}`,
    DELETE_ROOM: (id: any) => `/room/${id}`,
    ROOM_BY_ID: (id: any) => `room/${id}`,
    MARK_ROOM: (id: any) => `/room/mark-room/${id}`,
    GET_ROOM_BY_OWNER: (params: any) => {
        const query = Object.keys(params)
            .filter(key => params[key] !== undefined &&
                params[key] !== null &&
                params[key] !== 0 &&
                params[key] !== '')
            .map(key => `${key}=${params[key]}`)
            .join('&')
        return `/room/owner?${query}`
    }
}