import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PeliculasProvider } from "../src/contexts/peliculas.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PeliculasProvider>
    <App />
  </PeliculasProvider>
);
