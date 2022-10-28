import React from "react";

import { securedRoutes, } from "./routes";
import { RouteI } from "./utils/interfaces";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { PathE } from "./utils/constants";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./pages/NotFound";

const App = () => {


  return (
    <>

      <BrowserRouter>
        <NavigationBar />
        <Routes>
          {securedRoutes.map((routesItem: RouteI) => (
            <Route
              key={routesItem.path}
              path={routesItem.path}
              element={<routesItem.element />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
