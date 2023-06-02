export const getGridContainerLayout = (itemsCount: number) => {
  switch (itemsCount) {
    case 1:
    case 2:
      return 'grid-rows-1 grid-cols-1 xs:grid-cols-2 mlg:grid-cols-2 mxl:grid-cols-2';
    case 3:
      return 'grid-rows-1 grid-cols-1 xs:grid-cols-1 mlg:grid-cols-3 mxl:grid-cols-3';
    case 4:
      return 'grid-rows-1 grid-cols-1 xs:grid-rows-4 xs:grid-cols-2 mlg:grid-rows-4 mlg:grid-cols-2 mxl:grid-cols-4 mxl:grid-rows-2';
    case 5:
      return 'grid-rows-1 grid-cols-1 xs:grid-cols-2 xs:grid-rows-2 mlg:grid-cols-2 mlg:grid-rows-3 mxl:grid-cols-3 mxl:grid-rows-2';
    default:
      return 'grid-rows-5 grid-cols-1 xs:grid-cols-2 mlg:grid-cols-2 mxl:grid-cols-4';
  }
};

export const getGridsLayout = (itemsCount: number) => {
  if (itemsCount === 5) {
    return 'col-span-1 row-span-1 xs:col-span-2 mlg:col-span-1 mxl:col-span-1 xxl:col-span-1 mlg:row-span-2 mxl:row-span-2 xxl:row-span-2';
  } else if (itemsCount === 4) {
    return 'col-span-1 row-span-1 xs:col-span-2 mlg:col-span-1 mxl:col-span-1 xxl:col-span-1 mlg:row-span-2 mxl:row-span-2 xxl:row-span-2';
  } else if (itemsCount < 4) {
    return 'col-span-1 row-span-1 xs:col-span-2 mlg:col-span-1 mxl:col-span-1 xxl:col-span-1 mlg:row-span-2 mxl:row-span-2 xxl:row-span-2';
  } else {
    return 'col-span-1 row-span-1 xs:col-span-2 mlg:col-span-1 mxl:col-span-1 xxl:col-span-1 mlg:row-span-2 mxl:row-span-2 xxl:row-span-3';
  }
};
