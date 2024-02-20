import React from "react";
import { NavLink } from "react-router-dom";

function Links({ text }) {
  return (
    <div>
      <NavLink to= {`/${text}`} className= "borderAnimate hover:text-rose-400 font-serif px-0.2 p-0.5 sm:p-1.5 rounded-3xl border-2 border-transparent">
        {text}
      </NavLink>
    </div>
  );
}

export default Links;
