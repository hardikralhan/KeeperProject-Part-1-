import React from "react";

var time = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {time}</p>
    </footer>
  );
}
export default Footer;
