import styled from "styled-components"

const WhatIsQuantumStyle = styled.div`
  background-image: linear-gradient(#020327, #363BBD, #01165A);
`

const Container = styled.div`
  max-width: 1516px;
  width: 100%;
  margin: auto;
  padding: 80px 20px;
  z-index: 10;
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`

const TitleFlex = styled.div`
  max-width: 1121px;
  width: 100%;
  margin: auto;
`

const Title = styled.div`
  color: #FA931B;
  font-size: 50.5px;
  width: default;
  span:first-child{
    color: #FEBC00;
  }
  span:nth-child(2){
    color: #00BCFE;
  }
  span:nth-child(3){
    color: #FEBC00;
  }
  &:after{
    content: '';
    display: block;
    position: relative;
    width: 30%;
    /* border: 2px solid #898989; */
    border-bottom: 3.45px solid transparent;
    border-image: linear-gradient(0.25turn, #E26C00, rgba(255, 205, 27, 0.4), rgba(255, 205, 27, 0));
    border-image-slice: 1;
    border-radius: 50%;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`

const ContentText = styled.div`
  margin-top: 40px;
  max-width: 1050px;
  width: 100%;
  // font
  font-family: "Montserrat Alternates", sans-serif;
  color: white;
  font-size: 32px;
  font-weight: light;
  line-height: 100%;
  p{
    color: #1577D1;
    margin-top: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`

const ThreeFlex = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`

const OneThird = styled.div`
  width: 417.77px;
  border-radius: 20px;
  border: #5566B8 4px solid;
  text-align: center;
  color: white;
  filter: drop-shadow(0 0 0.75rem black);
  
  img{
    border-radius: 20px 20px 0px 0px;
    border-bottom: 2px solid #5E6CB4;
  }
  h1{
    margin-top: 20px;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
  h2{
    margin-top: 10px;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 300;
    font-size: 19px;
    max-width: 295.22px;
    width: 100%;
    margin: auto;
    height: 150px;
  }
  @media screen and (max-width: 768px) {
    width: 312px;
    img{
      width: 100%;
      height: 240px;
    }
    h1{
      font-size: 18px;
    }
    h2{
      font-size: 14px;
      height: 80px;
    }
  }
`

export {
  WhatIsQuantumStyle,
  Container,
  TitleFlex,
  Title,
  ContentText,
  ThreeFlex,
  OneThird
}