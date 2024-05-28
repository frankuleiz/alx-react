import React from "react"
import { getFullYear } from "../utils/utils";
import { getFooterCopy } from "../utils/utils";
import  "./Footer.css"

function Footer() {
  return (
    <React.Fragment>
      <div className="App-footer">
        <footer className="App-footer">Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
      </div>
    </React.Fragment>
  );
}

export default Footer;