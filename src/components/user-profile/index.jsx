import "./Profile.css"; // Import your custom CSS file for additional styles
import profilePic from "./user.png";
import propertyImage1 from "./addimg.png"; // Sample image 1
import propertyImage2 from "./plus.png"; // Sample image 2

const UserProfile = () => {
  return (
    <div className="container mt-2">
      <div className="row align-items-center">
        <div className="col-12 col-md-2 text-center text-md-left">
          <div className="profile-picture mb-3 mb-md-0">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture"
            />
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="form-group mb-3 mb-md-0">
            <label htmlFor="name" className="text-color-custum">Name of Landlord *</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name *"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="form-group mb-3 mb-md-0">
            <label htmlFor="email" className="text-color-custum">Email *</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email *"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="form-group mb-3 mb-md-0">
            <label htmlFor="mobile" className="text-color-custum">Mobile Number *</label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              placeholder="Enter Mobile Number *"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      
      {/* Horizontal Line */}
      <hr style={{ borderTop: "1px solid #E6E6E6" }} />

      {/* Property Details Section */}
      <div className="row align-items-center mt-4">
        <div className="col-12 col-md-6">
          <div className="form-group mb-3 mb-md-0">
            <label htmlFor="property-name" className="text-color-custum">Name of Property</label>
            <input
              type="text"
              className="form-control"
              id="property-name"
              placeholder="Enter Property Name"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 text-md-right text-center">
          <button className="btn custum-button mt-3 mt-md-0"
            style={{
              backgroundColor: "#F2CC15",
              fontWeight: "500",
              color: "#16254C",
            }}>
            <span>+</span> <span style={{ textDecoration: "underline" }}>Add Property Listing</span>
          </button>
        </div>
      </div>

      {/* Address Section */}
      <div className="row align-items-center mt-4">
        <div className="col-12">
          <label htmlFor="address1" className="text-color-custum">Address</label>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group mb-3 mb-md-0">
            <input
              type="text"
              className="form-control"
              id="address1"
              placeholder="Enter Address"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group mb-3 mb-md-0">
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Enter Address"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <hr style={{ borderTop: "1px solid #E6E6E6" }} />

      {/* Add Property Listing Section */}
      <h2 className="mt-4 text-color-custum">Add Property Listing</h2>
      
      <div className="row align-items-center mt-3">
        <div className="col-12 d-flex justify-content-start">
          <img src={propertyImage1} alt="Property 1" className="img-fluid property-image p-3" />
          <img src={propertyImage2} alt="Property 2" className="img-fluid property-image p-3" />
        </div>
      </div>

      {/* Submit Button */}
      <div className="row justify-content-center mt-4 mb-4">
        <div className="col-12 text-center">
          <button className="btn custum-button" style={{ backgroundColor: "#F2CC15",
              fontWeight: "500",
              color: "#16254C", }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
