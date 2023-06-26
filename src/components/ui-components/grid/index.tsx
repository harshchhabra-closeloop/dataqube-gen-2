interface Props {
  children: any;
  xsrowspan?: boolean | number;
  xscolspan?: boolean | number;
  mlgcolspan?: boolean | number;
  mlgrowspan?: boolean | number;
  mxlcolspan?: boolean | number;
  mxlrowspan?: boolean | number;
  xxlrowspan?: boolean | number;
  xxlcolspan?: boolean | number;
}

function Grid({
  children,
  xsrowspan = 1,
  xscolspan = 1,
  mlgcolspan = false,
  mlgrowspan = false,
  mxlcolspan = false,
  mxlrowspan = false,
  xxlrowspan = false,
  xxlcolspan = false,
}: Props) {
  const getxxlrowspan = () => {
    switch (xxlrowspan) {
      case 2:
        return `xxl:row-span-2`;
      case 3:
        return `xxl:row-span-3`;
      default:
        return `xxl:row-span-1`;
    }
  };

  const getmxlrowspan = () => {
    switch (mxlrowspan) {
      case 2:
        return `mxl:row-span-2`;
      case 3:
        return `mxl:row-span-3`;
      default:
        return `mxl:row-span-1`;
    }
  };

  const getmlgrowspan = () => {
    switch (mlgrowspan) {
      case 2:
        return `mlg:row-span-2`;
      case 3:
        return `mlg:row-span-3`;
      case 4:
        return `mlg:row-span-4`;
      case 5:
        return `mlg:row-span-5`;
      default:
        return `mlg:row-span-1`;
    }
  };

  const getmlgcolspan = () => {
    switch (mlgcolspan) {
      case 2:
        return `mlg:col-span-2`;
      case 3:
        return `mlg:col-span-3`;
      case 4:
        return `mlg:col-span-4`;
      case 5:
        return `mlg:col-span-5`;
      default:
        return `mlg:col-span-1`;
    }
  };

  const getxxlcolspan = () => {
    switch (xxlcolspan) {
      case 2:
        return `xxl:col-span-2`;
      case 3:
        return `xxl:col-span-3`;
      case 4:
        return `xxl:col-span-4`;
      case 5:
        return `xxl:col-span-5`;
      default:
        return `xxl:col-span-1`;
    }
  };

  const getmxlcolspan = () => {
    switch (mxlcolspan) {
      case 2:
        return `mxl:col-span-2`;
      case 3:
        return `mxl:col-span-3`;
      case 4:
        return `mxl:col-span-4`;
      case 5:
        return `mxl:col-span-5`;
      default:
        return `mxl:col-span-1`;
    }
  };

  const gridSpan = `col-span-1 row-span-1 ${xxlcolspan ? getxxlcolspan() : ''} ${
    mxlcolspan ? getmxlcolspan() : ''
  } ${xxlrowspan ? getxxlrowspan() : ''} ${mxlrowspan ? getmxlrowspan() : ''} ${
    mlgcolspan ? getmlgcolspan() : ''
  } ${mlgrowspan ? getmlgrowspan() : ''}
   `;
  return (
    <div
      className={`grid grid-flow-row-dense grid-cols-1 h-full w-full bg-white border border-grey-100 shadow rounded-md py-2 px-2 mxl:px-5 mxl:py-3 mlg:px-2 mlg:py-2 xxl:px-3 xxl:py-3 ${gridSpan}`}
    >
      {children}
    </div>
  );
}

export default Grid;
