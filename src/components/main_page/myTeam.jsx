// TEAM LIST

import React from "react";
const MyTeam = ({ img, name }) => {
  console.log("cao");
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3">
            <img src={img} />
          </div>
          <div className="col-md-9">{name}</div>
        </div>
      </div>
    </div>
  );
};
export default MyTeam;
