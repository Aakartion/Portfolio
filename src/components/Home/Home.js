import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/RedA.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          H1, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          <br />
        </h1>
        <Link to="/contact" className="flat-button">
          {" "}
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
