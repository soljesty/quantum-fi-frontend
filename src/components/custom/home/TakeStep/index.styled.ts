import styled from "styled-components";
import { globalFonts } from "../../../../constants/fonts.constant";

const TakeStepStyle = styled.div`
  background-image: linear-gradient(#282F9A, #3136B0, #000D37);
  
`

const Container = styled.div`
  max-width: 1516px;
  width: 100%;
  margin: auto;
  padding: 150px 20px;
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`

const Title = styled.div`
  font-size: 50px;
  line-height: 130%;
  font-weight: bold;
  color: #FA931B;
  max-width: 580px;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`

const ContentText = styled.div`
  font-size: 16px;
  line-height: 150%;
  font-weight: bold;
  color: white;
  max-width: 590px;
  width: 100%;
`

const GetStartedButton = styled.div`
  cursor: pointer;
  max-width: 187px;
  width: 100%;
  height: 50px;
  border-radius: 53px;
  border-radius: 53px;
  background: linear-gradient(176deg, #FFCD1B -7.37%, #E26C00 92.76%);
  display: flex;
  align-items: center;
  justify-content: center;
  // font
  color: white;
  font-size: 19px;
  font-weight: bold;
  &:hover{
    scale: 1.1;
  }
`

const JoinCommunity = styled.div`
  background-color: #031b69;
  border: #49d4ff 8px solid;
  padding: 80px 15px;
  border-radius: 81px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  filter: drop-shadow(0 0 0.75rem black);
  @media screen and (max-width: 768px) {
    padding: 20px 15px;
    border-width: 4px;
    border-radius: 20px;
  }
`

const JoinCommunityTitle = styled.h1`
  font-size: 50px;
  font-weight: 600;
  font-size: "Poppins";
  line-height: 130%;
  background: -webkit-linear-gradient(#FFCD1B, #E26C00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`

const JoinCommunitySubTitle = styled.div`
  margin-top: 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-size: "Inter";
  line-height: 150%;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 5px;
  }
  
`

const QuantumAlpha = styled.a`
  margin-top: 40px;
  border: #49d4ff 4px solid;
  border-radius: 10px;
  width: 304px;
  text-decoration: none;
  cursor: pointer;
  /* height: 56px; */
  font-family: ${globalFonts.MontAlt};
  font-size: 14px;
  line-height: 150%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  &:hover{
    scale: 1.1;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 10px;
    padding: 10px;
    border-width: 1.5px;
    width: 50%;
  }
`

const CoinSection = styled.div`
  position: relative;
  @keyframes jump {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  img{
    animation: jump 2s infinite;
    animation-delay: calc(.2s * 1);
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const TakeStepFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  @media screen and (max-width: 1000px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 768px) {
    gap: 20px;
    padding-left: 0px;
  }
`
export {
  TakeStepStyle,
  Container,
  Title,
  ContentText,
  GetStartedButton,
  JoinCommunity,
  JoinCommunityTitle,
  JoinCommunitySubTitle,
  QuantumAlpha,
  CoinSection,
  TakeStepFlex
}