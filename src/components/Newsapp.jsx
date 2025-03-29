import React, { useEffect, useState } from "react";
import Card from "./Card";

function Newsapp() {
  const API_KEY = "84adc46e24d240d996af31e668e927f8";

  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);

  // it runs after every render // when the first time website will be refreshed then this will be called
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    // console.log(jsonData);
    // console.log(jsonData.articles);
    // in jsonData.article we will get array of objects

    setNewsData(jsonData.articles);
  };

  const handleInput = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
    getData();
  };

  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20210923/pngtree-news-red-and-blue-stripe-tv-background-image_902549.png')",
          backgroundSize: "contain", // or use 'auto' if it fits better
          backgroundPosition: "center",
          backgroundRepeat: "repeat", // Enables repeating the image
          minHeight: "100vh",
        }}
      >
        <nav className="navbar bg-body-tertiary fixed-top p-0">
          <div
            className="container-fluid bg-info "
            style={{ minHeight: "60px" }}
          >
            <a className="navbar-brand  cursor-pointer">
              <h3 className="fw-bold">The Truth Times</h3>
            </a>

            {/* <a href="" className="text-decoration-none text-dark">
            All News
          </a> */}

            <button
              className="border-1 p-2 fw-bold px-3 rounded-4 bg-transparent"
              onClick={userInput}
              value="Sports"
            >
              Global News
            </button>
            {/* <a href="" className="text-decoration-none text-dark cursor-pointer">
            Trending
          </a> */}

            <button
              className="border-1 p-2 fw-bold px-3 rounded-4 bg-transparent "
              onClick={userInput}
              value="Trending"
            >
              Trending
            </button>

            <div className="d-flex align-items-center">
              <input
                className="form-control me-2 border-4 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleInput}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => {
                  getData();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </nav>

        <div className="p-3">
          <h2 className="text-center mt-50 ">Stay Updated with Trendy News</h2>
        </div>

        <div className="d-flex justify-content-center items-center  space p-3 h-32 py-1 w-full border-2">
          <div className="flex">
            <button
              className="px-4 py-3 mx-4 rounded-4"
              onClick={userInput}
              value="Sports"
            >
              Sports
            </button>
            <button
              className="px-4 py-3 mx-4 rounded-4"
              onClick={userInput}
              value="Politics"
            >
              Politics
            </button>
            <button
              className="px-4 py-3 mx-4 rounded-4"
              onClick={userInput}
              value="Entertainment"
            >
              Entertainment
            </button>
            <button
              className="px-4 py-3 mx-4 rounded-4"
              onClick={userInput}
              value="Health"
            >
              Health
            </button>
            <button
              className="px-4 py-3 mx-4 rounded-4"
              onClick={userInput}
              value="Fitness"
            >
              Fitness
            </button>
          </div>
        </div>

        <div>
          {/* in this div we are going to have card components */}

          <Card data={newsData} />
        </div>
      </div>
    </>
  );
}

export default Newsapp;
