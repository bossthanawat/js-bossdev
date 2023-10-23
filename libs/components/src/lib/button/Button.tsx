import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "rounded-md bg-primary-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  {
    variants: {
      variant: {
        outlined: "",
        contained: "",
      },
      // color: {
      //   primary: "",
      //   secondary: "",
      // },
    },
    defaultVariants: {
      variant: "contained",
    },
    compoundVariants: [
      {
        // variant: "contained",
        // color: "primary",
        // className:
        //   "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
      },
    ],
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({
          // color,
          variant, className
        }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
