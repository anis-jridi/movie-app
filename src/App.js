import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./Components/NavBar";
import Movies from "./Components/Movies";
import { useState } from "react";
import Add from "./Components/Add";
import Rating from "./Components/Rating";

function App() {
  const [data, setData] = useState(Movies);
  const handelAdd = (newMovie) => {
    setData([...data, newMovie]);
  };

  return (
    <div className="App">
      <NavBar />
      <Movies />
      <Add add={handelAdd} />
      {/* <Rating /> */}
    </div>
  );
}

export default App;
