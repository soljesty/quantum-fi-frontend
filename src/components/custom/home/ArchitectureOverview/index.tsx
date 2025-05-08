import CustomImage from '../../../common/CustomImage'
import * as S from './index.styled'

const ArchitectureOverview = () => {
  return (
    <S.ArchitectureOverviewStyle >
      <S.Container data-aos="fade-up" data-aos-duration="2000">
        <S.Title>
          Architecture Overview
        </S.Title>
        <S.ContentText>
          Quantum finance offers different yield generating features for both DeFI and NFT enthusiasts, our aim is to link the different preferences on the Injective ecosystem.
        </S.ContentText>
        <CustomImage
          image="/assets/images/diagram.svg"
          width='80vw'
          smWidth='90vw'
        />
      </S.Container>
    </S.ArchitectureOverviewStyle>
  )
}

export default ArchitectureOverview