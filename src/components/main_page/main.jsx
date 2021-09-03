import React, { useState, useEffect, Fragment } from "react";
import searchBar from "./searchBar";
import card from "./card";
import myTeam from "./myTeam";
import action from "../../services/services";
const MainPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    action().then((res) => {
      console.log(res);
      setItems(res.data.results);
      setLoading(false);
      return res;
    });
  }, []);
  console.log(items);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4">{searchBar()}</div>
          </div>
          <div className="row">
            {card(items)}
          </div>
        </div>
        <div className="col-md-4">{myTeam()}</div>
      </div>
    </div>
  );
};
export default MainPage;