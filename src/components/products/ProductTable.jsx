import ProductCategoryRow from "./ProductCategoryRow";

const products = [
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
    return <div className="">
        <span className="flex w-full p-2 mt-2 border-y border-gray-300">
            <h3 className="w-full font-bold">Nom</h3>
            <h3 className="w-full font-bold">Prix</h3>
        </span>
        <ProductCategoryRow search={search} showInStock={showInStock} categoryName={products[0].categoryName} products={products[0].products}/>
        <ProductCategoryRow search={search} showInStock={showInStock} categoryName={products[1].categoryName} products={products[1].products}/>
    </div>
}