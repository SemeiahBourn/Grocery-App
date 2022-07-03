import GroceryItem from "./GroceryItems";

const GroceryList = (props)=>{
    return(
<div >
    <h2 className="GroceriesHeader"> Groceries </h2>
    {props.groceries.map((item,idx) => <GroceryItem groceries={item} key={idx} /> )}
    
</div>
    )
}
export default GroceryList;