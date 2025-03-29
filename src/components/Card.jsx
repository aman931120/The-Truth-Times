import React, { useState } from "react";

const Card = ({ data }) => {
  console.log("Card data:", data);

  if (!Array.isArray(data)) {
    console.error("Error: data is not an array", data);
    return <p>Error: Data is not available.</p>;
  }

  const [visibleCount, setVisibleCount] = useState(30);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 30);
  };

  return (
    <div className="container">
      <div className="row">
        {data.slice(0, visibleCount).map((curItem, index) => (
          <div
            className="col-md-3 d-flex align-items-stretch mb-4 m-5 shadow-sm border-3"
            key={index}
          >
            {/* Ensure all cards take equal height */}
            <div className="card h-70 border-5" style={{ width: "100%" }}>
              <img
                className="card-img-top"
                src={
                  curItem.urlToImage ||
                  "https://thumb.silhouette-ac.com/t/85/8568b26c37b595116a6081d02480fe35_t.jpeg"
                }
                alt="Card image cap"
                style={{ height: "200px", objectFit: "cover" }} // Fix image height
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{curItem.title || "No Title"}</h5>
                <p className="card-text flex-grow-1">
                  {curItem.description || "No description available."}
                </p>
                <a
                  href={curItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < data.length && (
        <div className="d-flex justify-content-center align-items-center m-3 p-3 w-100">
          <button className="p-2 px-5 btn btn-info " onClick={loadMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
