import React from "react";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
