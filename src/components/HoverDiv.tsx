/** @format */

import { cn } from "../utils/cn";

export default function HoverDiv(
  props: React.HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      {...props}
      className={cn(
        "py-2 px-3 hover:bg-zinc-800  transition-all cursor-pointer rounded-xl",
        props.className
      )}
    />
  );
}
