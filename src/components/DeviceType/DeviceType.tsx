import { DropdownDialog } from "@ui";
import { Tag } from "./Tag";

import styles from "./DeviceType.module.css";
import { useEffect, useState } from "react";
import { useQueryController } from "../../hooks/useQueryController";

interface deviceTypesType {
  id: number;
  name: string;
}

export const DeviceType = () => {
  const { removeQueryParam, addQueryParam, queryParamIncludes } =
    useQueryController();
  const [deviceTypesList, setDeviceTypesList] = useState<deviceTypesType[]>([]);

  useEffect(() => {
    fetch(
      "https://perf-backend-rc.adtech.rambler.ru/v1.0/dictionaries/deviceTypes",
      {
        headers: {
          "x-td-account-id": "1",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setDeviceTypesList(result))
      .catch((error) => console.log("error", error));
  }, []);

  const renderSelectedOsVersionsList = (deviceTypesList: deviceTypesType[]) => {
    return deviceTypesList.map(({ id, name }) => {
      if (queryParamIncludes("deviceTypes", id)) {
        return (
          <Tag
            name={name}
            onClick={() => removeQueryParam("deviceTypes", id)}
          />
        );
      }
    });
  };

  const renderUnselectedOsVersionsList = (
    deviceTypesList: deviceTypesType[]
  ) => {
    return deviceTypesList.map(({ id, name }) => {
      if (queryParamIncludes("deviceTypes", id)) {
        return <></>;
      }

      return (
        <Tag name={name} onClick={() => addQueryParam("deviceTypes", id)} />
      );
    });
  };

  return (
    <DropdownDialog name="Тип устройства">
      <div className={styles.container}>
        <div>
          <p>Выбранные:</p>
          <div className={styles.tagsContainer}>
            {renderSelectedOsVersionsList(deviceTypesList)}
          </div>
        </div>
        <div>
          <p>Устройства:</p>
          <div className={styles.tagsContainer}>
            {renderUnselectedOsVersionsList(deviceTypesList)}
          </div>
        </div>
      </div>
    </DropdownDialog>
  );
};
