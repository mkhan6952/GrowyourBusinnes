import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <div className="outer-container">
      <form className="inner-container">
        <div class="row mb-3">
          <label htmlFor="email" class="col-sm-2 col-form-label">
            Email:
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter Email:"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label htmlFor="password" class="col-sm-2 col-form-label">
            Password:
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter Password:"
            />
          </div>
        </div>

        <button type="submit" class="btn btn-success">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Contact;
