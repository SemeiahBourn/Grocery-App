import "./App.css";
import { Component } from "react";
import GroceryData from "./Data/GroceryData";
import Form from "./comonents/Form";
import GroceryList from "./comonents/GroceryList";
import ShoppingCart from "./comonents/ShoppingCart";


class App extends Component {
  state = {
    GroceryData: GroceryData,
    shoppingCartItems: [],
    groceryItem: '',
    groceryBrand: '',
    groceryPrice: '',
    groceryQuantity: 0
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      Item: this.state.groceryItem,
      Brand: this.state.groceryBrand,
      Price: this.state.groceryPrice
      
    }
    console.log(newItem);
    this.setState({
      GroceryData: [newItem, ...this.state.GroceryData],
      
      groceryItem: '',
      groceryBrand: '',
      groceryPrice: '',
      groceryQuantity: 0
    });
  };
addToCart=(groceries)=>{
  console.log(groceries)
  this.setState({shoppingCartItems: [groceries,...this.state.shoppingCartItems] })
}


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <ShoppingCart shoppingCartItems={this.state.shoppingCartItems}/>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          groceryItem={this.groceryItem}
          groceryBrand={this.groceryBrand}
          groceryPrice={this.groceryPrice}
          groceryQuanitity={this.groceryQuanitity}
        />
        <GroceryList groceries={this.state.GroceryData} addToCart={this.addToCart}/>
      </div>
    );
  }
}

export default App;
