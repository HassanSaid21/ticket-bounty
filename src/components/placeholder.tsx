import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement, type ReactElement } from "react";

type ElementWithClassName = ReactElement<{ className?: string }>;

type PlaceholderProps = {
  label: string;
  icon?: ElementWithClassName;
  Icon?: ElementWithClassName;
  button?: ElementWithClassName;
  Button?: ElementWithClassName;
};

export default function Placeholder({
  label,
  icon,
  button,
  Icon,
  Button,
}: PlaceholderProps) {
  const resolvedIcon = icon ?? Icon ?? (
    <LucideMessageSquareWarning className="w-16 h-16" />
  );
  const resolvedButton = button ?? Button ?? <div className="h-10" />;

  const iconElement = cloneElement(resolvedIcon, {
    className: ["w-16 h-16", resolvedIcon.props.className]
      .filter(Boolean)
      .join(" "),
  });

  const buttonElement = cloneElement(resolvedButton, {
    className: ["h-10", resolvedButton.props.className]
      .filter(Boolean)
      .join(" "),
  });

  return (
    <div className="flex h-screen flex-1 flex-col items-center justify-center gap-y-2">
      {iconElement}
      <h2 className="text-2xl font-bold">{label}</h2>
      {buttonElement}
    </div>
  );
}
