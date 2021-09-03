// SHOW ALL HEROES CARD

import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import myTeam from "./myTeam";

const card = (arr) => {
  console.log(arr);
  return (
    <Fragment>
      {arr.map((items, index) => {
        return (
          <div className="col-md-4" key={index}>
            <div className="card ">
              <div className="card-body">
                <h5 className="card-title">{items.name}</h5>
              </div>
              <img
                src={items.thumbnail.path + "/portrait_xlarge.jpg"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="card-link">
                  Info
                </a>
                <a
                  href="#"
                  className="card-link"
                  onClick={() => {
                    myTeam(
                      items.thumbnail.path + "/portrait_xlarge.jpg",
                      items.name
                    );
                  }}
                >
                  Add
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
export default card;
