import { useState } from "react";
import "./App.css";
import chef from "./images/chef.jpg";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <h2>Welcome to this beautiful restaurant!</h2>
        <p>
          English: At the moment we are {openStatus == true ? "open" : "closed"}
        </p>
        <button onClick={() => onStatus(true)}>Request open</button>
      </div>
      <main>
        <img src={chef} height={200} alt="A photo of a smiling chef owner" />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <h2>
        Cafe di Melania e {status == false ? "chiuso" : "aperto"} al momento.
      </h2>
      <button onClick={() => setStatus(!status)}>
        {status ? "Chiudere" : "Aprire"} il Cafe
      </button>

      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={setStatus} />
    </div>
  );
}

export default App;
