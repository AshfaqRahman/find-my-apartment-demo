import React from "react";
import GoogleMapReact from "google-map-react";

const MapMarker = (param : { text:any }) => <div>{param.text}</div>;

export default function SimpleMap() {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
    api_key: process.env.GOOGLE_MAP_API_KEY || "",
  };
  console.log(defaultProps.api_key)
  
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: defaultProps.api_key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}