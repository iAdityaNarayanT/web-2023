import React from 'react'
import aboutImg from '../../assets/images/about.png'
// import aboutCardImg from '../../assets/images/about-card.png'
import {Link} from 'react-router-dom'
const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                    {/* =====================ABOUT IMG================ */}

                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg}
                            alt=""/> {/* <div className="absoltue z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[-22%]">
                            <img src={aboutCardImg}
                                alt=""/>
                        </div> */} </div>

                    {/* ===============ABOUT CONTENT================ */}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className='heading'>
                            Proud to be one of the nation's best</h2>
                        <p className="text__para">
                            We take immense pride in being among the nation's top legal service providers. Our commitment to excellence distinguishes us in the realm of justice.</p>
                        <p className="text__para mt-[30px]">At Nyay Setu, we're dedicated to serving our clients with the utmost expertise and integrity, ensuring their legal needs are met with exceptional care.</p>
                        <Link to='/'>
                            <button className="btn">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
