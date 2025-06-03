export default function CheckBoxIsInStock({showInStock, setShowInStock}) {
    const updateSetInShow = (e) => {setShowInStock(e.target.checked == "")}
    return <div className="flex w-full my-2">
        <input type="checkbox" className="mr-2" checked={!showInStock} onChange={updateSetInShow} />
        <label>N'afficher que les produits en stock</label>
    </div>
}