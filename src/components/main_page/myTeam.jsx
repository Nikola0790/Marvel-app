// TEAM LIST

import React from "react";
const myTeam = (slika, ime) => {
  console.log(ime);
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3">{slika}</div>
          <div className="col-md-9">{ime}</div>
        </div>
      </div>
    </div>
  );
};
export default myTeam;
