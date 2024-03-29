import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import faqImg from '../assets/images/faq-img.png'
import About from '../components/About/About'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import ServiceList from '../components/Services/ServiceList'
import LawyerList from '../components/Lawyers/LawyerList'
import FaqList from '../components/Faq/FaqList'
const Home = () => {
    return (
        <> {/* ============HERO SECTION========== */}

            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90pxJ items-center justify-between">


                        {/*========= HERO CONTENT========= */}
                        <div>
                            <div className='lg:w-[570px]'>
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">We help our clients fight with injustice.</h1>
                                <p className="text__para">At NyaySetu, we're on a mission to empower clients, connect them with legal experts, and fight injustice. Together, we navigate the legal landscape to ensure fairness prevails</p>
                                <button className="btn">Request an Appointment</button>
                            </div>


                            {/* ================HERO COUNTER================== */}
                            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Years Of Experience</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Locations</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Client Satisfaction</p>
                                </div>
                            </div>

                        </div>
                        {/*========= HERO CONTENT========= */}

                        <div className="flex gap-[30px] justify-end">
                            <div><img className='w-full'
                                    src={heroImg01}
                                    alt=""/></div>
                            <div className='mt-[30px]'><img src={heroImg02}
                                    className='w-full mb-[30px]'
                                    alt=""/>
                                <img src={heroImg03}
                                    className='w-full'
                                    alt=""/></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ============HERO SECTION END========== */}

            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="heading text-center">Providing the best Legal Services</h2>
                        <p className='text__para text-center'>Legal Service for everyone. Our service offers unmatched, expert legal aid.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                        <div className="py-[30px] px-5">
                            <div className='flex items-center justify-center'><img src={icon01}
                                    alt=""/></div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a lawyer.</h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Discover your perfect legal ally. Use our intuitive platform to find the right lawyer for your unique needs. Your justice journey begins here.</p>
                                <Link to='/lawyers' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>

                                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                                </Link>
                            </div>
                        </div>
                        <div className="py-[30px] px-5">
                            <div className='flex items-center justify-center'><img src={icon02}
                                    alt=""/></div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find location.</h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Locate legal aid providers near you. Our platform simplifies the search for legal assistance, connecting you with trusted experts in your area.</p>
                                <Link to='/lawyers' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>

                                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                                </Link>
                            </div>
                        </div>
                        <div className="py-[30px] px-5">
                            <div className='flex items-center justify-center'><img src={icon03}
                                    alt=""/></div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Secure your legal consultation easily. Book appointments with experienced lawyers through our user-friendly platform. Legal solution is just click away.</p>
                                <Link to='/lawyers' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>

                                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <About/> {/* ===============SERVICES SECTION=========== */}
            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className='heading text-center'>Our Platform Provides</h2>
                        <p className="text__para text-center">"Trusted legal services at your fingertips."
                        </p>

                    </div>
                    <ServiceList/>
                </div>
            </section>
            {/* ===============SERVICES SECTION END=========== */}


            {/* ==============FETAURE SECTION ================= */}

            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">

                        {/* =====================FEATURE CONTENT =================== */}
                        <div className="xl:w-[670px]">
                            <h2 className="heading">Get legal assitance
                                <br/>
                                anytime.</h2>
                            <ul className="p-4">
                                <li className="text__para">1. Schedule appointment directly.</li>
                                <li className="text__para">2. Search for lawyer here and contact their office.</li>
                                <li className="text__para">3.View our legal professionals who are accepting new clients, use the online scheduling toot to select an appointment time.</li>

                            </ul>
                            <Link to='/'>
                                <button className="btn">Learn More</button>
                            </Link>
                        </div>

                        {/* ============FEATURE IMAGE================= */}
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0"><img src={featureImg}
                                alt=""
                                className='w-3/4'/>
                            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2  pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">Tue, 24</p>
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">10:00AM</p>
                                    </div>
                                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]"><img src={videoIcon}
                                            alt=""/></span>
                                </div>
                                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">Consultation</div>

                                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]"><img src={avatarIcon}
                                        alt=""/></div>
                                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Rishabh Singh</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==============FETAURE SECTION end ================= */}
            {/* ==============our services ================= */}
            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className='heading text-center'>We provide following legal services:</h2>
                        <p className="text__para text-center">We offer a spectrum of legal services, including:
                        </p>
                    </div>
                    <LawyerList/>

                </div>
            </section>
            {/* ==============our services ================= */}

            {/* ====================FAQ SECTION============= */}
            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className="w-1/2 hidden md:block"><img src={faqImg}
                                alt=""/></div>
                        <div className="w-full md:w-1/2">
                            <h2 className='heading'>Most Questions Asked By Clients</h2>
                            <FaqList/>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====================FAQ SECTION END============= */} </>


    );
}

export default Home
