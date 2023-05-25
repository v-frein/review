import {
  SegmentNavigation,
  ChangeHistoryTable,
  Navigation,
  Filters,
  FiltersVariants,
} from "@components";
import { ColumnContainer, RowContainer } from "@layouts";

export const ChangeHistory = () => {
  return (
    <>
      <Navigation />
      <RowContainer>
        <ColumnContainer width="30%">
          <SegmentNavigation />
          <Filters variant={FiltersVariants.CHANGE_HISTORY} />
        </ColumnContainer>
        <ColumnContainer width="70%">
          <ChangeHistoryTable />
        </ColumnContainer>
      </RowContainer>
    </>
  );
};
