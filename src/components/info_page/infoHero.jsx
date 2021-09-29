import Loader from "../loader/loader";
import { Modal } from "./modal";

const InfoHero = ({ data, data_2, comics }) => {
  if (comics.length > 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-3">
            <h2>Marvel Heroes</h2>
          </div>
        </div>
        <div className="row">
          <div className="row mb-5 text-center">
            <div className="col-md-5">
              <img src={data + "/portrait_uncanny.jpg"} />
            </div>
            <div className="col-md-5 offset-md-2">
              <h3>{data_2.name}</h3>
              <p>{data_2.description}</p>
            </div>
          </div>
          <div className="row">
            {comics.map((data, index) => {
              return (
                <div
                  className="col-lg-2 col-md-4 col-sm-12 text-center"
                  key={data.id}
                >
                  <Modal data={data} numIndex={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default InfoHero;
