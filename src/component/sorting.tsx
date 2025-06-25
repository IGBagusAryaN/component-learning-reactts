import { useState } from "react"

const Onepiece = [
    {id:1, name: 'sanji', bounty: 100},
    {id:2, name: 'kaido', bounty: 900},
    {id:3, name: 'luffy', bounty: 960},
    {id:4, name: 'queen', bounty: 60},
]

export function Sorting(){
    const [sortType, setSortType] = useState<string>('asc')

    const sortedOnepiece = [...Onepiece].sort((a, b) => 
        sortType === "asc" ? a.bounty - b.bounty : b.bounty - a.bounty) // asc nilai awal
    // Jika sortType === "asc" → Urutkan dari bounty terkecil ke terbesar (a.bounty - b.bounty).
    // Jika sortType === "desc" → Urutkan dari bounty terbesar ke terkecil (b.bounty - a.bounty).
    return(
        <div className="ml-2">
            <div className="font-bold">Sorting</div>
            <select value={sortType} onChange={(e) => setSortType(e.target.value)} className="border border-gray-400">
                <option value="asc">Bounty termahal</option>
                <option value="desc">Bounty termurah</option>
            </select>
            <ul>
                {sortedOnepiece.map((onePiece) => (
                    <li key={onePiece.id}>
                        {onePiece.name} - ${onePiece.bounty}
                    </li>
                ))}
            </ul>
        </div>
    )
}