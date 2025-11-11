import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  /**
   * The text displayed inside the button.
   */
  label?: string;
}

export function Button(props: ButtonProps) {
  const { label, children, ...rest } = props;
  return <MuiButton {...rest}>{label || children}</MuiButton>;
}
