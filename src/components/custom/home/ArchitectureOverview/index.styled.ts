import styled from "styled-components";
import { globalFonts } from "../../../../constants/fonts.constant";

const ArchitectureOverviewStyle = styled.div`
  background-image: linear-gradient( #001559, #3136B0, #020327);
  
`

const Container = styled.div`
  max-width: 1516px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 120px 20px;
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`

const Title = styled.div`
  font-size: "Montserrat";
  font-size: 50px;
  color: #FA931B;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  &:after{
    content: '';
    display: block;
    position: relative;
    width: 65%;
    /* border: 2px solid #898989; */
    border-bottom: 3.45px solid transparent;
    border-image: linear-gradient(0.25turn, #E26C00, rgba(255, 205, 27, 0.4), rgba(255, 205, 27, 0));
    border-image-slice: 1;
    border-radius: 50%;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

const ContentText = styled.div` 
  margin-bottom: 40px;
  font-family: ${globalFonts.MontAlt};
  color: white;
  font-size: 32px;
  text-align: center;
  max-width: 1135px;
  width: 100%;
  line-height: 100%;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 120%;
    margin-bottom: 20px;
  }
`

export {
  Title,
  ContentText,
  ArchitectureOverviewStyle,
  Container
}