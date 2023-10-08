import { sliders } from "../fake-data/sliderData"
// import Swiper core and required modules
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import '../style.css'
const SwipperSlider = () => {
    // browser title update
    const updateBrowserTitle = (swiper: any) => {
        const currentSlide = swiper.slides[swiper.activeIndex] as HTMLElement;
        const currentSlideTitle = currentSlide.querySelector('.slider__maintitle')?.textContent;
        if (currentSlideTitle) {
            document.title = currentSlideTitle;
        }
    };

    return (
        <div className="">
            <div className="relative max-w-[1640px] w-full mx-auto">
                <Swiper
                    id="banner"
                    modules={[Navigation, EffectFade, Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    resizeObserver={true}
                    allowTouchMove={true}
                    slidesPerView={1}
                    effect="fade"
                    speed={2500}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    onSwiper={(swiper: any) => {
                        updateBrowserTitle(swiper); // Initial title update
                    }}
                    onSlideChange={(swiper: any) => {
                        updateBrowserTitle(swiper); // Update title on slide change
                    }}
                >
                    {sliders &&
                        sliders.map((banner: any, index: number) => (
                            <SwiperSlide key={index}>
                                <div className='relative'>
                                    <div className={`lg:w-[50%] w-full  z-[99] lg:space-s-8 px-4 md:!pl-[65px] md:px-6 lg:px-8`}>
                                        <div className="slider__content md:block hidden absolute top-0 left-0 w-full h-full flex flex-col justify-center">
                                            <h2 className="lg:text-[50px] md:text-[45px] text-[20px] font-bold md:leading-[60px] leading-[25px] lg:mb-[35px] md:mb-[25px] mb-[8px] text-[#ffffff] uppercase slider__maintitle">
                                                {banner?.title}
                                            </h2>
                                                <a
                                                    className="md:w-[168px] w-[100px] cursor-pointer tracking-widest flex items-center justify-center bg-primary text-[#fff] hover:bg-dark lg:text-[16px] text-[14px] font-bold lg:p-[12px] md:p-[8px] p-[6px]"
                                                >
                                                    SHOP NOW
                                                </a>
                                        </div>
                                    </div>
                                    <div className='nextimg_wrapper'>
                                        <img
                                            className="next_img"
                                            src={banner.image?.original}
                                            alt={banner.image?.original}
                                            title={banner.image?.original}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
            </div>
        </div>
    );
};

export default SwipperSlider;