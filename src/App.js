import "./App.css";
import Form from "./Components/From";
import IMAGES from "./images/index.js";

function App() {
  return (
    <div className="App container" style={{ maxWidth: 500, margin: "1rem auto" }}>
      <img src={IMAGES.imgOne} alt="" />
      <h1 className="display-1 my-5">
        Mortgage Calculator
      </h1>
      <Form />
    </div>
  );
}

export default App;