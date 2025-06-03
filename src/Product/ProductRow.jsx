export default function ProductRow({name, price}) {
    return <li className="flex w-full hover:bg-gray-100">
        <div className="w-full p-2">{name}</div>
        <div className="w-full p-2">${price}</div>
    </li>
}