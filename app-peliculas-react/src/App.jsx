import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MovieDetails from "./pages/MovieDetails";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/movie-details",
      element: <MovieDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
