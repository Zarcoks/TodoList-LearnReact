import ProductCategoryRow from "./ProductCategoryRow";

const categories = [
    {
        "categoryName": "Fruits",
        "products": [
            {"name": "Apple", "price": 1, "inStock": true},
            {"name": "Dragonfruit", "price": 1, "inStock": true},
            {"name": "Passionfruit", "price": 2, "inStock": false}
        ]
    },
    {
        "categoryName": "Vegetables",
        "products": [
            {"name": "Spinach", "price": 2, "inStock": true},
            {"name": "Pumpkin", "price": 4, "inStock": false},
            {"name": "Peas", "price": 1, "inStock": true}
        ]
    }
]

export default function ProductTable({search, showInStock}) {
    return <div>
        <span className="flex w-full p-2 mt-2 border-y border-gray-300">
            <h3 className="w-full font-bold">Nom</h3>
            <h3 className="w-full font-bold">Prix</h3>
        </span>
        {categories.map(c => (
            <ProductCategoryRow search={search} showInStock={showInStock} categoryName={c.categoryName} products={c.products}/>
        ))}
    </div>
}