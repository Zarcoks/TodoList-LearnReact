import CheckBoxIsInStock from "./CheckBoxIsInStock"
import SearchInput from "./SearchInput"

export default function SearchBar({search, setSearch, showInStock, setShowInStock}) {
    return <div className="flex flex-col">
        <SearchInput search={search} setSearch={setSearch}/>
        <CheckBoxIsInStock showInStock={showInStock} setShowInStock={setShowInStock} />
    </div>
}