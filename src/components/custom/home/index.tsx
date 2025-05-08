import styled from 'styled-components'
import ArchitectureOverview from './ArchitectureOverview'
import MainLanding from './MainLanding'
import Roadmap from './Roadmap'
import TakeStep from './TakeStep'
import Tokenomics from './Tokenomics'
import WhatIsQuantum from './WhatIsQuantum'

const HomeElementStyle = styled.div`
  position: relative;
  overflow-x: hidden;
`

const LooperImage = styled.img`
    position: absolute;
    right: -22vw;
    top: 400px;
    width: 60vw;
    z-index: 0;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const HomeElement = () => {
  return (
    <HomeElementStyle>
      <MainLanding />
      <LooperImage
        src="/assets/images/looper.svg"
      />
      <WhatIsQuantum />
      <ArchitectureOverview />
      <Tokenomics />
      <Roadmap />
      <TakeStep />
    </HomeElementStyle>
  )
}

export default HomeElement