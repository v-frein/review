import searchIcon from "../..//assets/images/search.svg";
import {
  Filters,
  FiltersVariants,
  Navigation,
  TaxonomyControls,
  TaxonomyTable,
} from "../../components";
import { ColumnContainer, RowContainer } from "@layouts";
import { InputWithButton } from "../../ui";
export const Taxonomy = () => {
  return (
    <>
      <Navigation />
      <RowContainer>
        <ColumnContainer width="25%">
          <TaxonomyControls />
          <InputWithButton image={searchIcon} />
          <Filters variant={FiltersVariants.TAXONOMY} />
        </ColumnContainer>
        <ColumnContainer width="75%">
          <TaxonomyTable />
        </ColumnContainer>
      </RowContainer>
    </>
  );
};
