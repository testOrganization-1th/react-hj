import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className, children, ...props }: Props) {
  return (
    <div
      className={cn("border rounded-md p-3 shadow-md", className)}
      {...props}
    >
      {children}
    </div>
  );
}
