import { Navigation } from "@components";
import { CoverageStatistics } from "./components/CoverageStatistics";
import { GeographyOfShows } from "./components/GeographyOfShows/GeographyOfShows";
import { DeviceType } from "./components/DeviceType";
import { OSVersion } from "./components/OSVersion";
import { SegmentsDMP } from "./components/SegmentsDMP";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://predictor-audience.adtech.rambler.ru/api/v1/coverage", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ad_groups: [
          {
            type: "GEO",
            values: [12],
          },
          {
            target_groups: [
              {
                type: "DEVICE_TYPE",
                values: [2],
              },
              {
                type: "DMP_SEGMENT",
                values: [19891],
              },
            ],
          },
        ],
        save_predict: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Navigation />
      <div
        style={{
          display: "flex",
          gap: "64px",
          alignItems: "flex-start",
          padding: "24px",
        }}
      >
        <CoverageStatistics />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <GeographyOfShows />
          <DeviceType />
          <OSVersion />
          <SegmentsDMP />
        </div>
      </div>
    </>
  );
}

export default App;
