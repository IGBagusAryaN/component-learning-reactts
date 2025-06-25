import { useEffect, useState } from "react"

type User = {
    id: string
    name: string
    username: string
    email: string
}
export function FetchData(){
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch()
        .finally(() => setLoading(false))
    }, [])

    if(loading) return <span>Loading...</span>
    
    return(
        <div>
            <h1 className="mt-5">Fetch Daftar Pengguna</h1>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>{user.name}-{user.username}-{user.email}</li>
                ))}
            </ul>
        </div>
    )
}








































// import { useEffect, useState } from "react"

// type User = {
//     id:string
//     name: string
//     username: string
//     email:string
// }

// export function FetchData(){
//     const [users, setUsers] = useState<User[]>([])
//     const [error, setError] = useState()
//     const [loading, setLoading] = useState(false)

//     useEffect(()=> {
//         setLoading(true)
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res) => res.json()
//         ).then((data) => {
//             console.log('cek data', data)
//             setUsers(data)}).
//             catch((err) => setError(err.message)).finally(()=> setLoading(false))
//     }, [])

//     if(loading) return <span className="mb-96">...loading</span>
//     if(error)return <span>{error}</span>
//     return(
//         <div>
//             <h1 className="mt-5">Daftar User</h1>
//             <ul>
//                 {users.map((user)=>(
//                     <li key={user.id}>{user.name} - {user.username}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }