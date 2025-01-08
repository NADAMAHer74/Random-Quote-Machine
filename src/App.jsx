import "./styles.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomQuote } from "./Actions/quoteAction";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // Exclude white color
  return color === "#FFFFFF" ? generateRandomColor() : color;
};

export default function App() {
  const quotes = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    dispatch(getRandomQuote());
    setCurrentColor(generateRandomColor());
  }, [dispatch]);

  const handleNextQuote = () => {
    dispatch(getRandomQuote());
    const newColor = generateRandomColor();
    setCurrentColor(newColor);
  };

  return (
    <div
      className=" vh-100 d-flex align-items-center"
      style={{ backgroundColor: currentColor }}
    >
      <div id="quote-box" className="row justify-content-center w-100">
        <div className="col-md-6">
          <div className="card p-4">
            <div className="card-body">
              <p
                id="text"
                className="card-text text-center fs-3"
                style={{ color: currentColor }}
              >
                {quotes.quote}
              </p>
              <h5
                id="author"
                className="card-title text-end"
                style={{ color: currentColor }}
              >
                -{quotes.author}
              </h5>
              <button
                onClick={handleNextQuote}
                id="new-quote"
                className="btn d-flex ms-auto mt-3 text-white"
                style={{ backgroundColor: currentColor }}
              >
                Next Quote
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 text-center mt-3">
          <a
            href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            target="_blank"
            className="link-light text-decoration-none"
          >
            Tweet Quote
          </a>
        </div>
      </div>
    </div>
  );
}
