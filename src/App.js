import logo from "./logo.svg";
import "./App.css";
import Link from "./components/Link";
import Manual from "./components/Manual";
import Dangerous from "./components/Dangerous";

function App() {
  return (
    <div>
      <Link />
      <Dangerous />
      <Manual />
    </div>
  );
}

export default App;
