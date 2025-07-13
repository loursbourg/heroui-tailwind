import { FC, Fragment } from "react";

import { title } from "@/components/primitives";
import TextInput from "@/components/text-input";

const InputFieldsSection: FC = () => {
  return (
    <Fragment>
      <h1 className={title({ color: "secondary" })}>1) Add inputs</h1>
      <div className="w-[320px] ">
        <div className="mb-4">
          <TextInput placeholder="Email" type="email" />
        </div>
        <div className="mb-7">
          <TextInput placeholder="Password" type="password" />
        </div>
      </div>
    </Fragment>
  );
};

export default InputFieldsSection;
