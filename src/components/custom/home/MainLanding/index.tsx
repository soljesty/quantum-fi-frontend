import styled from "styled-components"
import * as S from './index.styled'
import CustomImage from "../../../common/CustomImage"
import { MAIN_LANDING_IMAGE } from "../../../../constants/image.constants"
import { BsArrowRight } from "react-icons/bs";
import { FlexBox } from "../../../common/FlexBox";

const MainLandingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient( #3136B0, #001559, #020327);
  padding: 0px 20px 200px 20px;
  overflow-x: hidden !important;
  position: relative;
  @media screen and (max-width: 1200px) {
    padding: 0px 20px 100px 20px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 20px 30px 20px;
  }
`

const SubTitle = styled.div`
  color: white;
  font-size: 35px;
  font-weight: bold;
  max-width: 711px;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

const SparklingSection = styled.div`
  position: relative;
  img{
    margin-top: 15vh; 
    margin-left: 35%;
    animation: zoom-in-zoom-out 1s ease infinite;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.5, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MainLanding = () => {
  return (
    <MainLandingStyle>
      <SparklingSection data-aos="fade-up">
        <CustomImage
          image="/assets/images/star_1.svg"
          position='absolute'
          top='-100px'
          right='-550px'
          width="65px"
          height="64px"
        />

        <CustomImage
          image="/assets/images/diamond_1.svg"
          position='absolute'
          top='0px'
          right='-700px'
        />
        <CustomImage
          image="/assets/images/star_2.svg"
          position='absolute'
          top='350px'
          right='600px'
        />
        <CustomImage
          image="/assets/images/star_3.svg"
          position='absolute'
          top='0px'
          right='600px'
          width="56px"
          height="61px"
        />
        <CustomImage
          image="/assets/images/coins/injtoken.png"
          position='absolute'
          top='350px'
          right='500px'
          width="110px"
          height="110px"
        />
      </SparklingSection>
      <CustomImage
        image={MAIN_LANDING_IMAGE}
        width="371px"
        height="372px"
        smWidth="200px"
        smHeight="200px"
      />

      <SubTitle data-aos="fade-up" data-aos-duration="2000">
        NFT - Gated Yield Farming solutions ON Injective
      </SubTitle>

      <FlexBox gap="54px" smAlignItems="center" smGap="20px" marginTop="60px" zIndex={100}>
        <S.JoinButton data-aos="fade-up" data-aos-duration="2000" href="https://clicktotweet.com/pHaF9" target="__blank">
          Join Ninjas
          <span><BsArrowRight color="#E26C00" /></span>
        </S.JoinButton>
        <S.JoinButton data-aos="fade-up" data-aos-duration="2000" href="https://clicktotweet.com/015w7" target="__blank">
          Join Scientist
          <span><BsArrowRight color="#E26C00" /></span>
        </S.JoinButton>
      </FlexBox>
    </MainLandingStyle>
  )
}

export default MainLanding