import "./LabelForElement.css";

export enum labelPositionOptions {
  TOP = "top",
  LEFT = "left",
}

export enum labelAlignOptions {
  RIGHT = "right",
}

interface LabelForElementProps {
  name: string;
  labelPosition?: labelPositionOptions;
  labelAlign?: labelAlignOptions;
  nameWidth?: string;
  children?: React.ReactNode;
}

export const LabelForElement = ({
  name,
  children,
  labelPosition,
  labelAlign,
  nameWidth,
}: LabelForElementProps) => {
  return (
    <div className={`container ${labelPosition}`}>
      <p style={{ width: nameWidth }} className={`heading ${labelAlign}`}>
        {name}
      </p>
      {children}
    </div>
  );
};
