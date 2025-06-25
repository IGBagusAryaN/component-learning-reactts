import { useEffect, useState } from "react"

type Product = {
    id: number
    name: string
    price: number
    category: string
}

const productsData: Product[] = [
    {id: 1, name: 'Action Figure Luffy', price: 24000 ,category: 'Action Figure'},
    {id: 2, name: 'Action Figure Zoro', price: 2000 ,category: 'Action Figure'},
    {id: 3, name: 'Sticker Shanks', price: 2400 ,category: 'Sticker'},
    {id: 4, name: 'Card Yugi', price: 4560 ,category: 'Card'}
]

export function SearchingCombination() {
    const [search, setSearch] = useState('')
    const [sortType, setSortType] = useState<'asc' | 'desc'>('asc')
    const [category, setCategory] = useState('All')
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData)
    const [debounceSearch, setDebounceSearch] = useState(search)

    useEffect(() =>{
        const handler = setTimeout(() => {
            setDebounceSearch(search)
        }, 500);

        return () => clearTimeout(handler)
    }, [search])
    
    useEffect(() =>{
        let result = productsData
        console.log('data result', productsData)

        if( category !== 'All'){
            result = result.filter((product) => product.category === category)
        }

        if(debounceSearch){
            result = result.filter((product) => product.name.toLowerCase().includes(debounceSearch.toLowerCase()))
        }

        result = result.sort((a, b) => sortType === 'asc' ? a.price - b.price : b.price - a.price )
        setFilteredProducts(result)
    }, [search ,debounceSearch, category ,sortType ])

    return(
        <div className="ml-2 mt-5">
            <div className="font-bold">Searching Combination</div>
            <input type="text" placeholder="Masukan keyword..." value={search} onChange={(e) => setSearch(e.target.value)} className="border border-gray-400 px-2 py-1 mr-2" />
            <select onChange={(e) => setCategory(e.target.value)} className="border border-gray-400 px-2 py-1 mr-2">
                <option value="All">Semua</option>
                <option value="Action Figure">Action Figure</option>
                <option value="Card">Card</option>
                <option value="Sticker">Sticker</option>
            </select>

            <button onClick={() => setSortType(sortType === "asc" ? "desc": "asc") } className="border border-gray-400 px-2 py-1">
                Urutkan Harga: {sortType === "asc" ?"Termurah" : "Termahal"}
            </button>

            <ul className="mb-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) =>(
                        <li key={product.id}>
                            {product.name} - {product.price} ({product.category})
                        </li>
                    ))
                ) : (
                    <p>Produk tidak ditemukan</p>
                )}
            </ul>
        </div>
    )
}