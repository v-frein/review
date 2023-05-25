import Select, { Props, StylesConfig } from "react-select";

const colourStyles: StylesConfig = {
  control: (base) => ({
    ...base,
    boxShadow: "none",
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "#E8ECF2",
      borderRadius: "100px",
      padding: "4px",
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#333F48",
    fontSize: "14px",
    fontFamily: "SBSans",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ":hover": {
      backgroundColor: "inherit",
      cursor: "pointer",
    },
  }),
};

export const MultiSelect = (props: Props) => {
  return (
    <Select
      {...props}
      menuPortalTarget={document.querySelector("body")}
      isMulti
      styles={colourStyles}
    />
  );
};
