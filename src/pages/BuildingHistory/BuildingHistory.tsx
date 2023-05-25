import {
  SegmentNavigation,
  Navigation,
  Filters,
  FiltersVariants,
  BuildingHistoryTable,
} from "@components";

import { ColumnContainer, RowContainer } from "@layouts";

export const BuildingHistory = () => {
  return (
    <>
      <Navigation />
      <RowContainer>
        <ColumnContainer width="30%">
          <SegmentNavigation />
          <Filters variant={FiltersVariants.BUILDING_HISTORY} />
        </ColumnContainer>
        <ColumnContainer width="70%">
          <BuildingHistoryTable />
        </ColumnContainer>
      </RowContainer>
    </>
  );
};
