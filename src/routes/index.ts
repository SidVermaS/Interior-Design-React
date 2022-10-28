import React from "react";
import Home from "../pages/Home";
import { PathE } from "../utils/constants";
import { RouteI } from "../utils/interfaces";

const securedRoutes: RouteI[] = [
  {
    path: PathE.Home,
    element: Home,
  },
  
];
export { securedRoutes, };
