import { DropdownDialog } from "../../ui/DropdownDialog";
import { useEffect, useState } from "react";
import { TreeContainer, TreeElement } from "../../ui/Tree";
import { useQueryController } from "../../hooks/useQueryController";

export const SegmentsDMP = () => {
  const { removeQueryParam, addQueryParam } = useQueryController();
  const [geoData, setGeoData] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://fe.rambler.ru/external-api/v1.6/segments?app_id=cdc6ea03-0305-4082-9a0a-95de6e98e82d",
      { mode: "no-cors" }
    )
      .then((response) => response.json())
      .then((data) => setGeoData(data.segments));
  }, []);

  interface SegmentElement {
    name: string;
    id: number;
  }

  interface SegmentContainer {
    name: string;
    containerChildren: Array<SegmentContainer>;
    elementChildren: Array<SegmentElement>;
  }

  const root: SegmentContainer = {
    name: "Test",
    containerChildren: [],
    elementChildren: [],
  };

  let currentContainer = root;

  geoData.forEach(
    (segment: { paths: Array<Array<string>>; name: string; id: number }) => {
      segment.paths.forEach((path) => {
        path.forEach((containerName) => {
          const container = currentContainer.containerChildren.find(
            (container) => container.name === containerName
          );

          if (container) {
            container.elementChildren.push({
              name: segment.name,
              id: segment.id,
            });
            currentContainer = container;
          } else {
            const newContainer: SegmentContainer = {
              name: containerName,
              containerChildren: [],
              elementChildren: [{ name: segment.name, id: segment.id }],
            };

            currentContainer.containerChildren.push(newContainer);
            currentContainer = newContainer;
          }
        });
        currentContainer = root;
      });
    }
  );

  const renderSegmentsTree = (root: SegmentContainer[], level: number) => {
    return root.map((container) => (
      <>
        <TreeContainer name={container.name} level={level}>
          {renderSegmentsTree(container.containerChildren, level + 1)}
          {container.elementChildren.map((element) => (
            <TreeElement
              name={element.name}
              level={level + 1}
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
                if (target.checked) {
                  addQueryParam("segments", element.id);
                } else {
                  removeQueryParam("segments", element.id);
                }
              }}
            />
          ))}
        </TreeContainer>
      </>
    ));
  };

  return (
    <DropdownDialog name="Сегменты ДМП">
      <TreeContainer name="Сегменты ДМП" level={1}>
        {renderSegmentsTree(root.containerChildren, 1)}
      </TreeContainer>
    </DropdownDialog>
  );
};
