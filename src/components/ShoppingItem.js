import "./ShoppingItem.css";
import ShoppingDate from "./ShoppingDate";
import Card from "./Card";

function ShoppingItem(props) {
  return (
    <Card className="shopping-item">
      <ShoppingDate date={props.date} />
      <div className="shopping-item__name">
        <h2>{props.name}</h2>
        <div className="shopping-item__price">{props.amount}KM</div>
      </div>
    </Card>
  );
}
export default ShoppingItem;
