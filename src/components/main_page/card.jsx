// SHOW ALL HEROES CARD

import React, { Fragment } from "react";
const card = (arr) => {
  console.log(arr);
  return (
    <Fragment>
      {arr.map((items, index) => {
        return (
        <div className="col-md-4">
            <div className="card " key={index}>
                <div className="card-body">
                <h5 className="card-title">{items.name}</h5>
                </div>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                <a href="#" className="card-link">
                    Card link
                </a>
                <a href="#" className="card-link">
                    Another link
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