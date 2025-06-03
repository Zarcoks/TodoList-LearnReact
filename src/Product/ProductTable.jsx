import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTable() {
    return <div className="">
        <span className="flex w-full p-2 mt-2 border-y border-gray-300">
            <h3 className="w-full font-bold">Nom</h3>
            <h3 className="w-full font-bold">Prix</h3>
        </span>
        <ProductCategoryRow categoryName="Fruits"/>
        <ProductCategoryRow categoryName="Vegetables"/>
    </div>
}