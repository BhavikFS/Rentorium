import "./Profile.css"; // Import your custom CSS file for additional styles
import profilePic from "./user.png";
import propertyImage1 from "./addimg.png"; // Sample image 1
import propertyImage2 from "./plus.png"; // Sample image 2
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const UserProfile = () => {
  return (
    <Container className="mt-2">
      <Row className="align-items-center">
        <Col xs={12} md={2} className="text-center text-md-left">
          <div className="profile-picture mb-3 mb-md-0">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-circle img-fluid"
              style={{ width: "150px", height: "150px", marginLeft: "-20%" }}
            />
          </div>
        </Col>
        <Col xs={12} md={3}>
          <Form.Group className="mb-3 mb-md-0">
            <Form.Label htmlFor="name" className="text-color-custum">
              Name of Landlord *
            </Form.Label>
            <Form.Control
              type="text"
              id="name"
              placeholder="Enter Name *"
              style={{ width: "100%" }}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={3}>
          <Form.Group className="mb-3 mb-md-0">
            <Form.Label htmlFor="email" className="text-color-custum">
              Email *
            </Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="Enter Email *"
              style={{ width: "100%" }}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={3}>
          <Form.Group className="mb-3 mb-md-0">
            <Form.Label htmlFor="mobile" className="text-color-custum">
              Mobile Number *
            </Form.Label>
            <Form.Control
              type="tel"
              id="mobile"
              placeholder="Enter Mobile Number *"
              style={{ width: "100%" }}
            />
          </Form.Group>
        </Col>
      </Row>

      <hr style={{ borderTop: "1px solid #E6E6E6" }} />

      <Row className="align-items-center mt-4">
        <Col xs={12} md={6}>
          <Form.Group className="mb-3 mb-md-0">
            <Form.Label htmlFor="property-name" className="text-color-custum">
              Name of Property
            </Form.Label>
            <Form.Control
              type="text"
              id="property-name"
              placeholder="Enter Property Name"
              style={{ width: "100%" }}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className="text-md-right text-center">
          <Button
            className="custum-button mt-3 mt-md-0"
            style={{
              backgroundColor: "#F2CC15",
              fontWeight: "500",
              color: "#16254C",
            }}
          >
            <span>+</span>{" "}
            <span style={{ textDecoration: "underline" }}>
              Add Property Listing
            </span>
          </Button>
        </Col>
      </Row>

      <Row className="align-items-center mt-4">
        <Col xs={12}>
          <Form.Label htmlFor="address1" className="text-color-custum">
            Address
          </Form.Label>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3 mb-md-0">
            <Form.Control
              type="text"
              id="address1"
              placeholder="Enter Address"
              style={{ width: "100%" }}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3 mb-md-0">
            <Form.Control
              type="text"
              id="address2"
              placeholder="Enter Address"
              style={{ width: "100%" }}
            />
          </Form.Group>
        </Col>
      </Row>

      <hr style={{ borderTop: "1px solid #E6E6E6" }} />

      <h2 className="mt-4 text-color-custum">Add Property Listing</h2>

      <Row className="align-items-center mt-3">
        <Col xs={12} className="d-flex justify-content-start">
          <img
            src={propertyImage1}
            alt="Property 1"
            className="img-fluid property-image p-3"
          />
          <img
            src={propertyImage2}
            alt="Property 2"
            className="img-fluid property-image p-3"
          />
        </Col>
      </Row>

      <Row className="justify-content-center mt-4 mb-4">
        <Col xs={12} className="text-center">
          <Button
            className="custum-button"
            style={{
              backgroundColor: "#F2CC15",
              fontWeight: "500",
              color: "#16254C",
            }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
