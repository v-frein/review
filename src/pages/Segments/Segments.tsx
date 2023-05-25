import {
  Filters,
  FiltersVariants,
  Navigation,
  SegmentsControls,
  SegmentsTable,
} from "@components";
import { ColumnContainer, RowContainer } from "@layouts";
import searchIcon from "../..//assets/images/search.svg";
import { InputWithButton } from "../../ui";

export const Segments = () => {
  return (
    <>
      <Navigation />
      <RowContainer>
        <ColumnContainer width="30%">
          <SegmentsControls />
          <InputWithButton image={searchIcon} />
          <Filters variant={FiltersVariants.SEGMENTS} />
        </ColumnContainer>
        <ColumnContainer width="70%">
          <SegmentsTable />
        </ColumnContainer>
      </RowContainer>
    </>
  );
};
