import { Grid } from '@ui-components';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import Header from './header';
import { getGridContainerLayout } from './helper';

interface Props {
  data: [];
  subtitle: string;
  isLoading: boolean;
  window: {
    height: number;
    width: number;
  };
  itemsCount: number;
}

export default function Slide({ data, window, subtitle, itemsCount }: Props) {
  const { height, width } = window;
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      if (width < 1099) {
        mainRef.current.style.height = 'auto';
      } else {
        mainRef.current.style.height = height - 150 + 'px';
      }
    }
  }, [height, width]);

  const inBoundEl = (values: { value: string; name: string }) => (
    <div className="flex w-full justify-between bg-yellow-400 items-center rounded-md capitalize leading-none font-bold py-1 px-2">
      <div className="text-xs xs:text-xl mlg:text-xs mxl:text-xl xxl:text-2xl">
        {values?.value}
      </div>
      <div className="text-xs xs:text-xl mlg:text-xs mxl:text-xl xxl:text-2xl">
        {values?.name}
      </div>
    </div>
  );

  const slideHeaderEl = (v: any, index: number) => (
    <div className={'flex justify-between mb-2'}>
      <div className="flex flex-col w-full">
        <h3
          className={classNames(
            'font-bold uppercase text-xl xs:text-xl mlg:text-lg mxl:text-2xl xxl:text-3xl',
            {
              'mxl:text-lg ': index > 0,
            },
          )}
        >
          {v.user_name}
        </h3>
        <div className="font-normal text-xs xs:text-xs mlg:text-md mxl:text-sm xxl:text-xl">
          Dispatch
        </div>
      </div>
      <div className="pl-3 text-xl mlg:text-md">
        <h2 className="font-extrabold text-xs xs:text-xl mlg:text-lg mxl:text-xl xxl:text-3xl">
          #{index + 1}
        </h2>
      </div>
    </div>
  );

  const getkpis = (v: any, key: number) => {
    const { name, value, color } = v;
    return (
      <div
        className={classNames(
          `flex flex-1 justify-between items-center  rounded-md  p-0.5 px-2 leading-none ${
            color ? color : 'bg-gray-100'
          }`,
          {
            'bg-white': key === 0,
          },
        )}
      >
        <div className="font-bold text-xs xs:text-sm mlg:text-xs mxl:text-xs xxl:text-sm leading-none">
          {value}
        </div>
        <div className="text-right text-xs xs:text-sm mlg:text-xs mxl:text-xxs xxl:text-sm font-semibold capitalize text-gray-600 leading-none">
          {name}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#F9F9F9] font-montserrat h-screen px-2">
      <Header type={subtitle} />
      <div ref={mainRef as React.RefObject<HTMLDivElement>} className="main">
        <div
          className={`h-full px-3 md:px-4 pb-3 w-full grid gap-4 ${getGridContainerLayout(
            itemsCount,
          )} bg-[#F9F9F9]`}
        >
          {data?.length &&
            data.map((v: any, index: number) => {
              const { userid, kpis, topKpi } = v;
              return index === 0 || itemsCount <= 4 ? (
                <Grid key={userid}>
                  {slideHeaderEl(v, index)}
                  <div className={classNames('overflow-hidden mb-3')}>
                    <img
                      className=" object-cover aspect-square w-auto h-full object-top"
                      alt=""
                      src="https://dev.datacube.ai/storage/img/AvatarCSR.png"
                    />
                  </div>
                  <div className={classNames('flex flex-wrap flex-row overflow-hidden')}>
                    {inBoundEl(topKpi)}
                    <div
                      className={classNames(
                        'grid h-full w-full xs:max-h-72 mxl:max-h-64 mlg:max-h-40',
                      )}
                    >
                      {kpis?.length &&
                        kpis.map((v: any, key: number) => {
                          return getkpis(v, key);
                        })}
                    </div>
                  </div>
                </Grid>
              ) : (
                <div
                  key={userid}
                  className={classNames(
                    'grid grid-flow-row-dense grid-cols-1 h-full w-full bg-white border border-grey-100 shadow rounded-md py-2 px-2 mlg:py-2 mxl:px-2 mxl:py-2 xxl:py-4 xxl:px-5',
                  )}
                >
                  {slideHeaderEl(v, index)}
                  {inBoundEl(topKpi)}
                  <div
                    className={classNames(
                      'flex flex-wrap flex-row overflow-hidden xs:h-52 mlg:h-40 mxl:h-72 xxl:h-60',
                    )}
                  >
                    <div className="flex xs:w-[50%] xxl:w-[40%] mxl:w-[50%] mlg:w-[30%] items-end">
                      <img
                        alt=""
                        className=""
                        src="https://dev.datacube.ai/storage/img/AvatarCSR.png"
                      />
                    </div>
                    <div
                      className={classNames(
                        'grid h-full xs:w-[50%] xxl:w-[60%] mxl:w-[50%] mlg:w-[70%]',
                      )}
                    >
                      {kpis?.length &&
                        kpis.map((v: any, key: number) => {
                          return getkpis(v, key);
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
