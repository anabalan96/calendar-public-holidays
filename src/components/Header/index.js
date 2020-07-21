import React from "react";
import "./index.css";


export const Header = () => {
  return (
    <section className="header">
      <div className="left">
        <i class="fa fa-globe header-globe" aria-hidden="true"></i>
        <h3 className="header-title"> <br></br>World Wide Public Holidays </h3>
      </div>
    </section>
  );
};

export default Header;
