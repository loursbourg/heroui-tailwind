import { FC } from "react";
import { Input, InputProps } from "@heroui/input";
import { tv } from "tailwind-variants";

interface Props extends Omit<InputProps, "variant"> {
  placeholder?: string;
  label?: string;
  variant?: "default" | "inset";
}

const textInputClassNames = tv({
  variants: {
    variant: {
      default: {
        label: "!scale-100 top-[16px] px-[4px]",
        innerWrapper: "py-[4px] px-[2px]",
        inputWrapper:
          "h-[56px] px-[9px] py-[0px] bg-white rounded-medium border-width-medium",
        input: "mb-[0px] font-tinos",
      },
      inset: {
        label: "!scale-100 top-[16px] px-[3px] font-tinos",
        innerWrapper: "py-[4px] px-[2px]",
        inputWrapper:
          "h-[56px] bg-white px-[8px] py-[0px] rounded-medium border-width-medium",
        input: "mb-[0] font-open-sans !text-default",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const TextInput: FC<Props> = (props) => {
  const { placeholder, label, variant = "default", onChange, ...rest } = props;

  return (
    <Input
      fullWidth
      classNames={textInputClassNames.variants.variant[variant]}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
};

export default TextInput;
