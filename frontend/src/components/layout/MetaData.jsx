import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - 360BarberShop`}</title>
    </Helmet>
  );
};

export default MetaData;
