import React from "react";
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from "@mui/material";

export interface AlertProps extends MuiAlertProps {
  /**
   * The text displayed inside the alert.
   */
  message?: string;
}

export function Alert({ message, children, ...rest }: AlertProps) {
  return <MuiAlert {...rest}>{message || children}</MuiAlert>;
}
