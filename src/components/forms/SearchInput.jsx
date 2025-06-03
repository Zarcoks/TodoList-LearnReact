

export default function SearchInput({search, setSearch}) {
    const updateSearch = (e) => {setSearch(e.target.value)}
    return <input type="text" placeholder="Rechercher" className="bg-gray-100 p-2 border border-gray-300 rounded-[3px]" value={search} onChange={updateSearch}/>
}