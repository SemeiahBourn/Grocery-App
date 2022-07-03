

const GroceryItem = (props) =>{ 
    const {Item,Brand,Price,Quantity}=props.groceries
    return(
        <div className="itemObject" onClick={()=> props.addToCart(props.groceries)}>
            <ul className="itemBox">
    
           <h2><li className="boxOne">{Item}</li></h2> 
            <h4 className="boxTwo"> Brand: {Brand}</h4>
            <h4 className="boxThree"> Price: ${Price}</h4>
            <h4 className="boxFour"> Quantity: {Quantity}</h4>
            <br />
            </ul>
        </div>
    )
}
export default GroceryItem