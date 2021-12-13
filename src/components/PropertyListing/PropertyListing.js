import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard";
import "./PropertyListing.scss";

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/properties")
      .then((res) => res.json())
      .then((response) => {
        setProperties(...response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="PropertyListing">
      {Array(101)
        .fill(properties)
        .map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
    </div>
  );
};

export default PropertyListing;
