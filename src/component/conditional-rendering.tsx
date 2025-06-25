export const ConditionalRendering = ({isLoggedIn} : {isLoggedIn: boolean})=> {
    return(
        <div>
            { isLoggedIn ? <div className="text-green-400">Welcome Back!</div> : <div className="text-red-500"> Please Log in</div>}
        </div>
    )
}