import { FC, Fragment } from "react";

import Chip, { chip } from "@/components/chip";
import { title } from "@/components/primitives";

const ChipsSection: FC = () => {
  return (
    <Fragment>
      <div className="mb-7">
        <h1 className={title()}>
          3) Add chips. All chips in the project should have same style
        </h1>
        {/* stray pixel here was lost after rendering chips */}
        <div className="flex gap-2  mb-[1px]">
          <Chip variant={chip({ color: "secondary" })}>test1</Chip>
          <Chip variant={chip({ color: "primary" })}>test2</Chip>
          <Chip variant={chip({ color: "success" })}>test3</Chip>
        </div>
      </div>
    </Fragment>
  );
};

export default ChipsSection;
