import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/Profile.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <img src={LogoTitle} alt="developer" />
          <br />
        </h1>
        {/* <div className="welcome-text">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            venenatis, ligula a luctus finibus, tortor dui mattis leo, eget
            ultricies est turpis ut risus. Duis auctor ipsum vitae arcu
            pellentesque, a ultrices lectus venenatis. Nulla facilisi. Donec
            eget nisl auctor, varius magna eu, convallis metus. Vivamus sagittis
            ipsum sed felis consequat, at suscipit justo vulputate. Curabitur
            lacinia bibendum dolor, ut placerat nisi.
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
