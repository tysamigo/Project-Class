import React from 'react';
import { Carousel } from 'react-bootstrap';
import vxTyler1 from './assets/images/vx_tyler_1.jpg';
import vxTyler2 from './assets/images/vx_tyler_2.jpg';
import vxJane from './assets/images/vx_jane_1.jpg';
import vxJo1 from './assets/images/vx_jo_1.jpg';
import vxJo2 from './assets/images/vx_jo_2.jpg';
import vxJo3 from './assets/images/vx_jo_3.jpg';


export class ImageCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={vxTyler1}
                        alt="Isuzu VehiCross"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={vxTyler2}
                        alt="Isuzu VehiCross"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={vxJane}
                        alt="Isuzu VehiCross"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={vxJo1}
                        alt="Isuzu VehiCross"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={vxJo2}
                        alt="Isuzu VehiCross"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={vxJo3}
                        alt="Isuzu VehiCross"
                    />
                </Carousel.Item>
            </Carousel>
        );

    }
}