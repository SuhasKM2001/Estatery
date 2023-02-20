import React, { useState } from "react";
import "./HomePage.css";
import HouseCard from "./HouseCard";
import { data } from "./PropertyData";
import FilterComponent from "./FilterComponent";
import dayjs from "dayjs";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function HomePage() {
  const [allData, setData] = useState(data);

  const HouseTypeData = () => {
    return [...new Set(data.map((item) => item.PropertyType))];
  };

  const handleLocationFilter = (location) => {
    const filteredData = data.filter((item) => {
      const LocationData = `${item.Location}`;
      if (LocationData.toLocaleLowerCase().includes(location.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };


  const handlepriceFilter = (price) => {
    const filteredData = data.filter((item) => {
      const PriceData = `${item.Price}`;
      if (PriceData.includes(price)) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleHouseFilter = (propertytype) => {
    const filteredData = data.filter((item) => {
      if (item.PropertyType === propertytype) return item;
    });

    setData(filteredData);
  };

  const handleDateFilter = (date, field) => {
    const filteredData = data.filter((item) => {
      if (field === "from" && dayjs(item.Date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <div className="container">
      <h1 className="SearchStyle">Search properties to rent</h1>
      <FilterComponent
        housetype={HouseTypeData()}
        onLocationFilter={handleLocationFilter}
        onHomeFilter={handleHouseFilter}
        onDateFilter={handleDateFilter}
        onPriceFilter={handlepriceFilter}
      />
      <div className="HomecardStyle">
        {allData.map((item) => (
          <HouseCard item={item} key={item.id} className="SubcardStyle" />
        ))}
      </div>
      {/* <HouseCard  /> */}
    </div>
  );
}

export default HomePage;
