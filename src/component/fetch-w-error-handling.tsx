import { useEffect, useState } from "react"

type User = {
    id: string
    name: string
    username: string
    email: string
}


export function FetchWithError(){
    const [users, setUsers] = useState<User[] | null>(null)
    const [error, setError] = useState()
    const [loading, setLoading] =  useState(false)
    
    useEffect(() => {
        const fetchData = async ()=> {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users') //response berhasil diget atau tidak
                
                if(!response.ok) throw new Error(`Http error status! Status: ${response.status}`)
                
                const result: User[] = await response.json() //isi data json
                console.log('result' , result)
                console.log('result' , response)
                
                setUsers(result)
            } catch (error) {
                
            }
        }
        fetchData()
    },[])


    return(
        <div>
            <h1 className="font-bold mt-5">Fetch With error and use Trycatch</h1 >
            <ul>
            {users?.map((user) => (
                <li key={user.id}>
                    {user.name}-{user.username}- {user.email}
                </li>
            ))}
            </ul>
        </div>
    )
}