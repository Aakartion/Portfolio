import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          H1, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          Aakarshan
          <br />
          software Developer
        </h1>
        <h2>Java Developer /</h2>
        <Link to="/contact" className="flat-button">
          {" "}
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
