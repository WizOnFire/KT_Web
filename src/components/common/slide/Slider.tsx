import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Autoplay 모듈 추가
import {
    GalleryWarpper,
    GalleryBox,
} from "./SliderStyles";
import styled from 'styled-components';

const SwiperContainer = styled(Swiper)`
    width: 100%;
    height: 85%;
    top: 20%;
    img {
        border-radius: 20px;
    }
`
const SliderSlider = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

type TSliderProps = {
    images: string[];
}

const Slider = ({ images }: TSliderProps) => {
    return (
        <GalleryWarpper>
            <GalleryBox>
                <SwiperContainer
                    slidesPerView={4} // 한 번에 보여지는 슬라이드 개수
                    spaceBetween={30} // 슬라이드 간격
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false, // 사용자 상호작용 후에도 자동 슬라이드 유지
                    }}
                    centeredSlides={true}
                    breakpoints={{
                        1366: {
                            slidesPerView: 5,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]} 
                    className="mySwiper"
                >
                    {images.map((img, index) => (
                        <SliderSlider key={index}>
                            <img src={img} alt={`Slide ${index + 1}`} />
                        </SliderSlider>
                    ))}
                </SwiperContainer>
            </GalleryBox>
        </GalleryWarpper>
    );
}

export default Slider;
