import { FlexBox } from '../../FlexBox'
import * as S from './index.styled'
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <S.FooterStyle>
      <S.Container>
        <FlexBox justifyContent='space-between' gap = "50px" smGap='10px'>
          <FlexBox width='default' direction='column' gap="24px">
            <S.MottoText>
              Quantum Finance - Yield-bearing Defi + NFT Infrastructure on #Injective.
            </S.MottoText>
            <S.DiscordButton href = "https://discord.com/invite/mcfjCBQAb3" target='__blank'>
              Discord
              <BsArrowRight color="white" />
            </S.DiscordButton>
            <S.CopyRight>
              © {new Date().getFullYear()} Quantum Finance
            </S.CopyRight>
          </FlexBox>
          <FlexBox maxWidth='100px' direction='column' smGap='10px'>
            <S.Link href = "https://twitter.com/QuantumFi_" target='__blank'>Twitter</S.Link>
            <S.Link href = "https://discord.com/invite/mcfjCBQAb3" target='__blank'>Discord</S.Link>
            <S.Link href = "https://t.me/quantumofc" target='__blank'>Telegram</S.Link>
          </FlexBox>

          <FlexBox direction='column' maxWidth='440px' smGap='10px'>
            <S.Link>Privacy Policy and Terms of Service</S.Link>
            <S.Link>Quantum Privacy Policy</S.Link>
          </FlexBox>
        </FlexBox>
      </S.Container>
    </S.FooterStyle>
  )
}

export default Footer