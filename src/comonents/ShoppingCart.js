import GroceryItem from "./GroceryItems"


const ShoppingCart = (props)=>{
    return (
        <div>
            <h1>ShoppingCart</h1>
            {
                props.shoppingCartItems.map((item,idx)=> <GroceryItem groceries={item} key={idx}/>)
            }
        </div>
    )
}
export default ShoppingCart;