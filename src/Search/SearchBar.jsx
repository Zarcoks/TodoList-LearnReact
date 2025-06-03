import CheckBoxIsInStock from "./CheckBoxIsInStock"
import SearchInput from "./SearchInput"

export default function SearchBar() {
    return <div className="flex flex-col">
        <SearchInput/>
        <CheckBoxIsInStock/>
    </div>
}