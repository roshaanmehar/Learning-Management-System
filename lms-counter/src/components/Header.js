
import { Image,  } from "antd";
import logo from "../Images/online-education-logo-design-vector.jpg";
import DropdownHeaderButton from "../utility/DropdownHeaderButton";



const HeaderMenu = () => {
  

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* Left Portion */}
      <div style={{ width: "10%", textAlign: "left" }}>
        <div
          style={{ position: "relative", maxWidth: "100%", maxHeight: "100vh" }}
        >
          <a href="/">
            <Image
              src={logo}
              alt="Logo"
              height="60px"
              width="auto"
              preview={false}
            />
          </a>
        </div>
      </div>

      {/* Middle Portion */}
      <div style={{ width: "65%" }}>
        <h1
          style={{
            color: "gray",
            fontSize: "23px",
            fontFamily: "Monospace",
            textAlign: "left",
            marginLeft: "20px",
            paddingLeft: "0",
          }}
          className="dropdown-header-button"
        >
          {" "}
          COLLEGE LEARNING MANAGEMENT SYSTEM
        </h1>
      </div>

      {/* Right Portion */}
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <DropdownHeaderButton
          style={{
            fontSize: "24px",
            borderRight: "2px solid #9da1a6",
            borderRadius: "20px",
          }}
        />
        <div
          className="divtext"
          style={{
            marginRight: "20px",
            marginLeft: "10px",
            lineHeight: "10px",
            marginTop: "15px",
            fontWeight: "bold",
          }}
        >
          <div>Student Name</div>
          <div
            style={{
              fontWeight: "lighter",
              textAlign: "left",
              marginTop: "10px",
            }}
          >
            Roll Number
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
