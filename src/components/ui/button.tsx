import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-heading tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(195_100%_47%/0.4)] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary hover:text-primary",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: 
          "hover:bg-muted hover:text-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        hero: 
          "bg-gradient-to-r from-[hsl(195,100%,47%)] to-[hsl(195,100%,60%)] text-[hsl(210,50%,3%)] shadow-lg hover:shadow-[0_0_40px_hsl(195_100%_47%/0.5)] hover:scale-105 active:scale-[0.98] font-bold uppercase tracking-wider",
        heroOutline:
          "border-2 border-[hsl(195,100%,47%)] bg-transparent text-foreground hover:bg-[hsl(195,100%,47%,0.1)] hover:shadow-[0_0_30px_hsl(195_100%_47%/0.3)] font-bold uppercase tracking-wider",
        glow:
          "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(195_100%_47%/0.4)] hover:shadow-[0_0_40px_hsl(195_100%_47%/0.6)] hover:scale-105",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
