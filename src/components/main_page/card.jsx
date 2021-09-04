// SHOW ALL HEROES CARD

import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import myTeam from "./myTeam";
import SingleHeroCard from "./SingleHeroCard";

const Cards = ({ items, onSelect }) => {
  //console.log(items);
  return (
    <Fragment>
      {items.map((hero) => {
        return <SingleHeroCard hero={hero} onSelect={onSelect} />;
      })}
    </Fragment>
  );
};
export default Cards;
