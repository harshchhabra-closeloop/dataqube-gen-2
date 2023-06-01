export const getGridContainerLayout = (itemsCount: number) => {
  if (itemsCount === 5) {
    return 'grid-rows-2 grid-cols-1 xs:grid-cols-2 mlg:grid-cols-2 mxl:grid-cols-3';
  } else if (itemsCount === 4) {
    return 'grid-rows-2 grid-cols-1 xs:grid-cols-2 mlg:grid-cols-2 mxl:grid-cols-4';
  } else if (itemsCount < 4) {
    return 'grid-rows-2 grid-cols-1 xs:grid-cols-2 mlg:grid-cols-2 mxl:grid-cols-3';
  } else {
    return 'grid-rows-3 grid-cols-1 xs:grid-cols-2 mlg:grid-cols-2 mxl:grid-cols-4';
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
