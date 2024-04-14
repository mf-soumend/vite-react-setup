import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = ({ hideIcon = false }) => {
  return (
    <div
      className="header-wrapper"
      style={{ borderRadius: hideIcon ? "6px" : "0" }}
    >
      <div className="header-logo">
        {!hideIcon && (
          <>
            <img src="vite.svg" alt="logo" />
            <span>Org.Logo.</span>
          </>
        )}
      </div>
      <div className="header-user">
        <FontAwesomeIcon icon={faUserTie} />
      </div>
    </div>
  );
};

export default Header;
