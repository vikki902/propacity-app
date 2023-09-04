import React from "react";
import "./navbar.css"; // Import your CSS file for styling

import vectorSvg from "../assets/vector-svg.svg";
import arrowSvg from "../assets/arrow-svg.svg";
import Box from "@mui/material/Box";


function Navbar() {
  return (
    <>
      <div className="body-img">
        <div className="navbar">
          <div className="logo">
            {/* Logo content */}
            <img
              src="https://s3-alpha-sig.figma.com/img/b92c/14b7/83fd501f7b7d0ec49be8a0e59fc3cce9?Expires=1694390400&Signature=V09WEXPWgSPOoxX9oRATzBOZeNShPZLv6UWrr1KAVRo9l5ptIgRNhBE4a~RIk6S~Lnd94FzSPx6CDz6OSFgjMwa5hwaxz7Wix7JtTorXm648sR~61KH50dG0wzuHUZ~4RtDYBogyQ2ZDS-R1DInB4PW1yIyICAwWizsNdWjOf7A5dIiisKtccj2mEYHAed8wBT74v7QVjPJ2Xd5O8rxowZfIf7tKTlOKABxd2ZRrBr7ouAVEfWOyEuVXhPHZvCs~uoXfaLBpYV5uMGWZ1RVbXUb9VRdkVSibsxZLONqLvGSWioWX~b2V7wogyNcuSpOJCgsUWe7C4FmWHkdY-AUdUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Logo"
            />
          </div>
          <div className="tabs">
            {/* Tabs */}
            <div className="tab">HOME</div>
            <div className="tab">OVERVIEW</div>
            <div className="tab">AMENITIES</div>
            <div className="tab">GALLERY</div>
            <div className="tab">CONTACT</div>
          </div>
          <div className="button">
            {/* Button */}
            <button>ENQUIRE NOW</button>
          </div>
        </div>
        <button className=" btn btn-outline-dark center-button">MUMBAI</button>

        <div className="caption">
          Project
          <br />
          <h1>ARANYA</h1>
        </div>
        <br/>
          <h5 className="small-caption"> pirimal groups</h5>


          <Box
            mt={"38rem"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "160px",
              position: "relative",
            }}
          >
            <img src={vectorSvg} />
            <img
              src={arrowSvg}
              style={{
                position: "absolute",
                left: "22%",
                top: "20%",
              }}
            />
          </Box>
      </div>
    </>
  );
}

export default Navbar;
