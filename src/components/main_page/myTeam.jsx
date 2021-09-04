// TEAM LIST
import React from "react";
import '../css/myTeam.css';

const MyTeam = ({ img, name }) => {
  return (
    <div className="row listTeam">
      <div className="col-md-12">
        <div className="row ">
          <div className="col-md-2"></div>
          <div className="col-md-2 imgList">
            <img src={img} />
          </div>
          <div className="col-md-8 nameList">{name}</div>
        </div>
      </div>
    </div>
  );
};
export default MyTeam;