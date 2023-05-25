import { DropdownDialog } from "@ui";

import styles from "./OSVersion.module.css";
import { Tag } from "./Tag";
import { useEffect, useState } from "react";
import { useQueryController } from "../../hooks/useQueryController";

interface osVersionsListType {
  id: number;
  name: string;
}

export const OSVersion = () => {
  const { removeQueryParam, addQueryParam, queryParamIncludes } =
    useQueryController();
  const [osVersionList, setOsVersionList] = useState<osVersionsListType[]>([]);

  useEffect(() => {
    fetch(
      "https://perf-backend-rc.adtech.rambler.ru/v1.0/dictionaries/deviceOS",
      {
        headers: {
          "x-td-account-id": "1",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setOsVersionList(result))
      .catch((error) => console.log("error", error));
  }, []);

  const renderSelectedOsVersionsList = (
    osVersionsList: osVersionsListType[]
  ) => {
    return osVersionsList.map(({ id, name }) => {
      if (queryParamIncludes("osVersions", id)) {
        return (
          <Tag name={name} onClick={() => removeQueryParam("osVersions", id)} />
        );
      }
    });
  };

  const renderUnselectedOsVersionsList = (
    osVersionsList: osVersionsListType[]
  ) => {
    return osVersionsList.map(({ id, name }) => {
      if (queryParamIncludes("osVersions", id)) {
        return <></>;
      }

      return (
        <Tag name={name} onClick={() => addQueryParam("osVersions", id)} />
      );
    });
  };

  return (
    <DropdownDialog name="Версия ОС">
      <div className={styles.container}>
        <div>
          <p>Выбранные:</p>
          <div className={styles.tagsContainer}>
            {renderSelectedOsVersionsList(osVersionList)}
          </div>
        </div>
        <div>
          <p>Устройства:</p>
          <div className={styles.tagsContainer}>
            {renderUnselectedOsVersionsList(osVersionList)}
          </div>
        </div>
      </div>
    </DropdownDialog>
  );
};
