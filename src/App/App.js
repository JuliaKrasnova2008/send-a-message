import "./App.css";
import logo from "../images/logo.svg";
import Forma from "../Forma/Forma";
import Dispatching from "../Dispatching/Dispatching";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <img className="page__logo" src={logo} />
        <Forma />
        {/* <Dispatching /> */}
      </div>
    </div>
  );
}

export default App;
