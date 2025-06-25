import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <div>Counter</div>
            <div className="flex items-center ml-3 ">
                <div className="mr-5">{count}</div>
                <button className="border border-gray-400 px-3 py-1 rounded" onClick={() => setCount(count + 1)}>Tambah</button>
                <button  className="border border-gray-400 px-3 py-1 rounded" onClick={() => setCount(count - 1)}>Kurangi</button>
            </div>
        </div>
    )
}