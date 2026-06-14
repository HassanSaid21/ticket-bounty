import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";
type Props = {
  label: string;
  // allow any props on the element so cloneElement can add className/children
  icon?: React.ReactElement;
  button?: React.ReactElement;
};

export default function placeholder({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center h-screen gap-y-2 ">
      {cloneElement(icon, { className: "w-16 h-16  " })}
      <h2 className="font-bold text-2xl "> {label} </h2>
      {cloneElement(button, { className: "h-10" })}
    </div>
  );
}
