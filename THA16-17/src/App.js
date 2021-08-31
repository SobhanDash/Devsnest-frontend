import "./styles.css";
import data from "./Data";

function Card({ id, title, cal }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>you have consumed {cal} today</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>Calories Read Only</h1>
        <div className="container">
          {data.map((item) => {
            let { id, title, cal } = item;
            return <Card key={id} title={title} cal={cal} />;
          })}
        </div>
      </div>
    </div>
  );
}
