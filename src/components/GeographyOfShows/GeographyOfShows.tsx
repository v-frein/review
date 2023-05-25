import { DropdownDialog } from "@ui";

import { TreeContainer, TreeElement } from "../../ui/Tree";
import { useEffect, useState } from "react";
import { useQueryController } from "../../hooks/useQueryController";

interface Region {
  id: number;
  name: string;
  children: Array<Region>;
}

export const GeographyOfShows = () => {
  const { removeQueryParam, addQueryParam, queryParamIncludes } =
    useQueryController();
  const [geographyOfShowsList, setGeographyOfShowsList] = useState<
    Array<Region>
  >([]);

  useEffect(() => {
    fetch(
      "https://perf-backend-rc.adtech.rambler.ru/v1.0/dictionaries/geo?ids=6&ids=35",
      {
        headers: {
          "x-td-account-id": "1",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setGeographyOfShowsList(result[0].children)) //Выбрана Россия
      .catch((error) => console.log("error", error));
  }, []);

  console.log(geographyOfShowsList);

  const renderTree = (geographyOfShowsList: Array<Region>) => {
    return geographyOfShowsList.map((region) => (
      <TreeContainer name={region.name} level={1}>
        {region.children.map((subject) => (
          <TreeElement
            name={subject.name}
            level={2}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
              if (target.checked) {
                addQueryParam("regions", subject.id);
              } else {
                removeQueryParam("regions", subject.id);
              }
            }}
          />
        ))}
      </TreeContainer>
    ));
  };

  return (
    <DropdownDialog name="География показов">
      {renderTree(geographyOfShowsList)}
    </DropdownDialog>
  );
};
