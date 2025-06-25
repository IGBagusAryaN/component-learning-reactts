// import { useEffect, useState } from "react"

// type OnePiece = {
//     id: number
//     name:string
//     price: number
//     category:string
// }

// const items: OnePiece[] = [
//     {id:1 , name:'luffy', price:2000 ,category:"Onepiece"},
//     {id:2 , name:'naruto', price:4000 ,category:"Naruto"},
//     {id:3 , name:'sasuke', price:5000 ,category:"Naruto"},
//     {id:4 , name:'zoro', price:6000 ,category:"Onepiece"},
//     {id:5 , name:'Sanji', price:7000 ,category:"Onepiece"}
// ]

// export function Searching(){
//     const [search, setSearch] = useState('')
//     const [category, setCategory] = useState('All')
//     const [sortType, setSortType] = useState<'asc' | 'desc'>('asc')
//     const [filteredItems, setFilteredItems] = useState<OnePiece[]>(items)

//     useEffect(() => {
//         let result = items

//         if(search) {
//             result = result.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
//         }

//         if(category !== 'All'){
//             result = result.filter((item) => item.category === category)
//         }

//         result = result.sort((a,b) => sortType === 'asc' ? a.price - b.price : b.price - a.price)
//         setFilteredItems(result)
//     }, [search, sortType, category])

//     return(
//         <div>
//             <label htmlFor="" className="flex flex-col">
//                 Search
//                 <input type="text" onChange={(e) => setSearch(e.target.value)}/>
//             </label>
//             <select onChange={(e) => setCategory(e.target.value)}>
//                 <option value="All">Semua</option>
//                 <option value="Onepiece">One Piece</option>
//                 <option value="Naruto">Naruto</option>
//             </select>
//             <button onClick={() => setSortType(sortType === 'asc' ? 'desc' : 'asc')}>
//                 Urut berdasarkan nilai: {sortType === 'asc' ? 'tertinggi' : 'terendah'}
//                 </button>
//             <ul>
//                 {filteredItems.length > 0 ? (
//                     filteredItems.map((item) => (
//                         <li key={item.id}>
//                             {item.name} - {item.price} - {item.category}
//                         </li>
//                     ))
//                 ) : (
//                     <li>Nama tidak ditemukan</li>
//                 )}
//             </ul>
//         </div>
        
//     )
// }




import { useState } from "react"

const items = ["Luffy", "Zoro", "Sanji", "Cavendish", "Kaido", "Shanks" ]

export function Searching() {
    const [search, setSearch] = useState<string>("") // set type hanya string

    const filteredItems = items.filter((item) => 
        item.toLowerCase().includes(search.toLowerCase())
    ); //(filter) daftar items berdasarkan teks pencarian search lower atau uppercase.

    return(
        <div className="ml-2">
            <div className="font-bold">
                Searching
            </div>
            <input type="text"
            className="border border-gray-400 px-2 py-1 rounded"
                value={search}
                placeholder="Cari Onepiece..."
                onChange={(e) => setSearch(e.target.value)}  />
                {/* onChange={(e) => ...} → Menjalankan fungsi setiap kali nilai input berubah.
                    e.target.value → Mengambil nilai terbaru dari input.
                    setSearch(e.target.value) → Menyimpan nilai input ke dalam state search. */}

            <ul>
                {filteredItems.length > 0 ? ( //ngecek ada pencarian nya ga diatas 0, jika tidak ada maka akan menampilkan dibawahnya
                    filteredItems.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                    <div>
                        One Piece tidak ditemukan...
                    </div>
                )}
            </ul>
        </div>
    )
}