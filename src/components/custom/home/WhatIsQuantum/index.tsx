import { WHAT_IS_QUANTUM_1_IMAGE, WHAT_IS_QUANTUM_2_IMAGE, WHAT_IS_QUANTUM_3_IMAGE } from '../../../../constants/image.constants'
import CustomImage from '../../../common/CustomImage'
import * as S from './index.styled'

interface IData {
  id: number;
  title: string;
  content: string;
  image: string;
}

const data: IData[] = [
  {
    id: 0,
    title: "Boosted LP Farms",
    content: "By unlocking token-gated farms and participating in APR-boosted farming activities, its can significantly increase farming rewards and yield.",
    image: WHAT_IS_QUANTUM_1_IMAGE,
  },
  {
    id: 1,
    title: "Non-Inflationary yields",
    content: "Sustainable yielding system based on an amplified economic model to provide steady and reliable income for the community.",
    image: WHAT_IS_QUANTUM_2_IMAGE,
  },
  {
    id: 2,
    title: "Guild Staking",
    content: "Get  escrowed xQTUM tokens, form teams and boost your individual earnings with the power of community.",
    image: WHAT_IS_QUANTUM_3_IMAGE,
  }
]

const WhatIsQuantum = () => {
  return (
    <S.WhatIsQuantumStyle>
      <S.Container> 
        <S.TitleFlex  data-aos="fade-up"  data-aos-duration="2000">
          <S.Title>
            What is <span>Quan</span><span>tum</span><span>?</span>
          </S.Title>

          <S.ContentText>
            Yield-bearing Ecosystem focusing on long-term sustainability.
            <p>
              Our mission is to provide a sustainable system and bringing predictable and long-term yield mechanisms for DeFi investors.
            </p>
          </S.ContentText>
        </S.TitleFlex>

        <S.ThreeFlex>
          {data.map((dat: IData) => {
            return (
              <S.OneThird key={dat.id}  data-aos="flip-left"  data-aos-duration="2000">
                <CustomImage
                  image={dat.image}
                  width='409.77'
                  height='258.04px'
                />
                <h1>{dat.title}</h1>
                <h2>{dat.content}</h2>
              </S.OneThird>
            );
          })}
        </S.ThreeFlex>
      </S.Container>
    </S.WhatIsQuantumStyle>
  )
}

export default WhatIsQuantum