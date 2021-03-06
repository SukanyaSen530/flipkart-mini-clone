import React, { useState } from "react";

import "./accordian.scss";

const Accordian = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="accordian">
      <div onClick={() => setOpen((val) => !val)} className="accordian__header">
        <h4 className="accordian__title">{title}</h4>
        <span className="accordian__action">
          {!open ? (
            <i className="fa-solid fa-angle-down icon"></i>
          ) : (
            <i className="fa-solid fa-angle-up icon"></i>
          )}
        </span>
      </div>
      {open ? <div className="accordian__content">{children}</div> : null}
    </article>
  );
};

export default Accordian;
