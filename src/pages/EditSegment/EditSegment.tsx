import { EditSegemntForm, Navigation } from "@components";
import { ColumnContainer, RowContainer } from "@layouts";

export const EditSegment = () => {
  return (
    <>
      <Navigation />
      <RowContainer>
        <ColumnContainer width="100%">
          <EditSegemntForm />
        </ColumnContainer>
      </RowContainer>
    </>
  );
};
