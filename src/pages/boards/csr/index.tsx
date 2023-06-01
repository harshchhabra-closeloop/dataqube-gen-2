import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { useWindowSize } from '@hooks';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { A11y, EffectCube, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fetchCSRBoardData } from '../boards.services';
import Header from './header';
import LoadingSliding from './loader';
import Slide from './slide';

function CSRBoard() {
  const sliderRef = useRef(null);
  const search = useLocation().search;
  const itemsCount = new URLSearchParams(search).get('items_per_page') || 5;
  const [width, height] = useWindowSize();
  const { isLoading, data } = useQuery({
    queryKey: ['csrboard'],
    queryFn: fetchCSRBoardData,
  });

  useEffect(() => {
    if (sliderRef.current) {
      if (width < 1099) {
        sliderRef.current.classList.remove('overflow-hidden');
      } else {
        sliderRef.current.classList.add('overflow-hidden');
      }
    }
  }, [height, width]);

  const chunks = (arr, n) => {
    const chunks = [];
    for (let i = 0; i < arr?.length; i += n) {
      chunks.push(arr.slice(i, i + n));
    }
    return chunks;
  };

  const loadingEl = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, index) => (
      <LoadingSliding key={index} value={v} />
    ));
  };

  const noDataEl = () => (
    <div className="bg-white h-screen w-full font-montserrat ">
      <Header />
      <div className=" absolute top-1/2 left-1/2">
        <div className=" font-extrabold text-xl uppercase">No Data</div>
      </div>
    </div>
  );

  const { mtd, ytd } = data?.slides || {};
  const mtdChunks = chunks(mtd?.items, itemsCount);
  const ytdChunks = chunks(ytd?.items, itemsCount);
  return (
    <div ref={sliderRef} className="overflow-hidden bg-[#F9F9F9]">
      <Swiper
        effect={'cube'}
        modules={[EffectCube]}
        grabCursor={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {isLoading && (
          <SwiperSlide>
            <div className="bg-[#F9F9F9] font-montserrat h-screen p-2">
              <div
                className={`h-full px-3 md:px-4 pb-3 w-full grid gap-4 grid-rows-2 grid-cols-1 xs:grid-cols-2 mlg:grid-cols-2 mxl:grid-cols-4 bg-[#F9F9F9]`}
              >
                {loadingEl()}
              </div>
            </div>
          </SwiperSlide>
        )}
        {!isLoading && (
          <>
            {mtdChunks?.length
              ? mtdChunks.map((v, index) => (
                  <SwiperSlide key={index}>
                    <Slide
                      subtitle={mtd?.subtitle}
                      data={v}
                      window={{ height, width }}
                      isLoading={isLoading}
                      itemsCount={v?.length}
                    />
                  </SwiperSlide>
                ))
              : noDataEl()}

            {ytdChunks?.length
              ? ytdChunks.map((v, index) => (
                  <SwiperSlide key={index}>
                    <Slide
                      subtitle={ytd?.subtitle}
                      data={v}
                      isLoading={isLoading}
                      window={{ height, width }}
                      itemsCount={v?.length}
                    />
                  </SwiperSlide>
                ))
              : noDataEl()}
          </>
        )}
      </Swiper>
    </div>
  );
}

export default CSRBoard;
