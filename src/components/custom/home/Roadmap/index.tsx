import CustomImage from '../../../common/CustomImage'
import { ROCKET_IMAGE } from '../../../../constants/image.constants'
import * as S from './index.styled'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useMedia } from 'react-use';

interface Roadmap {
  title: string;
  subtitle: string;
  content: string;
}

const roadmapData: Roadmap[] = [
  {
    title: "May 2024",
    subtitle: "Next Steps...",
    content: "Introduce the expansion of the platform."
  },
  {
    title: "April 2024",
    subtitle: "Quantum NFTS",
    content: "QuantumLabs NFT collection with unqiue staking opportunities."
  },
  {
    title: "March 2024",
    subtitle: "Token issue",
    content: "Launch the pillar of the Quantum ecosystem"
  },
  {
    title: "March 2024",
    subtitle: "Incentivized Testnet",
    content: "Present our platform and solutions to the community."
  },
  {
    title: "March 2024",
    subtitle: "Partnerships",
    content: "Building connections with ecosystem partners and backers."
  },
  {
    title: "December 2023",
    subtitle: "Development",
    content: "Understanding the environment and building the technical background"
  },
  {
    title: "December 2023",
    subtitle: "Team Set-Up",
    content: "Set up a team with deep knowledge in noth DeFi and NFT space."
  },
  {
    title: "December 2023",
    subtitle: "Market Research",
    content: "Defining the problem and the market segment."
  }
]

const Roadmap = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return (
    <S.RoadmapStyle>
      {
        isMobile
          ?
          <VerticalTimeline >
            {
              roadmapData.map((map: Roadmap, key: number) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(4, 32, 17)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={map.title}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    key={key}

                  >
                    {/* <h3 className="vertical-timeline-element-title">{map.title}</h3> */}
                    <h4 className="vertical-timeline-element-subtitle">{map.subtitle}</h4>
                    <p>
                      {map.content}
                    </p>
                  </VerticalTimelineElement>
                )
              })
            }
          </VerticalTimeline>
          :
          <>
            {/* <S.RoadmapPosition data-aos="fade-up" data-aos-duration="2000">
              {
                roadmapData.map((road: any, key: number) => {
                  return (
                    key % 2 == 0
                      ?
                      <S.Element2>
                        <CustomImage
                          image="/assets/images/rocket_arrow_up.svg"
                          width='108.25px'
                          height='55.39px'
                        />
                        <p>
                          <p>{road.title}</p>
                          <p>{road.subtitle}</p>
                          <p>{road.content}</p>
                        </p>

                      </S.Element2>
                      :
                      <S.Element>

                        <p>{road.title}</p>
                        <p>{road.subtitle}</p>
                        <p>{road.content}</p>
                        <CustomImage
                          image="/assets/images/rocket_arrow_down.svg"
                          height='108.25px'
                          width='55.39px'
                          marginLeft='40px'
                        />                      </S.Element>
                  )
                })
              }
            </S.RoadmapPosition> */}

            <CustomImage
              image={ROCKET_IMAGE}
              width='100vw'
            />
          </>
      }


    </S.RoadmapStyle>
  )
}

export default Roadmap