import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        outlined: "",
        contained: "",
      },
      color: {
        primary: "",
        secondary: "",
      },
    },
    defaultVariants: {
      variant: "contained",
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "primary",
        className:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
      },
    ],
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ color, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
