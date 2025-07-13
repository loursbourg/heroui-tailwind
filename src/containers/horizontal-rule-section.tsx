import { FC, Fragment } from "react";

import { title } from "@/components/primitives";

type Props = {};

const HorizontalRuleSection: FC<Props> = () => {
  return (
    <Fragment>
      <div className="mb-10">
        <h1 className={`${title({})} mb-[28px]`}>5) add this line</h1>
        <div>
          <hr className="border-0 h-[3px] w-[199px] bg-purple" />
        </div>
      </div>
    </Fragment>
  );
};

export default HorizontalRuleSection;
