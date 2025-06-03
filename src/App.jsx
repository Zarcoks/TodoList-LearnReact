import ProductTable from "./components/products/ProductTable"
import SearchBar from "./components/forms/SearchBar"
import { useState } from "react"

function App() {
  const [search, setSearch] = useState("")
  const [showInStock, setShowInStock] = useState(true)
  
  return <main className="w-sm m-auto mt-6 border p-5">
      <SearchBar search={search} setSearch={setSearch} showInStock={showInStock} setShowInStock={setShowInStock}/>
      <ProductTable search={search} showInStock={showInStock} />
    </main>
}

export default App
