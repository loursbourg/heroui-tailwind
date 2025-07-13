import { tv } from "tailwind-variants";

export const title = tv({
  base: "",
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      foreground: "dark:from-white dark:to-black",
    },
    size: {
      sm: "text-sm",
      md: "text-medium font-tinos mb-7",
      lg: "text-large font-tinos",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: ["foreground"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});
