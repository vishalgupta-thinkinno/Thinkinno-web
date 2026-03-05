import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const redCountries = [
  "United States of America",
  "Mexico",
  "United Kingdom",
  "Poland",
  "United Arab Emirates",
  "Kenya",
  "South Africa",
  "Israel",
  "India",
  "Thailand"
];

function WorldMap() {
  const [tooltip, setTooltip] = useState(null);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 130,
          center: [0, 45]
        }}
        width={1000}
        height={550}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const isRed = redCountries.includes(countryName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isRed ? "#dd0f0f" : "#e6e6e6"}
                  stroke="#ffffff"
                  strokeWidth={0.5}
                  vectorEffect="non-scaling-stroke"
                  tabIndex={-1}
                  onMouseEnter={(event) => {
                    if (isRed) {
                      setTooltip({
                        name: countryName,
                        x: event.clientX,
                        y: event.clientY
                      });
                    }
                  }}
                  onMouseMove={(event) => {
                    if (isRed) {
                      setTooltip({
                        name: countryName,
                        x: event.clientX,
                        y: event.clientY
                      });
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
                 style={{
  default: {
    outline: "none",
    transition: "fill 0.25s ease"
  },
  hover: {
    fill: isRed ? "#c21c1c" : "#e6e6e6",
    cursor: isRed ? "pointer" : "default",
    outline: "none"
  },
  pressed: {
    outline: "none"
  }
}}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Smooth Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "fixed",
            top: tooltip.y - 45,
            left: tooltip.x,
            transform: "translateX(-50%) translateY(-5px)",
            background: "#ffffff",
            color: "#000",
            padding: "8px 16px",
            borderRadius: "8px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            fontSize: "15px",
            fontWeight: "500",
            pointerEvents: "none",
            zIndex: 1000,
            whiteSpace: "nowrap",
            opacity: 1,
            transition: "all 0.25s ease"
          }}
        >
          {tooltip.name}
          <div
            style={{
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "8px solid #ffffff"
            }}
          />
        </div>
      )}
    </div>
  );
}

export default WorldMap;