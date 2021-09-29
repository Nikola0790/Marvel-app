import { Link } from "react-router-dom";

const HeaderSingleChar = () => {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                Single Character
              </a>
              <Link to="/main" className="navbar-brand">
                Homepage
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default HeaderSingleChar;
