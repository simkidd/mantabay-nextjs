"use client";
import React, { useState } from "react";
import Button from "./Button";
import { Switch } from "@headlessui/react";

const Map = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <div className="container mx-auto px-2 py-8 text-center">
        <div className="flex items-center gap-2">
          <Switch
            checked={showMap}
            onChange={toggleMap}
            className={`${showMap ? "bg-primary-500" : "bg-gray-200"}
          relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Toggle Map</span>
            <span
              className={`${showMap ? "translate-x-6" : "translate-x-1"}
            inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <p className="text-primary-500">{showMap ? "Hide Map" : "Show Map"}</p>
        </div>
      </div>
      {showMap && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d557.8187122340947!2d6.993123192947521!3d4.824900415175618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1719912936935!5m2!1sen!2sng"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </>
  );
};

export default Map;
