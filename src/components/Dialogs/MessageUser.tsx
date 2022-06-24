type MessageUserType={
    message:string
}
export function MessageUser (props:MessageUserType) {
    return(
        <div>{props.message}</div>
    )
}