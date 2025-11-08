import react from 'react'
import './home.css'
import img from '../../assets/images/10003.jpg'
import Services from '../servicess/services'
import Aboutus from '../about us/aboutus'
import Portfolio from '../portfolio/portfolio'

const Home = () => {
    return (
        <>
            <div className='container'>
                <div>
                    <img className='img100' src={img} alt="home image" />
                </div>

                <div className='text'>
                    <span className='p1'>We are full Services</span> <br />
                    <span className='p22'>Digital Marketing Agency</span> <br />
                    <br />
                    <span className='p3'>Welcome to the Digital Impacts</span> <br />
                    <hr />
                    <span className='p4'>We partner with our clients with a team of professionals, we are able to provide <br />
                        the best on our side. We strive to be leaders in digital marketing services worldwide <br />
                        by revolutionizing the industry and setting new standards of professionalism and success.
                    </span>
                    <button className='button'>Message Us Now</button>
                </div>
            </div>
            <Services />
            <Aboutus />
            <Portfolio />

            <div>
                <div className='idk'>
                    <span className='p10'>Feel Free To <span className='p100'>Contact</span> Us By Submitting</span> <br />
                    <span className='p3'>Form Or Contact Live Support</span>
                </div>

                <div className='shii'>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18888.50941887474!2d-2.128079!3d53.717128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bbf740c320e23%3A0xf7e239b5b0e41993!2sParkin%20House%20Guest%20House!5e0!3m2!1sen!2sus!4v1762610469236!5m2!1sen!2sus" width="700" height="350"></iframe> <br />
                        <span>+447424997026 <br /> +447900190002 </span> <br />
                        <span>info@thedigitalimpacts.com</span>
                    </div>
                    <div>
                        <form class="form">
                            <label for="name">Name</label> <br />
                            <input type="text" id="name" placeholder="your name" /> <br />

                            <label for="surname">Surname</label><br />
                            <input type="text" id="surname" placeholder="your surname" />

                            <label for="email">Email</label> <br />
                            <input type="email" id="email" placeholder="your email address" /> <br />

                            <label for="contact">Contact Number</label> <br />
                            <input type="tel" id="contact" placeholder="123-45-678" /> <br />
                        </form>
                    </div>
                </div>
            </div>

            

            <div className='lahaol'>
                <hr className='loine' /> <br />
                <span className='p22' > Let's Work Together</span> <br /> <br />
                <span>Driving your business forward with strong marketing strategies <br />Get a free consultation to make this happen!</span> <br /> <br />
                <button className='button'>Connect</button>
            </div>



        </>
    )
}
export default Home
