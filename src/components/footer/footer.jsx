import react from 'react'
import './footer.css'
import flag1 from '../../assets/images/10014.jpg'
import flag2 from '../../assets/images/10015.jpg'
import flag3 from '../../assets/images/10016.jpg'


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='setting'>
                    <div>
                        <span className='lmao'>COMPANY</span> <br /><br /><br />
                        <ul className='footerul'>
                            <li className='footerlink'><a className='footera' href="">About Us</a></li>
                            <li className='footerlink'><a className='footera' href="">Why Choose Us</a></li>
                            <li className='footerlink'><a className='footera' href="">Team</a> </li>
                            <li className='footerlink'><a className='footera' href="">Pricing & Plans</a></li>
                            <li className='footerlink'><a className='footera' href="">Contacts</a></li>
                            <li className='footerlink'><a className='footera' href="">Investors</a></li>
                        </ul>
                    </div>

                    <div>
                        <span className='lmao'>SERVICES</span> <br /><br /><br />
                        <ul className='footerul'>
                            <li className='footerlink'><a className='footera' href="">Web Design & Development</a></li>
                            <li className='footerlink'><a className='footera' href="">Why Choose Us</a></li>
                            <li className='footerlink'><a className='footera' href="">Speacialized SEO Services</a></li>
                            <li className='footerlink'><a className='footera' href="">Specialized Social Services</a></li>
                            <li className='footerlink'><a className='footera' href="">Special Graphics Services</a></li>
                            <li className='footerlink'><a className='footera' href="">Investors</a></li>
                        </ul>

                    </div>

                    <div>
                        <span className='lmao'>RESOURCES</span> <br /><br /><br />
                        <ul className='footerul'>
                            <li className='footerlink'><a className='footera' href="">Portfolio</a></li>
                            <li className='footerlink'><a className='footera' href="">Terms Of Services</a></li>
                            <li className='footerlink'><a className='footera' href="">Help & FAQ</a></li>
                            <li className='footerlink'><a className='footera' href="">Contact Us</a></li>
                            <li className='footerlink'><a className='footera' href="">Site Map</a></li>
                        </ul>
                    </div>
                </div> <br /><br /> <br />

                <div className='flag' >
                    <div className='omgg'>
                    <div className='flags'>
                        <img className='usa' src={flag1} alt="USA" />
                    </div>
                    <span className='bolding'>USA:</span> <br />
                    <span>1st Avenue, SW, Hickory,NC, USA <br />Email: info@thedigitalimpacts.com</span>
                    </div>

                    <div className='omgg'>
                    <div className='flags'>
                        <img className='uk' src={flag2} alt="UK" />
                    </div>
                    <span className='bolding'>UK:</span> <br />
                    <span>Oldham Greater Manchester, United Kingdom <br />Email: info@thedigitalimpacts.com</span>
                    </div>

                    <div className='omgg'>
                    <div className='flags'>
                        <img className='canada' src={flag3} alt="CANADA" />
                    </div>
                    <span className='bolding'>CANADA:</span> <br />
                    <span>1st Avenue, SW, Hickory,NC, USA <br />Email: info@thedigitalimpacts.com</span>
                    </div>
                </div> <br /> <br /> <br /> <br />

                <hr className='footerhr' /> <br />

                <div>
                    <span>Copyright © 2022 The Digital Impacts. All rights reserved</span>
                </div>



            </div>
        </>
    )
}



export default Footer
