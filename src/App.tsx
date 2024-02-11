import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./pages/Blogs";

function App() {
  const data = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  return (
    <>
      <header>
        <h2>The Planet</h2>

        <div className="btns">
          {data.map((el) => (
            <h1 className="rame" key={el}>
              <Link to={`blog/${el}`}>{el}</Link>
            </h1>
          ))}
        </div>
      </header>
      <div className="line"></div>
      <Routes>
        <Route path="/blog/:planetName" element={<Blogs />}></Route>
      </Routes>
    </>
  );
}

export default App;
