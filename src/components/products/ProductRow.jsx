export default function ProductRow({search, showInStock, name, price, inStock}) {
    const searchCorrespond = name.toLowerCase().startsWith(search.toLowerCase())
    const isShown = inStock || showInStock

    return <li className={"flex w-full hover:bg-gray-100 " + (!(searchCorrespond && isShown) ? "hidden " : "") + (!inStock ? "text-red-700 " : "")}>
        <div className="w-full p-2">{name}</div>
        <div className="w-full p-2">${price}</div>
    </li>
}