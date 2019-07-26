import React from 'react';
import Axios from 'axios';
import { Carousel, CarouselItem } from 'react-bootstrap';

class WhatIsIt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageNames: []
        };
    }

    componentDidMount() {
        this.loadImageNames();
    }

    /**
     * @summary API Call #1: Perform a GET call to the API for carousel image names
     */
    loadImageNames() {
        Axios.get("https://webapi20190630041009.azurewebsites.net/api/image/names")
            .then((response) => {
                // Store image names in the component state
                this.setState({ imageNames: response.data });
            });
    }

    render() {
        return <>
            <div className="container-fluid" id="carouselWrapper">
                <div className="row mb-4">
                    <div className="col p-0">
                        <Carousel
                            indicators
                        >
                            {
                                // API Call #2
                                // Iterate over the image names and create a
                                // carousel item for each image.
                                // The image is served from the web service API
                                this.state.imageNames.map((imageName, index) => 
                                    <CarouselItem key={`carousel-item-${index}`}>
                                        <img src={`https://webapi20190630041009.azurewebsites.net/api/image/${imageName}`} className="img-fluid d-block rounded" alt="Isuzu Vehicross" />
                                    </CarouselItem>
                                )
                            }
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="display-3 mt-0 p-0">
                            <p id="whatIsIt" onClick={(event) =>{
                                event.currentTarget.style.display='none';
                                this.body.style.display='';
                            }}>
                                What is it?
                        <i className="fas fa-chevron-down"></i>
                            </p>
                        </h1>
                    </div>
                </div>
            </div>

            <div 
                className="container mt-3" 
                style={{display:'none'}}
                ref={(ref) => this.body=ref}
            >
                <div className="row">
                    <div className="col text-center mb-5">
                        <h1 id="vx">Isuzu VehiCross</h1>
                        <h5>"The world's first <strong>all-road</strong> high-performance sports vehicle"</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md px-5 pb-3">
                        <p className="lead mb-4" id="intro">VehiCross delivers a sports car-like excitement mixed with the
                            capabilities of the world's best off-road machines.
                    </p>
                        <br />
                        <p>Conceived for the prestigious Tokyo Motor Show and later put into limited production for the Japanese
                            and U.S. market, the VehiCross (also known as VX) quickly gained international automotive attention
                            for its radical exterior styling and its impressive all-terrain/all-condition capabilities before
                            entering the U.S. market in 1999. During it's short existance (1999-2001) only 4153 vehicles were
                            manufactured for the U.S. market.
                    </p>
                        <p>The impressive performance of VehiCross comes primarily from its all-alluminum 24-valve DOHC V6
                            engine, sophisticated all-wheel-drive, and one of the most capable SUV suspensions available.
                    </p>
                        <h5 className="pt-3 heading">Torque-On-Demand<sup>&copy;</sup></h5>
                        <p>From rain to snow to dirt to dry asphalt, VehiCross can always take advantage of all available grip.
                        The patented terrain-sensing Torque-On-Demand<sup>&copy;</sup> (co-patented with Borg-Warner) 4WD system uses a
                            dedicated computer to monitor 12 different inputs, including all four wheels, the brakes and
                        throttle, <strong>every 20 milliseconds</strong> to "predict" slippage and compensate before it even
                            occurs. It instantly and continously adjusts the torque balance between the front and rear wheels to
                            maximize power delivery and control by limiting wheelspin no matter how hard you accelerate.
                            Vehicross is also equipped with full-time anti-lock brakes (ABS) which work on all four wheels all
                            the time even in 4WD.
                    </p>
                    </div>
                    <div className="col-md px-5 pb-5">
                        <h5 className="heading">Powerplant</h5>
                        <p id="ttt">VehiCross's DOHC 24-valve 3.5 liter V6 employs variable induction, direct-attack valvetrain and
                        coil-over-plug ignition. Rated at 215 horsepower @ 5400 rmp and 230 lbs.-ft torque @ 3000 rpm, the
                        VehiCross is one of the most powerful vehicles in its class at the time of release including power for
                        passing, merging and just plain pulling the grade.
                    </p>
                        <h5 className="pt-3 heading">Rally-Bred Suspension</h5>
                        <p>Proven in the Paris-Dakar Rally, monotube shocks with heat-expansion chambers heighten precision and
                        endurance for high-performance driving.
                    </p>
                        <p>
                            <ul className="list-styled">
                                <li>Aerospace-grade 6061-T8 extruded aluminum construction</li>
                                <li>Monotube design with external heat-expansion chambers</li>
                            </ul>
                            Nearly impossible to overheat, VehiCross's shocks cool faster and damp more efficiently than
                            ordinary shocks. The suspension is specially tuned to facilitate a broad range of performance
                            driving over varied terrain. The design separates shock gas and oil, and limits the loss of
                            dampening normally caused by aeration or cavitation during performance use. The expansion tank
                            prolongs full dampening and helps to ensure a smooth ride during normal driving. While you won't
                            find these on any other production SUV, they're standard with VehiCross's double-wishbone front,
                            4-link rear suspension. So as long as you maintain on-earth orbit, VehiCross can attack most any
                        surface it encouters.<br /><br />
                            To learn more about the VehiCross including the interior, additional features and technical
                        specs, visit the <a href="#">About VX</a> section. To see my personal VX and all of the
                        modifications I've done over the years, visit <a href="#">My Story</a>.
                    </p>
                    </div>
                </div>
            </div>
        </>;
    }
}

export default WhatIsIt;