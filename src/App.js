import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import Author from "./Author";
import Home from "./Home";
export default function App() {
  const [random, setRandom] = useState(false);
  const [quote, setQuote] = useState({});
  useEffect(() => {
    getRadomQuote();
  }, [random]);

  function getRadomQuote() {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((response) => setQuote(response.data.data[0]));
  }
  function handleClick() {
    setRandom(!random);
  }
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home data={quote} onClick={handleClick} />
          </Route>
          <Route path="/author/:author" component={Author} />
        </Switch>
      </div>
    </Router>
  );
}
