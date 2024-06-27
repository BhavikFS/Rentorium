import { Row } from "react-bootstrap";
import OurMission from "./OurMission";
import ForTenants from "./ForTenants";
import ForLandlords from "./ForLandlords";
import Description from "./Description";
import WelcomeSection from './WelcomeSection'

const AboutUsContent = () => {
  return (
    <Row className="d-flex justify-content-center m-4">
      <WelcomeSection />
      <OurMission />
      <ForTenants />
      <ForLandlords />
      <Description />
      <Row className="section">
        <h6 className="about-welcome-text">
          Welcome to Rentorium, where renting has never been more transparent or
          trustworthy.
        </h6>
      </Row>
    </Row>
  );
};

export default AboutUsContent;
