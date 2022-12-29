export type getLoginAuthMeType = {
    data: LoginAuthMeType
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}

export type LoginAuthMeType = {
    id: number
    login:string
    email:string
}