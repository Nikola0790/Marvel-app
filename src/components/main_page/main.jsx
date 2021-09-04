import React, { useState, useEffect, Fragment } from "react";
import searchBar from "./searchBar";
import Cards from "./card";
import heroCharacters from "../../services/services";
import MyTeam from "./myTeam";

const MainPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  const addSelectedHero = (name, img) => {
    const newSelectedHero = { name, img };
    return setSelectedHeroes([...selectedHeroes, newSelectedHero]);
  };

  useEffect(() => {
    heroCharacters().then((res) => {
      setHeroes(res.data.results);
      setLoading(false);
      return res;
    });
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">{searchBar()}</div>
            </div>
            <div className="row">
              <Cards items={heroes} onSelect={addSelectedHero} />
            </div>
          </div>
          <div className="col-md-4">
            {selectedHeroes.map((hero) => {
              <MyTeam img={hero.img} name={hero.name} />;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MainPage;
