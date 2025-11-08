import react from 'react'
import './portfolio.css'
import tv1 from '../../assets/images/10010.jpg'
import tv2 from '../../assets/images/10011.jpg'
import tv3 from '../../assets/images/10012.jpg'
import tv4 from '../../assets/images/10013.jpg'

const Portfolio = () => {
    return (
        <>
            <div className='p1'>Projects We've Deliverd</div>
            <div className='pp1'>Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web and mobile apps related to various spheres including e- <br /> learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy.</div>

            <div className='pp2'>
                <div className='p2'>
                    <div className='ppp2'>
                        <span className='tv1'>INDUSTRY</span> <br />
                        <span className='tv11'>REVIVE</span> <br />
                        <span className='tv1'>Revive Beauty Salon & Institute</span> <br />
                        <span className='tv1'>WEB DEVELOPMENT</span> <br />
                        <span className='tv1'>QUALITY ASSURANCE</span>
                    </div>
                    <div> <img className='img11' src={tv1} alt="tv1" /></div>
                </div>

                <div className='p2'>
                    <div><img className='img11' src={tv2} alt="tv2" /></div>
                    <div> 
                        <span className='tv1'>INDUSTRY</span> <br />
                        <span className='tv11'>Voeux</span> <br />
                        <span className='tv1'>Natural Skin Care</span> <br />
                        <span className='tv1'>WEB DEVELOPMENT</span> <br />
                        <span className='tv1'>QUALITY ASSURANCE</span>
                        </div>
                </div>

                <div className='p2'>
                    <div>
                        <span className='tv1'>INDUSTRY</span> <br />
                        <span className='tv11'>KINGZ</span> <br />
                        <span className='tv1'>Ecommerce Website</span> <br />
                        <span className='tv1'>WEB DEVELOPMENT</span> <br />
                        <span className='tv1'>QUALITY ASSURANCE</span>
                    </div>
                    <div><img className='img11' src={tv3} alt="tv3" /></div>
                </div>

                <div className='p2'>
                    <div><img className='img11' src={tv4} alt="tv4" /></div>
                    <div>
                        <span className='tv1'>INDUSTRY</span> <br />
                        <span className='tv11'>Unifresh</span> <br />
                        <span className='tv1'>Fruit and Vegetable Retail Store</span> <br />
                        <span className='tv1'>WEB DEVELOPMENT</span> <br />
                        <span className='tv1'>QUALITY ASSURANCE</span>
                    </div>
                </div>
            </div>

        </>
    )
}



export default Portfolio
