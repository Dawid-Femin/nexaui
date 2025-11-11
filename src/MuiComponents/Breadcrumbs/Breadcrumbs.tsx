import React from "react";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  Typography,
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from "@mui/material";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  /**
   * Array of breadcrumb items.
   */
  items: BreadcrumbItem[];
  /**
   * Separator between items (defaults to "/")
   */
  separator?: React.ReactNode;
}

export const Breadcrumbs = ({
  items,
  separator = "/",
  ...rest
}: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs separator={separator} {...rest}>
      {items.map((item, index) =>
        item.href && index < items.length - 1 ? (
          <Link
            key={index}
            href={item.href}
            underline="none"
            color="inherit"
            sx={{
              transition: "color 0.2s ease",
              "&:hover": {
                color: "black",
              },
            }}
          >
            {" "}
            {item.label}
          </Link>
        ) : (
          <Typography key={index} color="primary">
            {item.label}
          </Typography>
        ),
      )}
    </MuiBreadcrumbs>
  );
};
