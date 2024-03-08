import './Main.scss'
import img from '../../Assets/mumbai.jpg';
import img2 from '../../Assets/delhi.jpg';
import img3 from '../../Assets/varanasi.jpg';
import img4 from '../../Assets/prayagraj.jpg';
import img5 from '../../Assets/agra.jpg';
import img6 from '../../Assets/ayodhya.jpg';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import { BsClipboardCheck } from "react-icons/bs";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const Data =[
  {
  id:1,
  imgSrc: img,
  destTitle:'Gateway',
  location:'Mumbai',
  grade:'CULTURAL RELAX',
  fees:'700',
  description:`Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. `
},
{
  id:2,
  imgSrc: img2,
  destTitle:'IndiaGate',
  location:'Delhi',
  grade:'CULTURAL RELAX',
  fees:'800',
  description:`Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. `
},
{
  id:3,
  imgSrc: img3,
  destTitle:'Kashi',
  location:'Varanasi',
  grade:'CULTURAL RELAX',
  fees:'800',
  description:`Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva `
},
{
  id:4,
  imgSrc: img4,
  destTitle:'Sangam',
  location:'Prayagraj',
  grade:'CULTURAL RELAX',
  fees:'1000',
  description:`Prayagraj, also known as Allahabad or Illahabad, is a metropolis in the Indian state of Uttar Pradesh. It is the administrative headquarters of the Prayagraj district, the most populous district in the state and 13th most populous district in India and the Prayagraj division. `
},
{
  id:5,
  imgSrc: img5,
  destTitle:'Taj Mahal',
  location:'Agra',
  grade:'CULTURAL RELAX',
  fees:'1000',
  description:`Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres south-east of the national capital Delhi and 330 km west of the state capital Lucknow. `
},
{
  id:6,
  imgSrc: img6,
  destTitle:'Ayodhya',
  location:'Ayodhya',
  grade:'CULTURAL RELAX',
  fees:'1000',
  description:`Ayodhya is a city situated on the banks of the Sarayu river in the Indian state of Uttar Pradesh. It is the administrative headquarters of the Ayodhya district as well as the Ayodhya division of Uttar Pradesh, India. Ayodhya was historically known as Saketa. `
},
]
const Main=()=>{

  useEffect(()=>{
    Aos.init({duration:2000})
   },[])
  

  return (
    <>
     <section className="main container section">
        <div className='secTitle'>
          <h3 className='title'>Most visited destination</h3>
        </div>

        <div data-aos="fade-up"  className='secContent grid'>
          {
            Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                 return (
                  <div key={id} 
                  data-aos="fade-up" 
                  className='singleDestination'>
                  <div className='imageDiv'>
                     <img src={imgSrc} alt={destTitle}/>
                  </div>
                  
                  <div className='cardInfo'>
                     <h4 className='destTitle'>{destTitle}</h4>
                     <span className='continent flex'>
                     <HiOutlineLocationMarker className='icon'/>
                     <span className='name'>{location}</span>
                     </span>

                         <div className='fees flex'>
                           <div className='grade'>
                             <span>{grade}<small>+1</small></span>
                           </div>
                           <div className='price'>
                             <h5>{fees}</h5>
                           </div>
                         </div>

                         <div className='desc'>
                           <p>{description}</p>
                         </div>
                         
                         <button className='btn flex'>
                              Details<BsClipboardCheck className='icon' />
                         </button>
                     </div>
                  </div>
                 )
            })
          }
        </div>
     </section>
    </>
  )
}

export default Main;