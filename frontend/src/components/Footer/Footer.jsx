// import React from 'react'
// import {Link} from 'react-router-dom'
// import logo from '../../assets/images/logo.png'
// import {AiFillYoutube, AiFillGithub} from 'react-icons/ai'
// const socialLinks = [
//     {
//         path: 'youtube.com',
//         icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
//     }, {
//         path: 'github.com',
//         icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
//     },
// ];
// const quickLinks01 = [
//     {
//         path: '/home',
//         display: "Home"
//     }, {
//         path: '/',
//         display: "About Us"
//     }, {
//         path: '/serviecs',
//         display: "Services"
//     }, {
//         path: '/home',
//         display: "Blog"
//     },
// ]
// const quickLinks02 = [
//     {
//         path: '/find-a-lawyer',
//         display: "Find-a-lawyer"
//     },
//     {
//         path: '/',
//         display: "Request an Appointment"
//     },
//     {
//         path: '/',
//         display: "Request an Appointment"
//     },
//     {
//         path: '/',
//         display: "Find a Location"
//     }, {
//         path: '/',
//         display: "Get a opinion"
//     },
// ]
// const quickLinks03 = [
//     {
//         path: '/',
//         display: "Donate"
//     }, {
//         path: '/contact',
//         display: "Contact Us"
//     },
// ]
// export const Footer = () => {
//     const year = new Date().getFullYear()
//     return (<footer className='pb-16 pt-10'>
//         <div className="container">
//             <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
//                 <div><img src={logo}
//                         alt=""/><p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
//                         Copyright © {year}
//                         developed by Team Justice League</p>
//                     <div className='flex items-center gap-3 mt-4'>
//                         {
//                         socialLinks.map((link, index) => (< Link to = {
//                             link.path
//                         }
//                         key = {
//                             index
//                         } > {
//                             link.icon
//                         } </Link>))
//                     }</div>
//                 </div>
//             </div>
//         </div>
//     </footer>


//     )
// }
import React from 'react'

const Footer = () => {
    return (
        <div>Footer</div>
    )
}

export default Footer
