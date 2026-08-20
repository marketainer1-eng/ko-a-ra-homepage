import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerSize = "narrow" | "default" | "wide";

const sizeClass: Record<ContainerSize, string> = {
  narrow: "max-w-[46rem]",
  default: "max-w-[76rem]",
  wide: "max-w-[88rem]",
};

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        sizeClass[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
