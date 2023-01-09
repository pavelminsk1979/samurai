import axios from "axios";


const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': 'b48cd3f5-7cda-4a22-b331-9292412429bd'
        }
    }
)


export const usersAPI = {
    getParticipants(activePage: number, count: number) {
        return instance.get <UsersType>(`users?page=${activePage}&count=${count}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get <AuthMeType>(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const profilesAPI = {
    getProfiles(userId: string) {
        return instance.get<ProfilesType>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: any) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusType>('profile/status', {status: status})
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    postFollow(userId: number) {
        return instance.post<FollowType>(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },

    deleteFollow(userId: number) {
        return instance.delete<FollowType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

type UpdateStatusType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}

export type FollowType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}


export type ProfilesType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string
        large: string
    }
    userId: number
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}


export type UsersType = {
    error: string
    items: Array<ParticipanType>
    totalCount: number
}
export type ParticipanType = {
    id: number,
    name: string,
    followed: boolean, /* полезная для меня анкета или нет*/
    status: string
    photos: {
        small: string,
        large: string
    }
}


export type AuthMeType = {
    data: DataAuthMeType
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}
export type DataAuthMeType = {
    id: number
    login: string
    email: string
}

type PhotosType = {
    small: string
    large: string
}


export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType,
    userId: number
}