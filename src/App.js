import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Add from "./components/Add";
import List from "./components/List";
import Simpson from "./components/Simpson";
import "./App.css";
import { SimpsonsContext } from "./context/SimpsonsContext";
import { useEffect, useState } from "react";
import LocalStorageService from "./services/LocalStorageService";


const API_URL = "https://5fc9346b2af77700165ae514.mockapi.io/simpsons";

function App() {
  const [simpsons, setSimpsonsState] = useState([]);

  const setSimpsons = (newSimpsons) => {
    LocalStorageService.save(newSimpsons);
    setSimpsonsState(newSimpsons);
  }

  useEffect(() => {
    let simpsonsAtLocalStorage = LocalStorageService.load();
    if (!simpsonsAtLocalStorage?.length) {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setSimpsons(data);
          console.log('Loaded from API');
        });
    } else {
      setSimpsons(simpsonsAtLocalStorage);
      console.log('Loaded from local');
    }
  }, []);

  console.log(simpsons);
  return (
    <div className="app">
      <SimpsonsContext.Provider value={{ simpsons, setSimpsons }}>
        <Router>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/:simpsonId" element={<Simpson />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </Router>
      </SimpsonsContext.Provider>
    </div>
  );
}

export default App;
