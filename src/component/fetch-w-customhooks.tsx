import { useFetch } from "../hooks/useFetch"


type User = {
    id:string
    name: string
    username: string
}

export function FetchCustomHooks() {
    const {data:users, loading, error}= useFetch<User[]>('https://jsonplaceholder.typicode.com/users')

    if(loading) return <div className="mt-5">...Loading</div>
    if(error) return <div className="mt-5">Error:{error}</div>
    
    return(
        <div>
            <div className="mt-5 font-bold">Fetch Custom Hooks</div>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.username}
                    </li>
                ))}
            </ul>
        </div>
    )
}