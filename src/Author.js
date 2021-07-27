import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import List from "./List";
import Random from "./RandomButton";
export default function Author({ match }) {
  const author = match.params.author;
  const [render, setRender] = useState(false);
  const [authorQuote, setAuthorQuote] = useState([]);
  useEffect(() => {
    getAuthorQuotes();
  }, [render]);

  async function getAuthorQuotes() {
    const response = await axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${author}&count=3`
    );
    setAuthorQuote(response.data.data);
  }

  const handleClick = () => {
    setRender(!render);
  };
  return (
    <>
      <nav>
        <Link to="/">
          <p className="logo">Quote Generator</p>
        </Link>
        <Random onClick={handleClick} />
      </nav>
      <main>
        <p className="quote-author">{match.params.author}</p>
        {authorQuote.map((quote) => (
          <List key={Math.random()} data={quote} />
        ))}
      </main>
    </>
  );
}
