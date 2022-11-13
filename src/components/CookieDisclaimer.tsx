import { useState } from "react";

export default function CookieDisclaimer() {
  const [dS, setDS] = useState(Boolean(getCookie("disclaimer")));

  //? getting the current value of cookie
  function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //? set the expiry date to 7 days
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  //? if disclaimer cookie value is empty, set it to false
  if (getCookie("disclaimer") == "") {
    document.cookie = `disclaimer=; expires=${expiry}`;
  }

  const closeDisclaimer = () => {
    document.cookie = `disclaimer=clicked; expires=${expiry}`;
    setDS(true);
  };

  return (
    <div className={dS ? "disclaimer closed" : "disclaimer"}>
      <div className="wrapper">
        <img
          src="./img/close.webp"
          alt=""
          className="closeBtn"
          onClick={closeDisclaimer}
        />
        <h2 className="title">Disclaimer</h2>
        <p className="desc">
          This website uses cookies to function. By using this website you agree
          to use of cookies.
        </p>
      </div>
    </div>
  );
}
