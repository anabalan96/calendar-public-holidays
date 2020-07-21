import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import './index.css';

const Footer = () => {
  return (
    <MDBFooter className="font-small">
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Balan Ana <br></br>
        </MDBContainer>
      </div >
    </MDBFooter >
  );
}

export default Footer;