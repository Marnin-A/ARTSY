import "./App.css";
import { Navbar } from "./components";
import { Auction, Home, Details, Product } from "./pages";
// now isnt this easier :D
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Auction />
    </div>
  );
}

export default App;
