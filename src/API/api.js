import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        'API-KEY': 'cdc1828d-6892-4ee0-a467-6625b4bde897'
    }
})
export const getUsers = (currentPage =1 , pageSize =10) => {
    return  instance.get(`/users?page=${currentPage}&count=$(pageSize)`)
    .then (response => {
        return response.data;
    })
}

export const getProfile = (userId) => {
    console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId);
    
}

export const getFollow = (userId) => {
    return    instance.post(`/follow/${userId}`)
} 

export const getUnFollow = (userId) => {
    return   instance.delete( `/follow/${userId}`, {})
}

export const getLogin = () => {
    return instance.get(`/auth/me`)
}
export const getAuth = (email, password, rememberMe) => {
    return instance.post(`/auth/login`, {email, password, rememberMe})
}
export const getLogout = () => {
    return instance.delete(`/auth/login`)
}

export const profileAPI = {
    getProfile: (userId) => {
        return  instance.get(`/profile/` + userId).then (response => {
            return response.data;
        })
    },
    getStatus(userId) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`/profile/status/`, {status: status})
    }
}