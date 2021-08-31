import "./styles.css";

function Cell() {
  return <div className="cell"></div>;
}

function Box({ cid, alter }) {
  if (alter) {
    return (
      <div
        className="box"
        style={{ background: cid % 2 === 0 ? "black" : "white" }}
      ></div>
    );
  } else {
    return (
      <div
        className="box"
        style={{ background: cid % 2 === 0 ? "white" : "black" }}
      ></div>
    );
  }
}

export default function App() {
  let alter = false;
  return (
    <div className="App">
      <div className="chessboards">
        <div className="first">
          <h1>Using nth child selector</h1>
          <div className="board">
            {[...Array(64)].map((index) => {
              return <Cell key={index} />;
            })}
          </div>
        </div>

        <div className="second">
          <h1>Using React Props</h1>
          <div className="board2">
            {[...Array(64)].map((box, cid) => {
              if (cid % 8 === 0 && cid !== 0) {
                alter = !alter;
              }
              return <Box cid={cid} alter={alter} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
