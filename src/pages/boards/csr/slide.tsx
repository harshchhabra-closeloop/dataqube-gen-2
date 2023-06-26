import { Grid } from '@ui-components';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import Header from './header';
import { gridTemplate } from './helper';

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
  const GridTemplate = gridTemplate(itemsCount);

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
    <div className="flex w-full justify-between bg-yellow-400 items-center rounded-md capitalize leading-none font-bold py-1 px-2 mb-2">
      <div className={GridTemplate.grid.inbound.value}>{values?.value}</div>
      <div className={GridTemplate.grid.inbound.label}>{values?.name}</div>
    </div>
  );

  const slideHeaderEl = (v: any, index: number) => (
    <div className={'flex justify-between mb-2'}>
      <div className="flex flex-col w-full">
        <h3
          className={classNames(GridTemplate.grid.title, {
            'mxl:text-lg ': index > 0,
          })}
        >
          {v.user_name}
        </h3>
        <div className={GridTemplate.grid.dispatch}>Dispatch</div>
      </div>
      <div className="pl-3 text-xl mlg:text-md">
        <h2 className={GridTemplate.grid.rank}>#{index + 1}</h2>
      </div>
    </div>
  );

  const getkpis = (v: any, key: number, count: number) => {
    const { name, value, color } = v;
    return (
      <div
        className={classNames(
          `flex flex-1 justify-between items-center  rounded-md  p-0.5 px-2 leading-none ${
            color ? color : ''
          }`,
          {
            'bg-gray-100': key % 2 === 0,
            'bg-white': key % 2 !== 0,
            'flex-col text-center': count > 10,
            'text-right': count < 10,
          },
        )}
      >
        <div className={GridTemplate.grid.kpis.value}>{value}</div>
        <div className={GridTemplate.grid.kpis.label}>{name}</div>
      </div>
    );
  };

  return (
    <div className="bg-[#F9F9F9] font-montserrat h-screen px-2">
      <Header type={subtitle} />
      <div ref={mainRef as React.RefObject<HTMLDivElement>} className="main">
        <div
          className={`h-full px-3 md:px-4 pb-3 w-full grid gap-4 ${GridTemplate.layout} bg-[#F9F9F9]`}
        >
          {data?.length &&
            data.map((v: any, index: number) => {
              const { userid, kpis, topKpi, user_image } = v;
              return index === 0 || itemsCount <= 4 ? (
                <Grid
                  xxlrowspan={
                    GridTemplate.grid.style.xxlrowSpan ?? GridTemplate.grid.style.rowSpan
                  }
                  mlgrowspan={
                    GridTemplate.grid.style.mlgrowSpan ?? GridTemplate.grid.style.rowSpan
                  }
                  mxlrowspan={
                    GridTemplate.grid.style.mxlrowSpan ?? GridTemplate.grid.style.rowSpan
                  }
                  mlgcolspan={
                    GridTemplate.grid.style.mlgcolSpan ?? GridTemplate.grid.style.colSpan
                  }
                  mxlcolspan={
                    GridTemplate.grid.style.mxlcolSpan ?? GridTemplate.grid.style.colSpan
                  }
                  xxlcolspan={
                    GridTemplate.grid.style.xxlcolSpan ?? GridTemplate.grid.style.colSpan
                  }
                  key={userid}
                >
                  {slideHeaderEl(v, index)}
                  <div className={classNames('overflow-hidden mb-3')}>
                    <img
                      className=" object-cover aspect-square w-auto h-full object-top"
                      alt=""
                      src={
                        user_image
                          ? `https://dev.datacube.ai/storage/${user_image}`
                          : `https://dev.datacube.ai/storage/img/AvatarCSR.png`
                      }
                    />
                  </div>
                  <div className={classNames('flex flex-wrap flex-row overflow-hidden')}>
                    {inBoundEl(topKpi)}
                    <div
                      className={classNames(
                        `grid h-full w-full xs:max-h-72 mxl:max-h-64 mlg:max-h-40`,
                        {
                          'grid-cols-3 overflow-scroll overflow-x-hidden':
                            kpis?.length > 10,
                        },
                      )}
                    >
                      {kpis?.length &&
                        kpis.map((v: any, key: number) => {
                          return getkpis(v, key, kpis.length);
                        })}
                    </div>
                  </div>
                </Grid>
              ) : (
                <Grid key={userid}>
                  {slideHeaderEl(v, index)}
                  {inBoundEl(topKpi)}
                  <div className={classNames(GridTemplate.grid.kpis.style.height)}>
                    <div className={GridTemplate.grid.kpis.style.imageWidth}>
                      <img
                        alt=""
                        className=""
                        src={
                          user_image
                            ? `https://dev.datacube.ai/storage/${user_image}`
                            : `https://dev.datacube.ai/storage/img/AvatarCSR.png`
                        }
                      />
                    </div>
                    <div
                      className={classNames(GridTemplate.grid.kpis.style.kpisWidth, {
                        'grid grid-cols-3 h-full overflow-scroll overflow-x-hidden':
                          kpis?.length > 10,
                        'grid h-full': kpis?.length < 10,
                      })}
                    >
                      {kpis?.length &&
                        kpis.map((v: any, key: number) => {
                          return getkpis(v, key, kpis.length);
                        })}
                    </div>
                  </div>
                </Grid>
              );
            })}
        </div>
      </div>
    </div>
  );
}
