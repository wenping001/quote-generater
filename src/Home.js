import { Link } from "react-router-dom";
import Random from "./RandomButton";
export default function Home({ data, onClick }) {
  return (
    <>
      <nav>
        <Link to="/">
          <p className="logo">Quote Generator</p>
        </Link>
        <Random onClick={onClick} />
      </nav>
      <main>
        <p className="quote-text">{data.quoteText}</p>
        <Link to={`/author/${data.quoteAuthor}`}>
          <div className="quote-detail">
            <div>
              <p className="quote-author">{data.quoteAuthor}</p>
              <p className="quote-genre">{data.quoteGenre}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Link>
      </main>
    </>
  );
}
