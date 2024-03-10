import './Footer.scss';
import './Footer.scss';
import img from '../../Assets/footer.jpg';
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Footer=()=>{

  useEffect(()=>{
    Aos.init({duration:1000})
   },[]);


  return (
    <>
    <section className='footer'>
    <div className='videoDiv'>
        <video src={video} loop autoPlay muted type='video/mp4'></video>
     </div>

     <div className='secContent container'>
        <div data-aos="fade-up" className='contactDiv'>
           <div className='text'>
             <small>Keep in Touch</small> 
             <h2>Travel with us</h2>
           </div> 
        

        <div className='inputDiv flex'>
             <input type='text' placeholder='Enter Email Address'/>
             <button className='btn flex' type='submit'>
                SEND <FiSend  className="icon"/>
             </button> 
        </div>
     </div>

     <div data-aos="fade-up" className='footerCard flex'>
         <div className='footerIntro flex'>
             <div className='logoDiv'>
                <a href='#' className='logo flex'>
                   <MdOutlineTravelExplore className="icon"/>Travel.
                </a>
             </div> 

             <div className='FooterParagraph'>`Tourism in India is 4.6% of the countrys gross domestic product (GDP). Unlike other sectors, tourism is not a priority sector for the Government of India. Forbes magazine ranked India as the 7th most beautiful country in The 50 Most Beautiful Countries In The World rankings.The World Travel and Tourism Council calculated that tourism generated ₹13.2 lakh crore (US$170 billion) or 5.8% of India s GDP and supported 32.1 million jobs in 2021. Even though, these numbers were lower than the pre-pandemic figures; the countrys economy witnessed a significant growth in 2021 after the massive downturn during 2020. The sector is predicted to grow at an annual rate of 7.8% to ₹33.8 lakh crore (US$420 billion) by 2031 (7.2% of GDP).India has established itself as the 5th largest global travel healthcare destination with an estimated market size of around $9 billion in 2019, out of the total global travel healthcare industry of $44.8 billion(2019).In 2014, 184,298 foreign patients travelled to India to seek medical treatment .`
             </div>

             <div className='footerSocials flex'>
             <AiOutlineTwitter className='icon'/>
             <AiFillYoutube className='icon'/>
             <AiFillInstagram className='icon'/>
             <SiTripadvisor className='icon'/>
             </div>
         </div>

         <div  className='footerLinks grid'>
            <div data-aos="fade-up" className='linkGroup'>
               <span className='groupTitle'>
                OUR AGENCY
               </span> 

               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Services
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Insurance
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Agency
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Tourism
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Payment
               </li>


            </div>

            <div data-aos="fade-up" className='linkGroup'>
               <span className='groupTitle'>
                PARTNERS
               </span> 

               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Uber
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     OLA
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Sweegy
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Zomato
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     OYO
               </li>


            </div>

            <div data-aos="fade-up" className='linkGroup'>
               <span className='groupTitle'>
                OFFICE 
               </span> 

               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Mumbai
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Delhi
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Hyderabad
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Kolkata
               </li>
               <li className='footerList flex'>
                     <FiChevronRight className='icon'/>
                     Chandigarh
               </li>


            </div>
            
            

         </div>

         <div  className='footerDiv flex'>
             <small>BEST TRAVEL WEBSITE THEME</small>
             <small>CopyRights RESERVED _ ISRATECH 2024
             </small>
         </div>

     </div>
  </div>
    </section>
    </>
  )
}

export default Footer;
