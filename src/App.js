import Shoppings from "./components/Shoppings";

function App() {
  const shoppings = [
    { id: "e1", name: "Milk", amount: 2.0, date: new Date(2023, 4, 16) },
    { id: "e2", name: "Chocolate", amount: 1.67, date: new Date(2023, 4, 16) },
    { id: "e3", name: "Coca-Cola", amount: 2.95, date: new Date(2023, 2, 23) },
    { id: "e4", name: "Lemon", amount: 5.12, date: new Date(2023, 1, 11) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Shoppings items={shoppings} />
    </div>
  );
}

export default App;
