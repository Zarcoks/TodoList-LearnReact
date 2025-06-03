import ProductRow from "./ProductRow";

export default function ProductCategoryRow({search, showInStock, categoryName, products}) {
    return <section>
        <h2 className="text-center font-bold p-2 border-y border-gray-300">{categoryName}</h2>
        <ul>
            {products.map(p => (
                <ProductRow search={search} showInStock={showInStock} name={p.name} price={p.price} inStock={p.inStock} />
            ))}
        </ul>
    </section>
}