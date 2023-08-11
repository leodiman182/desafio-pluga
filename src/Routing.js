import React, { useContext, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import MainContext from "./context/MainContext";
import { ORDERED_TOOLS_JSON, TOOLS_JSON } from "./utils/json";

const Routing = () => {
  const { setUsableApi, setLoading, alphaCheck } = useContext(MainContext);

  useEffect(() => {
    if (!alphaCheck) {
      setUsableApi(TOOLS_JSON);
    } else {
      setUsableApi(ORDERED_TOOLS_JSON);
    }
  }, [alphaCheck]);

  useEffect(() => {
    setUsableApi(TOOLS_JSON);
    setLoading(false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
