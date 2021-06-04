import React, { useEffect } from "react";

import Service from "../services/api";
const AgeTable = () => {
  useEffect(() => {
    const getAges = async () => {
      const item = "cake";
      const response = await Service.fetchListOfAges(item);
      console.log("ages", response);
    };
    getAges();
  }, []);
  return <div></div>;
};

export default AgeTable;
