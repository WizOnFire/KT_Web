import styled from "styled-components";
import GradientChip from "../../../components/common/gradientChip/GradientChip";
import {
    GalleryContainer,
    GalleryNews,
    GalleryTitle,
    GalleryLine,
} from "./GalleryStyles";
import { parkView } from "../../../assets/assets";
import Slider from "../../../components/common/slide/Slider";
import useFetchData from "../../../hooks/useFetchData";
import { TGalleryResponse } from "../../../types/landing";
const PhotoWrapper = styled.section`
    display: flex;
    justify-content: flex-start;
    width: 65%;
`

const LargePhoto = styled.img`
    width: 550px;
    height: 600px;
    background-image:linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url(${parkView});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 30px;
`

const Gallery = () => {
    const { data } = useFetchData<TGalleryResponse>("media/photolist?count=10");
    const galleryData = data?.data.list;
    const imagePaths = galleryData?.map((item)=>item.imgFilePath) || [];

    return (
    <GalleryContainer>
        <GalleryNews>
            <GradientChip
                main="KTWIZ" title="빛나던 순간들" />
            <GalleryTitle>GALLERY</GalleryTitle>
            <GalleryLine />
        </GalleryNews>
        <PhotoWrapper>
            <LargePhoto />
        </PhotoWrapper>
        <Slider images={imagePaths}/>
    </GalleryContainer>
    );
}
export default Gallery