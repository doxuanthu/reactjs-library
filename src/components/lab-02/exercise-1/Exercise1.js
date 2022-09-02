import React from "react";
import className from "classnames/bind";
import Styles from "./Exercise1.module.scss";

const cx = className.bind(Styles);
function Ex1() {
  const wClock = [
    {
      location: "Viet Nam",
      oofset: "+7.0",
    },
    {
      location: "California",
      oofset: "-7.0",
    },
    {
      location: "New York",
      oofset: "-4.0",
    },
    {
      location: "London",
      oofset: "+1.0",
    },
    {
      location: "Sydney",
      oofset: "+10.0",
    },
    {
      location: "China",
      oofset: "+8.0",
    },
    {
      location: "Tokyo",
      oofset: "+9.0",
    },
    {
      location: "India",
      oofset: "+5.3",
    },
  ];
  function calcTime(offset) {
    var d = new Date();
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString();
  }
  return (
    <div className={cx("wrapper")}>
      {wClock.map((clock, index) => (
        <div key={index} className={cx("location")}>
          <p>{clock.location}</p>
          <strong>{calcTime(clock.oofset)}</strong>
        </div>
      ))}
    </div>
  );
}

export default Ex1;
