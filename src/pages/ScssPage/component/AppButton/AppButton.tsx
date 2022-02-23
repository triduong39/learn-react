import * as React from "react";
import "./AppButton.scss";

type InputProps = {
  color?: "red" | "blue" | "purple";
} & React.ComponentProps<"button">;

export default function AppButton({ color = "blue", ...props }: InputProps) {
  return (
    <button className={`btn-${color}`} {...props}>
      Click here
    </button>
  );
}
