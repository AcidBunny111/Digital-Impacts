import react from 'react'
import './services.css'
import img from '../../assets/images/10003.jpg'
import img1 from '../../assets/images/10004.jpg'
import img2 from '../../assets/images/10005.jpg'
import img3 from '../../assets/images/10006.jpg'
import img4 from '../../assets/images/10007.jpg'
import img5 from '../../assets/images/10008.jpg'
import img6 from '../../assets/images/10009.jpg'

const Services = () => {
    return (
        <>
            <div className='c'>
                <span>We <span className='color'>Provide</span> The Best </span> <br />
                <span>Services With</span> <span className='color'>Our</span> <br />
                <span className='color'>Developers</span>
            </div>

            <div className='c1'>

                <div className='style'>
                    <div className='heading'>Digital Marketing</div> <br />
                    <span>The Digital Impacts have compiled a list of the best digital marketing companies in the world. </span>

                </div>

                <div className='style'>
                    <div className='heading'>Web Development</div> <br />
                    <span>Web design services comprise the process of user interface (UI) and user experience (UX) design of any web-based solution.</span>
                </div>

                <div className='style'>
                    <div className='heading'>Graphic Designing</div> <br />
                    <span>Create visual concepts to communicate ideas that inspire and captivate consumers, creative thinking, an aptitude towards art and design</span>
                </div>
            </div>

            <div className='c1'>
                <div className='style'>
                    <div className='heading'>Content Writter</div> <br />
                    <span>That content can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media.</span>
                </div>

                <div className='style'>
                    <div className='heading'>SEO</div> <br />
                    <span>Help search engines find, crawl, and index your content efficiently. The website can become easily findable, more relevant and popular towards user search queries.</span>
                </div>
            </div>

            <div className='ccc'>
                <span className='c2'>Industries We</span> <br />
                <span className='cc2'>Work With </span> <br />
                <span>We work as a technology partner for various industries <br /> 
                Our expertise can be applied to the specific demands <br />
                and nuance in your industry</span>
            </div>
            <div className='c3'>
                 <div className='c4'><img src={img1} alt="real estate" /> <br />REAL ESTATE</div>
                 <div className='c4'><img src={img2} alt="education" /> <br />EDUCATION</div>
                 <div className='c4'><img src={img3} alt=" commerce" /> <br />COMMERCE</div>
                 <div className='c4'><img src={img4} alt="hospitality" /> <br />HOSPITALITY</div>
                 <div className='c4'><img src={img5} alt="healthcare" /> <br />HEALTHCARE</div>
                 <div className='c4'><img src={img6} alt="fintech" /> <br />FINTECH</div>
            </div>

        </>
    )
}
export default Services
