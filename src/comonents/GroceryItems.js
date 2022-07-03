

const GroceryItem = (props) =>{ 
    const {Item,Brand,Units,Quantity}=props.groceries
    return(
        <div className="itemObject" onClick={()=> props.addToCart(props.groceries)}>
            <ul className="itemBox">
            <li className="boxOne">{Item}</li>
            <li className="boxTwo">{Brand}</li>
            <li className="boxThree">{Units}</li>
            <li className="boxFour"> {Quantity}</li>
            </ul>
        </div>
    )
}
export default GroceryItem