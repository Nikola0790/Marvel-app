const InfoHero = ({ data, data_2 }) => {
  console.log(data_2);
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
          <div className="col-12">comics</div>
        </div>
      </div>
    </div>
  );
};

export default InfoHero;
