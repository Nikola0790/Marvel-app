import React, { Fragment, useEffect, useState } from "react";
import InfoHero from "./infoHero";
import { heroInfo, heroInfo_2, heroComics } from "../../services/services";
import HeaderSingleChar from "../header/headerSingleChar";
import "../css/infoPage.css";

const InfoPage = (props) => {
  const [heroData, setHeroData] = useState([]);
  const [heroData_2, setHeroData_2] = useState([]);
  const [listOfComics, setListOfComics] = useState([]);

  useEffect(() => {
    heroInfo(props.match.params.id).then((result) => {
      setHeroData(result);
    });
    heroInfo_2(props.match.params.id).then((res) => {
      setHeroData_2(res);
    });
    heroComics(props.match.params.id).then((item) => {
      setListOfComics(item);
    });
  }, []);
  return (
    <Fragment>
      <HeaderSingleChar />
      <InfoHero data={heroData} data_2={heroData_2} comics={listOfComics} />
    </Fragment>
  );
};

export default InfoPage;
