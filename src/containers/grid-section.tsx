import classNames from "classnames";
import { FC, Fragment, useMemo, useState } from "react";

import { title } from "@/components/primitives";
import TextInput from "@/components/text-input";
import { getPosition } from "@/utils/get-position";

const GridSection: FC = () => {
  const MAX_BOXES_COUNT = 30;

  const [count, setCount] = useState(30);

  const boxes = useMemo(() => {
    const _count = Math.min(count, MAX_BOXES_COUNT);
    const _boxes = Array.from({ length: _count });

    return _boxes;
  }, [count]);

  return (
    <Fragment>
      <div className="">
        <h1 className={`${title({ size: "lg" })} mb-7`}>4) do this grid</h1>
        <div className="mb-4">
          <div className="flex w-[280px] flex-wrap md:flex-nowrap gap-4">
            <TextInput
              label="Number of items"
              placeholder="30"
              type="number"
              value={String(count)}
              variant="inset"
              onChange={(x) => setCount(Number(x.target.value))}
            />
          </div>
        </div>
        <div className="">
          {/* Grid container */}
          <div className=" border border-zinc rounded-[5px] w-[320px] mb-[28px]">
            <div className="px-[9px] py-[8px] flex flex-wrap gap-[4px]">
              {boxes.map((_, index) => {
                const position = getPosition(index, boxes.length);

                return (
                  <div
                    key={`box-${index}`}
                    className={classNames("w-[16px] h-[16px] rounded-[2px]", {
                      // slightly diffrent than secondary
                      "bg-purple": position === "first",
                      "bg-primary": position === "last",
                      "bg-success": position === "odd",
                      "bg-warning": position === "even",
                    })}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GridSection;
