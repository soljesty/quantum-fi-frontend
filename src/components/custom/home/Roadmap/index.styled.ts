import styled from "styled-components";
import { globalFonts } from "../../../../constants/fonts.constant";

const RoadmapStyle = styled.div`
  max-width: 100vw;
  background-image: linear-gradient( #001559, #282F9A);
`

const RoadmapPosition = styled.div`
  position: relative;
  div:first-child{
    position: absolute;
    top: 500px;
    right: 250px;
  }
  div:nth-child(2){
    position: absolute;
    top: 260px;
    right: 520px;
  }
  div:nth-child(3){
    position: absolute;
    top: 650px;
    right: 420px;
  }
  div:nth-child(4){
    position: absolute;
    top: 430px;
    right: 730px;
  }
  div:nth-child(5){
    position: absolute;
    top: 800px;
    right: 660px;
  }
  div:nth-child(6){
    position: absolute;
    top: 560px;
    right: 1000px;
  }
  div:nth-child(7){
    position: absolute;
    top: 920px;
    right: 970px;
  }
  div:nth-child(8){
    position: absolute;
    top: 660px;
    right: 1300px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Element = styled.div`
  color: white;
  font-size: 20px;
  font-family: ${globalFonts.Mont};
  line-height: 100%;
  max-width: 210px;
  width: 100%;
  p:first-child{
    color: #BB5002;
    font-size: 24px;
    font-weight: bold;
    line-height: 100%;
  }
  p:nth-child(2){
    color: white;
    font-size: 26px;
    font-weight: 600;
    line-height: 100%;
    font-family: ${globalFonts.Mont};
  }
  p:nth-child(3){
    color: white;
    font-size: 20px;
    line-height: 100%;
    font-family: ${globalFonts.MontAlt};
    font-weight: 300;
  }
`
const Element2 = styled.div`
  display: flex;
  max-width: 310px;
  width: 100%;
  gap: 10px;
  p{
    display: flex;
    flex-direction: column;
    p:first-child{
      color: #BB5002;
      font-size: 24px;
      font-weight: bold;
      line-height: 100%;
    }
    p:nth-child(2){
      color: white;
      font-size: 26px;
      font-weight: 600;
      line-height: 100%;
      font-family: ${globalFonts.Mont};
    }
    p:nth-child(3){
      color: white;
      font-size: 20px;
      line-height: 100%;
      font-family: ${globalFonts.MontAlt};
      font-weight: light;
    }
  }
`

export {
  RoadmapStyle,
  RoadmapPosition,
  Element,
  Element2
}