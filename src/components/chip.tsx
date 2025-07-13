import { FC, ReactNode } from "react";
import { Chip as HeroUIChip } from "@heroui/chip";
import { tv } from "tailwind-variants";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  variant: string;
}

export const chip = tv({
  base: "",
  variants: {
    color: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      success: "bg-success text-black",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const Chip: FC<Props> = (props) => {
  const { variant } = props;

  return (
    <div>
      <HeroUIChip
        classNames={{
          content: classNames("px-[24px] font-inter text-chip"),
          base: classNames("px-[4px] pe-[5px] ", variant),
        }}
      >
        {props.children}
      </HeroUIChip>
    </div>
  );
};

export default Chip;
