import { Schedule } from "./CoverageStatisticsSchedule/Schedule";
import styles from "./CoverageStatistics.module.css";
import { Button, Separator } from "@ui";
import { CoverageStatisticsProgress } from "./CoverageStatisticsProgress";
import { useQueryController } from "../../hooks/useQueryController";
import { useEffect, useState } from "react";

const data = [
  {
    name: "07.12.2022",
    coverage: 0,
  },
  {
    name: "07.12.2022",
    coverage: 0.5,
  },
  {
    name: "07.12.2022",
    coverage: 1,
  },
  {
    name: "07.12.2022",
    coverage: 1.5,
  },
  {
    name: "07.12.2022",
    coverage: 2,
  },
];

interface CoverageStatisticsParamsType {
  allCoverage: number;
  coverage: number;
  percentile: number;
}

export const CoverageStatistics = () => {
  const { queryParams } = useQueryController();

  const [coverageStatisticsParams, setCoverageStatisticsParams] =
    useState<CoverageStatisticsParamsType>();

  const getData = () => {
    const data = {
      campaign_id: 1215,
      budget: 110000,
      target_groups: [
        {
          type: "DEVICE_TYPE",
          ...(queryParams.deviceTypes
            ? {
                values: queryParams.deviceTypes.split(","),
              }
            : { values: [] }),
        },
        {
          type: "DMP_SEGMENT",
          ...(queryParams.regions
            ? {
                values: queryParams.regions.split(","),
              }
            : { values: [] }),
        },
      ],
      start_date: "2023-05-19",
      end_date: "2023-06-30",
      current_date: "2023-05-23",
    };

    console.log(JSON.stringify(data));

    fetch("https://predictor-audience.adtech.rambler.ru/api/v1/coverage", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) =>
        // setCoverageStatisticsParams({
        //   allCoverage: data.prediction.all_coverage,
        //   coverage: data.prediction.coverage,
        //   percentile: data.prediction.percentile,
        // })
        console.log(data.error)
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.coverageCount}>
        <p>
          Охват аудитории <br />
          <span>{coverageStatisticsParams?.allCoverage}</span>
        </p>
      </div>
      <Schedule data={data} />
      <p className={styles.coverageStatus}>
        Потенциальный охват выбранной аудитории довольно широк!
      </p>
      <Separator />
      <CoverageStatisticsProgress
        name="Приблизительно за 7 дней"
        data={coverageStatisticsParams?.coverage || 0}
        fillingPercentage={coverageStatisticsParams?.percentile || 0}
      />
      {/* <CoverageStatisticsProgress name="Прогноз кликов за 30 дней" />
      <CoverageStatisticsProgress name="Прогноз кликов за 7 дней" />
      <CoverageStatisticsProgress name="Рекомендация бюджета" /> */}
      <div>
        <p style={{ marginBottom: "24px" }}>
          <input type="checkbox" />
          Окончательные данные
        </p>
        <Button name="Применить" textColor="white" onClick={getData} />
      </div>
    </div>
  );
};
