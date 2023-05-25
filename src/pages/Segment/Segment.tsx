import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  Accessibility,
  Affinitive,
  AffinitiveTable,
  Bindings,
  BuildingAndUnloading,
  BuildingHistory,
  ChangeHistory,
  CoverageBaconSchedule,
  CoverageSchedule,
  Filters,
  FiltersVariants,
  Funnel,
  GroupProfile,
  Navigation,
  SegmentInfo,
  SegmentName,
  SetGroupProfileDate,
  Tags,
} from "@components";

import { ColumnContainer, RowContainer } from "@layouts";

import styles from "./Segment.module.css";

export const Segment = () => {
  return (
    <>
      <Navigation />
      <div className={styles.segmentNameContainer}>
        <SegmentName name="Ипотека" />
      </div>
      <Tabs>
        <TabList>
          <Tab>Информация</Tab>
          <Tab>Охваты Bacon/SSP (Динамика)</Tab>
          <Tab>Профили</Tab>
          <Tab>Аффинитивность</Tab>
          <Tab>Воронка</Tab>
        </TabList>
        <TabPanel>
          <RowContainer>
            <ColumnContainer>
              <SegmentInfo />
              <Tags />
              <BuildingAndUnloading />
              <Bindings />
              <Accessibility />
              <Affinitive />
            </ColumnContainer>
            <ColumnContainer>
              <CoverageSchedule />
              <ChangeHistory />
              <BuildingHistory />
            </ColumnContainer>
          </RowContainer>
        </TabPanel>
        <TabPanel>
          <CoverageBaconSchedule />
        </TabPanel>
        <TabPanel>
          <RowContainer>
            <ColumnContainer width="30%">
              <SetGroupProfileDate />
            </ColumnContainer>
            <ColumnContainer width="70%">
              <GroupProfile name="Пол" />
              <GroupProfile name="Широкие возрастные группы" />
              <GroupProfile name="Узкие возрастыне группы (TNS)" />
            </ColumnContainer>
          </RowContainer>
        </TabPanel>
        <TabPanel>
          <RowContainer>
            <ColumnContainer width="30%">
              <Filters variant={FiltersVariants.AFFINITIVE} />
            </ColumnContainer>
            <ColumnContainer width="70%">
              <AffinitiveTable />
            </ColumnContainer>
          </RowContainer>
        </TabPanel>
        <TabPanel>
          <Funnel />
        </TabPanel>
      </Tabs>
    </>
  );
};
