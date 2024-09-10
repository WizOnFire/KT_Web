import { ktParkKorean, ParkGuide } from "../../assets/assets";
import { Container, Image, ImageContainer } from "./WizParkStyles";

const Guide = () => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={ktParkKorean} alt="ktParkKorean" />
        </ImageContainer>
        <ImageContainer>
          <Image src={ParkGuide} alt="ParkGuide" />
        </ImageContainer>
    </Container>
    </>
  );
}
export default Guide 