import Slide01 from '../img/slide01.png';
import Slide02 from '../img/slide02.png';
import Slide03 from '../img/slide03.png';
import Slide04 from '../img/slide04.png';
import Slide05 from '../img/slide05.png';
import Slide06 from '../img/slide06.png';
import Slide07 from '../img/slide07.png';
import Slide08 from '../img/slide08.png';
import Slide09 from '../img/slide09.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 1440px;
    height: 480px;
    z-index: -100;
`;

const StyledSlider = styled.div`
    padding-top: 130px;
    
    position: relative;

    .slick-prev {
       
        left: 30px;
    }

    .slick-next {
   
        right: 40px;
    }

    .slick-prev:before,
    .slick-next:before {
        font-size: 30px;
        opacity: 0.5;
        color: white;
    }

    .slick-dots {
      
        display: flex;
        justify-content: center;
        bottom: 20px;
        color: white;

        li button:before {
            color: white;
        }

        li.slick-active button:before {
            color: white;
        }
    }
    responsive [
        {
            breakpoint : 768px,
            settings : {

            }
        }
    ]
   
`;
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            width: 12960, // 총 이미지들의 합 width
            dots: true, // 점이 보여질 건지 말건지
            infinite: true, // 무한 캐러셀 유무
            speed: 500, // 화면 넘어가는 속도
            slidesToShow: 1, // 한 번에 보여지는 컨텐츠 수
            slidesToScroll: 1, //한 번에 넘어가는 콘텐츠 수
            border: 'none',
        };
        return (
            <StyledSlider>
                <Slider {...settings} style={{ zIndex: 0 }}>
                    <div>
                        <StyledImg alt="" src={Slide01} />
                    </div>
                    <div>
                        <StyledImg alt="" src={Slide02} />
                    </div>
                    <div>
                        <StyledImg alt="" src={Slide03} />
                    </div>
                    <div>
                        <StyledImg alt="" src={Slide04} />
                    </div>
                    <div>
                        <StyledImg alt="" src={Slide05} />
                    </div>
                    <div>
                        <StyledImg alt="" src={Slide06} />
                    </div>
                    <div>
                        <StyledImg alt="" src={Slide07} />
                    </div>
                    <div>
                        <StyledImg alt="" src={Slide08} />
                    </div>
                    <div>
                        <StyledImg alt="" src={Slide09} />
                    </div>
                </Slider>
            </StyledSlider>
        );
    }
}
