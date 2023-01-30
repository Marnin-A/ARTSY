import "./App.css";
import { Navbar } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auction, Home, Details, Products } from "./pages";
// now isnt this easier :D

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "auction", element: <Auction /> },
  { path: "details", element: <Details /> },
  { path: "products", element: <Products /> },
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
