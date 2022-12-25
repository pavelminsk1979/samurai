export type GetUsersType = {
    error: null|string
    items: Array<UserType>
    totalCount:number
}

type UserType = {
name:string
    id: number
    uniqueUrlName: null|string
    photos: PhotosType
    status: null|string
    followed:boolean
}

type PhotosType = {
    small: null|string
    large: null|string
}