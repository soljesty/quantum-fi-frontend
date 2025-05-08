import { useEffect } from 'react';
import { BRAND_IAMGE } from '../../../../constants/image.constants'
import CustomImage from '../../../common/CustomImage'
import * as S from './index.styled'
import AOS from "aos";
import "aos/dist/aos.css";
const Tokenomics = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <S.TokenomicsStyle>
            <S.TitleFlex data-aos="fade-up" data-aos-duration="2000">
                <CustomImage
                    image={BRAND_IAMGE}
                    smWidth='32px'
                    smHeight='32px'
                />
                <S.TokenomicsText>
                    $TOKENOMICS
                </S.TokenomicsText>
            </S.TitleFlex>

            <div data-aos="zoom-out-down" data-aos-duration="2000">
                <CustomImage
                    image="/assets/images/tokenomics.svg"
                    width='80vw'
                    smWidth='90vw'
                    marginTop='50px'
                    smMarginTop='20px'
                />
            </div>
        </S.TokenomicsStyle>
    )
}

export default Tokenomics