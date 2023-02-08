import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ obj }) => {
  return (
    <>
      <div className="card position-relative">
        {(function () {
          if (obj.status === "Alive") {
            return (
              <span
                style={{ top: "10px", right: "10px" }}
                className="badge px-3 py-2 position-absolute bg-success"
              >
                {obj.status}
              </span>
            );
          }else if(obj.status === "Dead"){
           return <span
                style={{ top: "10px", right: "10px" }}
                className="badge px-3 py-2 position-absolute bg-danger"
              >
                {obj.status}
              </span>
          }else{
            return <span
                style={{ top: "10px", right: "10px" }}
                className="badge px-3 py-2 position-absolute bg-secondary"
              >
                {obj.status}
              </span>
          }
        })()}
        <img src={obj.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{obj.name} </h5>
          <p className="card-text m-0 fs-5">Last location </p>
          <p className="card-text fs-6"> {obj?.location.name} </p>
          <Link to="/" className="btn btn-primary">
            {" "}
            More...
          </Link>
        </div>
      </div>
    </>
  );
};
