import { useEffect, useState } from "react"

export const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url)
                if(!response.ok) throw new Error ('Failed to fetch')

                const result = await response.json()

                setData(result)
            } catch (err) {
                setError((err as Error).message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    },[url])

    return {data, loading, error}
}