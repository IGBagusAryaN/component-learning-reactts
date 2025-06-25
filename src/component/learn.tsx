import { useEffect, useState } from "react"

type Anime = {
    id: number
    name: string
    rating: number
    category: string
}

const items: Anime[] = [
    {id:1,  name:'Luffy', rating:10, category:'OnePiece'},
    {id:2,  name:'Naruto', rating:7, category:'Naruto'},
    {id:3,  name:'Sasuke', rating:3, category:'Naruto'},
    {id:4,  name:'Zoro', rating:1, category:'OnePiece'},
]

export function SearchingNew(){
    const [search, setSearch] = useState('');
    const [sort, sortType] = useState<'asc' | 'desc'>('asc');
    const [category, setCategory] =useState('All');
    const [filteredItems, setFilteredItems] = useState<Anime[]>(items)

    useEffect(()=>{
        let result = items

        if(search){
            result =  result.filter((item) => 
                        item.name.toLowerCase().includes(search.toLowerCase()) ||
                        item.category.toLowerCase().includes(search.toLowerCase()) ||
                        item.rating.toString().includes(search))
        }

        if(category !== 'All'){
            result = result.filter((item) => item.category === category)
        }

        setFilteredItems(result)
    }, [search, category])

    return(
        <div>
            <label htmlFor="" className="flex flex-col w-64">
                Search
                <input type="text" onChange={(e) => setSearch(e.target.value)} className="border border-gray-400"/>
            </label>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="All">Semua</option>
                <option value="OnePiece">One Piece</option>
                <option value="Naruto">Naruto</option>
            </select>

            <ul>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <li key={item.id}>
                            {item.name}-{item.rating}-{item.category}
                        </li>
                    ))
                ) : (
                    <li>Nama tidak ditemukan</li>
                )}
            </ul>
        </div>
    )
}