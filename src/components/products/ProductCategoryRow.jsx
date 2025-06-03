import ProductRow from "./ProductRow";

export default function ProductCategoryRow({search, showInStock, categoryName, products}) {
    return <section>
        <h2 className="text-center font-bold p-2 border-y border-gray-300">{categoryName}</h2>
        <ul>
            <ProductRow search={search} showInStock={showInStock} name={products[0].name} price={products[0].price} inStock={products[0].inStock} />
            <ProductRow search={search} showInStock={showInStock} name={products[1].name} price={products[1].price} inStock={products[1].inStock} />
            <ProductRow search={search} showInStock={showInStock} name={products[2].name} price={products[2].price} inStock={products[2].inStock} />
        </ul>
    </section>
}