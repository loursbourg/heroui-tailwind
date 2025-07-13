import { Button } from "@heroui/button";
import { FC, Fragment } from "react";

import { title } from "@/components/primitives";

const ButtonSection: FC = () => {
  return (
    <Fragment>
      <div>
        <h1 className={title()}>2) Add the button</h1>
      </div>
      <div className="mb-7">
        <Button className="bg-secondary text-white font-tinos w-[88px]">
          Click me!
        </Button>
      </div>
    </Fragment>
  );
};

export default ButtonSection;
