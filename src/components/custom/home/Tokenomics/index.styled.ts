import styled from "styled-components";

const TokenomicsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient( #020327, #3136B0, #001559);
  padding: 120px 20px;
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`

const TokenomicsText = styled.div`
  color: #F6931E;
  font-size: 50.5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  &:after{
    content: '';
    display: block;
    position: relative;
    width: 70%;
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

const TitleFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`

export {
  TokenomicsStyle,
  TokenomicsText,
  TitleFlex
}