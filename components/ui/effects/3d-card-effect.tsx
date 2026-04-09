import * as React from "react";

export type CardContainerProps = React.HTMLAttributes<HTMLDivElement>;
export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;
export type CardItemProps = React.HTMLAttributes<HTMLDivElement> & {
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
};

/**
 * Minimal, build-safe 3D card primitives.
 * These components intentionally keep behavior simple to avoid runtime deps.
 */
export function CardContainer({ className, ...props }: CardContainerProps) {
  return <div className={className} {...props} />;
}

export function CardBody({ className, ...props }: CardBodyProps) {
  return <div className={className} {...props} />;
}

export function CardItem({ className, translateZ, rotateX, rotateY, style, ...props }: CardItemProps) {
  // Preserve any provided style; ignore 3D props if not used by caller.
  const mergedStyle: React.CSSProperties = {
    ...style,
  };

  // If caller passes translateZ/rotateX/rotateY, apply a basic transform.
  const tz = translateZ ?? 0;
  const rx = rotateX ?? 0;
  const ry = rotateY ?? 0;

  if (translateZ !== undefined || rotateX !== undefined || rotateY !== undefined) {
    mergedStyle.transform = `${style?.transform ?? ""} translateZ(${typeof tz === "number" ? `${tz}px` : tz}) rotateX(${typeof rx === "number" ? `${rx}deg` : rx}) rotateY(${typeof ry === "number" ? `${ry}deg` : ry})`.trim();
    mergedStyle.transformStyle = "preserve-3d";
  }

  return <div className={className} style={mergedStyle} {...props} />;
}
