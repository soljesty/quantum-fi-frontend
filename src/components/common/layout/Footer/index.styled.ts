import styled from "styled-components";
import { globalFonts } from "../../../../constants/fonts.constant";

const FooterStyle = styled.div`
  background-color: #000D37;
`

const Container = styled.div`
  max-width: 1516px;
  width: 100%;
  margin: auto;
  padding: 100px 20px 150px 20px;
  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`

const MottoText = styled.div`
  color: #FEBC00;
  font-family: ${globalFonts.Mont};
  font-size: 16px;
  line-height: 150%;
  font-weight: bold;
  /* width: 100vw; */
  position: relative;
  /* padding-bottom: 599px; */
  display: block !important;
`

const CopyRight = styled.div`
  color: #7f869b;
  font-size: 16px;
  line-height: 150%;
  margin-left: 30px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`

const Link = styled.a`
  color: #a0a0a0;
  cursor: pointer;
  font-size: 21px;
  font-weight: 400;
  text-decoration: none;
  &:hover{
    color: white;
    font-weight: 600;
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    &:hover{
      font-size: 17px;
    }
  }
`

const DiscordButton = styled.a`
  border-width: 4px;
  border-style: solid;
  border: #32c0f2 4px solid;
  border-radius: 10px;
  color: white;
  width: 290px;
  height: 56px;
  font-family: ${globalFonts.Mont};
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 30px;

  text-decoration: none;
  &:hover{
    scale: 1.1;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    border-width: 2px;
    width: 180px;
    height: 40px;
    font-size: 12px;
  }
`

export {
  FooterStyle,
  Container,
  MottoText,
  CopyRight,
  Link,
  DiscordButton
}