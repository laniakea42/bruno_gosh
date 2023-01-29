import { ButtonUI } from "./button.styled";

interface ButtonProps {
  /**
   * Is it primary?
   */
  primary?: boolean;

  /**
   * Dashes around?
   */
  dashed?: boolean;

  /**
   * Button size
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  cn?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "small",
  dashed = false,
  label,
  cn,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";
  const dashes = dashed ? "button--dashed" : "";
  return (
    <ButtonUI
      type="button"
      className={["button", `button--${size}`, cn, mode, dashes].join(" ") + " "}
      {...props}
    >
      {label}
    </ButtonUI>
  );
};
