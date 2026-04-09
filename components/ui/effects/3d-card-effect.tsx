"use client";

import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Compatibility exports for components expecting `CardContainer`, `CardBody`, `CardItem`.
 * These are lightweight wrappers to avoid build-time import errors.
 */
export const CardContainer = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={className} {...props} />;
  }
);
CardContainer.displayName = "CardContainer";

export const CardBody = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={className} {...props} />;
  }
);
CardBody.displayName = "CardBody";

export type CardItemProps = DivProps & {
  /**
   * Some implementations use `translateZ` to control 3D depth.
   * We accept it for type-compatibility even if not used.
   */
  translateZ?: number | string;
  as?: React.ElementType;
};

export const CardItem = React.forwardRef<HTMLElement, CardItemProps>(
  ({ as: Comp = "div", className, translateZ: _translateZ, ...props }, ref) => {
    // We intentionally ignore translateZ here; this is a compatibility shim.
    return <Comp ref={ref as any} className={className} {...props} />;
  }
);
CardItem.displayName = "CardItem";
