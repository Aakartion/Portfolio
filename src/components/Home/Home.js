import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/Profile.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="welcome-text">
        <h1 className="h1-tag">
          <span className="h">H</span>
          <span className="i">i</span>, I am
          <span className="name-text"> Aakarshan Simkhada</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            at metus nec urna tristique finibus ac non velit. Mauris auctor eros
            in turpis efficitur, ut ultricies dui convallis. Aliquam ac nulla
            nec quam fermentum hendrerit. Integer sollicitudin orci non ligula
            feugiat malesuada. Vivamus fermentum felis non tellus sodales, sit
            amet condimentum felis dictum. Nulla facilisi. Sed nec erat sit amet
            purus fringilla tincidunt. Ut nec sodales arcu, non aliquet nisl.
            Sed vulputat
          </p>
        </h1>
      </div>
      <div className="profilePic-zone">
        <h1>
          <img src={LogoTitle} alt="developer" />
          <br />
        </h1>
      </div>
    </div>
  );
};

export default Home;
