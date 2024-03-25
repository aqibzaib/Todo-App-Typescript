import  { type ReactNode, type FC } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};
type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};
type InfoBoxProps = HintBoxProps | WarningBoxProps;
const InfoBox: FC<InfoBoxProps> = (props) => {
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }
  const { mode, children, severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      {mode === "warning" ? <h2>Warning</h2> : null}
      <p>{children}</p>
    </aside>
  );
};
export default InfoBox;
