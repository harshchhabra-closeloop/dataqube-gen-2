import classNames from 'classnames';

interface Props {
  children: any;
}

function Grid({ children }: Props) {
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 h-full w-full bg-white border border-grey-100 shadow rounded-md py-2 px-2 mxl:px-5 mxl:py-3 mlg:px-2 mlg:py-2 xxl:px-3 xxl:py-3 col-span-1 row-span-1 xs:col-span-2 mlg:col-span-1 mxl:col-span-1 xxl:col-span-1 mlg:row-span-2 mxl:row-span-2 xxl:row-span-2">
      {children}
    </div>
  );
}

export default Grid;
