import React from 'react'
import './letus.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import MaskGroup from '../../assets/images/MaskGroup.png'
const Leus = () => {
  return (
    <div>
        <div>
        <div className="d-flex bgc container">
        <div className=" d-flex justify-content-center p-5 flex-column ">
      <h1>لنعمل شيئًا رائعًا معًا</h1>
      <p>هناك حقيقة مثبتة منذ زمن طويل
         وهي أن المحتوى المقروء لصفحة ما سيلهي 
        القارئ عن التركيز على الشكل الخارجي للنص 
        أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
       <div><button className="bn" >لنتحدث <AiOutlineArrowLeft className='arrowbtn '/></button></div>
      </div>
      <div><img src={MaskGroup} alt="MaskGroup" title="MaskGroup" className='imag'/></div>
    </div>
    </div>
    </div>
  )
}

export default Leus
