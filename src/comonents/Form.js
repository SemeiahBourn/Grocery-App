const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="groceryItem"> New Item </label>
      <input
        type="text"
        value={props.groceryItem}
        onChange={props.handleChange}
        id="groceryItem"
      />
      <br />
      <label htmlFor="groceryBrand"> Item Brand</label>
      <input
        type="text"
        value={props.groceryBrand}
        onChange={props.handleChange}
        id="groceryBrand"
      />
      <br />
      <label htmlFor="groceryUnits"> Item's Unit </label>
      <input
        type="text"
        value={props.groceryUnits}
        onChange={props.handleChange}
        id="groceryUnits"
      />
      <br />
      <label htmlFor="groceryQuanity"> Item Quantity </label>
      <input
        type="number"
        value={props.groceryQuantity}
        onChange={props.handleChange}
        id="groceryQuanity"
      />
      <input type="submit" />
    </form>
  );
};
export default Form;
