import ShoppingItem from "./ShoppingItem";
import "./Shoppings.css";
import Card from "./Card";

function Shoppings(props) {
  return (
    <Card className="shoppings">
      <ShoppingItem
        name={props.items[0].name}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ShoppingItem
        name={props.items[1].name}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ShoppingItem
        name={props.items[2].name}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ShoppingItem
        name={props.items[3].name}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}
export default Shoppings;
