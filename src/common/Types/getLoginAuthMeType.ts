export type getLoginAuthMeType = {
    data: LoginAuthMeType
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}

export type LoginAuthMeType = {
    id: null|number
    login:null|string
    email: null|string
}