import { useEffect, useState } from "react"

export function DebounceInput() {
    const [input, setInput ] = useState('')
    const [debounce, setDebounce] = useState('')

    useEffect(()=> {
        const handler = setTimeout(() => {
            setDebounce(input)
        }, 500);

        return () => clearTimeout(handler)
    }, [input])

    return(
        <div className="ml-2">
            <div className="font-bold">Debounce Input</div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border border-gray-400 rounded" />
            <p>{debounce}</p>
        </div>
    )
}