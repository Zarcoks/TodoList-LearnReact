import ProductRow from "./ProductRow";

export default function ProductCategoryRow({categoryName}) {
    return <section>
        <h2 className="text-center font-bold p-2 border-y border-gray-300">{categoryName}</h2>
        <ul>
            <ProductRow name="Apple" price={1} />
            <ProductRow name="DragonFruit" price={2} />
            <ProductRow name="PassionFruit" price={2} />
        </ul>
    </section>
}