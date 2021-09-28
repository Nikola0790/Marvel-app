import "./modal.css";
export const Modal = ({ data, numIndex }) => {
  console.log(data);
  let price = data.prices;

  if (data.images.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <button
              type="button"
              data-toggle="modal"
              data-target={`#mymodal${numIndex}`} // data-target must match with id
            >
              <p>NO IMAGE</p>
              <p>{data.title}</p>
            </button>
            <div className="modal fade" id={`mymodal${numIndex}`}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3></h3>
                  </div>
                  <div className="modal-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <p>NO IMAGE</p>
                        </div>
                      </div>
                      <div className="row text-center">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <p className="question">Description</p>
                            </div>
                            <div className="col-12">
                              <p className="note">{data.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <p className="question">Name</p>
                            </div>
                            <div className="col-12 ">
                              <p className="answer">{data.title}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <p className="question">Price</p>
                            </div>
                            <div className="col-12">
                              {price.map((price) => {
                                return (
                                  <p className="answer">
                                    {price.type}: {price.price}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <p className="question">Sale date</p>
                            </div>
                            <div className="col-12">
                              {data.dates.map((date) => {
                                if (date.type === "onsaleDate") {
                                  /* let day = new Date(date.date).getDate();
                                let month = new Date(date.date).getMonth();
                                let year = new Date(date.date).getYear(); */
                                  return <p className="answer">{date.date}</p>;
                                }
                              })}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <p className="question">List of creators</p>
                            </div>
                            <div className="col-12">
                              {data.creators.items.map((name) => {
                                return <p className="answer">{name.name}</p>;
                              })}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <p className="question">List of characters</p>
                            </div>
                            <div className="col-12">
                              {data.characters.items.map((name) => {
                                return <p className="answer">{name.name}</p>;
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-3">
          <button
            type="button"
            data-toggle="modal"
            data-target={`#mymodal${numIndex}`} // data-target must match with id
          >
            <img src={data.images[0].path + "/landscape_medium.jpg"} />
            <p>{data.title}</p>
          </button>
          <div className="modal fade" id={`mymodal${numIndex}`}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3></h3>
                </div>
                <div className="modal-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <img
                          className="poster"
                          src={
                            data.images[0].path + "/landscape_incredible.jpg"
                          }
                        />
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12">
                            <p className="question">Description</p>
                          </div>
                          <div className="col-12">
                            <p className="note">{data.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12">
                            <p className="question">Name</p>
                          </div>
                          <div className="col-12 ">
                            <p className="answer">{data.title}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <p className="question">Price</p>
                          </div>
                          <div className="col-12">
                            {price.map((price) => {
                              return (
                                <p className="answer">
                                  {price.type}: {price.price}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <p className="question">Sale date</p>
                          </div>
                          <div className="col-12">
                            {data.dates.map((date) => {
                              if (date.type === "onsaleDate") {
                                /* let day = new Date(date.date).getDate();
                                let month = new Date(date.date).getMonth();
                                let year = new Date(date.date).getYear(); */
                                return <p className="answer">{date.date}</p>;
                              }
                            })}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <p className="question">List of creators</p>
                          </div>
                          <div className="col-12">
                            {data.creators.items.map((name) => {
                              return <p className="answer">{name.name}</p>;
                            })}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <p className="question">List of characters</p>
                          </div>
                          <div className="col-12">
                            {data.characters.items.map((name) => {
                              return <p className="answer">{name.name}</p>;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
