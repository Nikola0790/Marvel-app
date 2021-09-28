import { Modal } from "./modal";

const InfoHero = ({ data, data_2, comics }) => {
  console.log(comics);
  if (comics.length > 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>Homepage</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Marvel Heroes</h2>
          </div>
          <div className="row">
            <div className="col-md-5">
              <img src={data + "/portrait_uncanny.jpg"} />
            </div>
            <div className="col-md-7">
              <h3>{data_2.name}</h3>
              <p>{data_2.description}</p>
            </div>
          </div>
          <div className="row">taster</div>
          <div className="row">
            {comics.map((data, index) => {
              return (
                <div className="col-2">
                  <Modal data={data} numIndex={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return "LOADING";
  }
};

export default InfoHero;
