import React, { Fragment, useEffect, useState } from "react";
import InfoHero from "./infoHero";
import { heroInfo, heroInfo_2 } from "../../services/services";
import "./infoPage.css";

const InfoPage = (props) => {
  const [heroData, setHeroData] = useState([]);
  const [heroData_2, setHeroData_2] = useState([]);

  useEffect(() => {
    heroInfo(props.match.params.id).then((result) => {
      setHeroData(result);
    });
    heroInfo_2(props.match.params.id).then((res) => {
      setHeroData_2(res);
    });
  }, []);

  return (
    <Fragment>
      <InfoHero data={heroData} data_2={heroData_2} />
    </Fragment>
  );
};

export default InfoPage;
