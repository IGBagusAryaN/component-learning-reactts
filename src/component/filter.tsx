import { useState } from "react"

const Onepiece = [
    { id:1, name:'Luffy', category: 'StrawHat Pirates'},
    { id:2, name:'Zoro', category: 'StrawHat Pirates'},
    { id:3, name:'Yassop', category: 'Akagami Pirates'},
    { id:4, name:'Shanks', category: 'Akagami Pirates'}
]

export function Filter(){
    const [category, setCategory] = useState<string>('All')

    const filteredOnepiece = category === 'All' ? Onepiece : Onepiece.filter((onePiece) => onePiece.category === category)

    // Jika kategori "All" → Semua produk akan ditampilkan tanpa filter. 
    // Jika kategori tertentu dipilih → .filter() akan menyaring produk yang memiliki kategori yang cocok.

    return(
        <div className="ml-2">
            <div className="font-bold">Filter</div>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="border border-gray-400">
                <option value="All"> Semua</option>
                <option value="StrawHat Pirates"> Strawhat Pirates</option>
                <option value="Akagami Pirates"> Akagami Pirates</option>
            </select>
            <ul>
                {filteredOnepiece.map((onePiece) => (
                    <li key={onePiece.id}>
                        {onePiece.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}