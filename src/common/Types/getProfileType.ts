export type GetProfileType = {
    aboutMe: string
    contacts:ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription:string
    photos:PhotosType
    userId: number
}
type PhotosType = {
    small: null|string
    large: null|string
}


type ContactsType  = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink:string
}