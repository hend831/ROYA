import React from 'react'
import './header.css'
import Button from 'react-bootstrap/Button';
import Rectangle1 from '../../../assets/images/Rectangle1.png'
import Rectangle2 from '../../../assets/images/Rectangle2.png'
import Group3 from '../../../assets/images/Group3.png'
import Rectangle4 from '../../../assets/images/Rectangle4.png'
import Group5 from '../../../assets/images/Group5.png'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {RiArrowRightSFill} from 'react-icons/ri';


const Header = () => {
  return (

    <div>

    <div className='headerpage  '>
            <div className='right '>
            <small className="ASD">___ثقتك بنا تهمنا</small>

            <h1 className='asd'>نحن نأتى بك من الرؤية 
            <br/>
            الى الواقع
            </h1>

            <p>نحن نسعى بالوصول بك الى اعلى مستويات الاحتراف
                 فى تقديم خدماتك للجمهور 
                من خلال
                
                 خدماتنا التى تشمل تطوير المواقع الالكترونية وتطبيقات الجوال وصناعة 
               المحتوى
              
                الاعلانى لتكن دائما متميز معنا </p>
        
            <Button className=" btn3">أكتشف المزيد<AiOutlineArrowLeft/></Button>
            <a>
                <small>
                <Button className="arrowbtn"><RiArrowRightSFill/></Button>
                أعرف أكثر
                </small>
            </a>
            </div>
            
        
           
        
        
    <div className='left'>
     
     
     
    
     <img src={Group5} className="mainimg"/>
     <img src={Rectangle4} className="img2"/>
     <img src={Group3} className="img3"/>
     <img src={Rectangle2} className="mainimg"/>
     <img src={Rectangle1} className="mainimg"/>
     </div>
     </div>
      <Button className="arrowicon"><RiArrowDropDownLine/></Button>
    
     
     </div>
  )
}

export default Header
