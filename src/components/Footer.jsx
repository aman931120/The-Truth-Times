import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const subs = (event) => {
    event.preventDefault();
    if (email.trim() !== "") {
      alert("You have been subscribed! Check your email!");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="bg-dark text-center text-white py-4">
      <div className="container pb-0">
        <form onSubmit={subs}>
          <div className="row justify-content-center">
            <div className="col-auto mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div className="col-md-5 col-12 mb-4 mb-md-0">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-auto mb-4 mb-md-0">
              <button type="submit" className="btn btn-outline-light">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:
        <a className="text-white text-decoration-none" href="">
          The Truth Times
        </a>
      </div>
    </footer>
  );
}
